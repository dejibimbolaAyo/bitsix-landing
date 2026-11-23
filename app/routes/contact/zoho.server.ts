import { z } from "zod";

export const zohoConfigSchema = z.object({
  ZOHO_ACCOUNTS_URL: z.enum([
    "https://accounts.zoho.com",
    "https://accounts.zoho.com.au",
    "https://accounts.zoho.eu",
    "https://accounts.zoho.in",
    "https://accounts.zoho.com.cn",
    "https://accounts.zoho.jp",
    "https://accounts.zoho.sa",
    "https://accounts.zohocloud.ca",
  ]),
  ZOHO_CLIENT_ID: z.string().min(1),
  ZOHO_CLIENT_SECRET: z.string().min(1),
  ZOHO_REFRESH_TOKEN: z.string().min(1),
});

type ZohoConfig = z.infer<typeof zohoConfigSchema>;

const tokenSchema = z.object({
  access_token: z.string().min(1),
  api_domain: z.string().regex(/^https:\/\/(?:www|sandbox|developer)\.zohoapis\.(?:com(?:\.au|\.cn)?|eu|in|jp|sa|ca)$/),
  expires_in: z.number().positive(),
});

const resultSchema = z.object({
  data: z.tuple([z.object({
    status: z.literal("success"),
    code: z.literal("SUCCESS"),
    details: z.object({ id: z.string().min(1) }),
  })]),
});

// Cache only resolved credentials, never request-bound fetch promises.
let cachedToken: {
  config: ZohoConfig;
  token: z.infer<typeof tokenSchema>;
  refreshAt: number;
} | undefined;

async function getAccessToken(config: ZohoConfig) {
  if (
    cachedToken && cachedToken.refreshAt > Date.now() &&
    cachedToken.config.ZOHO_ACCOUNTS_URL === config.ZOHO_ACCOUNTS_URL &&
    cachedToken.config.ZOHO_CLIENT_ID === config.ZOHO_CLIENT_ID &&
    cachedToken.config.ZOHO_CLIENT_SECRET === config.ZOHO_CLIENT_SECRET &&
    cachedToken.config.ZOHO_REFRESH_TOKEN === config.ZOHO_REFRESH_TOKEN
  ) {
    return cachedToken.token;
  }

  const response = await fetch(`${config.ZOHO_ACCOUNTS_URL}/oauth/v2/token`, {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: config.ZOHO_CLIENT_ID,
      client_secret: config.ZOHO_CLIENT_SECRET,
      refresh_token: config.ZOHO_REFRESH_TOKEN,
    }),
    redirect: "manual",
    signal: AbortSignal.timeout(8_000),
  });
  if (!response.ok) throw new Error(`Zoho authentication failed (${response.status})`);

  const token = tokenSchema.safeParse(await response.json());
  if (!token.success) throw new Error("Zoho did not return a usable access token");

  cachedToken = {
    config,
    token: token.data,
    refreshAt: Date.now() + Math.max(0, token.data.expires_in - 60) * 1_000,
  };
  return token.data;
}

export async function createZohoLead(config: ZohoConfig, lead: {
  Last_Name: string;
  Email: string;
  Phone?: string;
  Company?: string;
  Description: string;
}) {
  const token = await getAccessToken(config);
  const response = await fetch(`${token.api_domain}/crm/v8/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token.access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: [lead] }),
    redirect: "manual",
    signal: AbortSignal.timeout(8_000),
  });
  if (response.status === 401 && cachedToken?.token === token) {
    cachedToken = undefined;
  }
  if (!response.ok) throw new Error(`Zoho lead request failed (${response.status})`);
  if (!resultSchema.safeParse(await response.json()).success) {
    throw new Error("Zoho did not confirm lead creation");
  }
}
