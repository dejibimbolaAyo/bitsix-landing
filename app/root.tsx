import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { json, type LoaderFunction } from "@remix-run/node";

import styles from "./style.css?url";
import { LinksFunction } from "@remix-run/node";
import { client } from "@tina/__generated__/client";
import type { FooterQuery, NavbarQuery } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import Navbar from "@app/components/blocks/Navbar/navbar";
import Footer from "@app/components/blocks/Footer/footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap",
  },
];

export const loader: LoaderFunction = async () => {
  try {
    const navbarResponse = await client.queries.navbar({
      relativePath: "navbar.mdx",
    });

    const footerResponse = await client.queries.footer({
      relativePath: "footer.mdx",
    });

    if (!navbarResponse.data.navbar) {
      throw new Error("No navbar data found");
    }

    if (!footerResponse.data.footer) {
      throw new Error("No footer data found");
    }

    return json({
      navbar: {
        data: navbarResponse.data,
        query: navbarResponse.query,
        variables: navbarResponse.variables,
      },
      footer: {
        data: footerResponse.data,
        query: footerResponse.query,
        variables: footerResponse.variables,
      },
    });
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="bitsix">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { navbar, footer } = useLoaderData<typeof loader>();
  const navabrQuery = useTina<NavbarQuery>(navbar);
  const footerQuery = useTina<FooterQuery>(footer);

  return (
    <div>
      <Navbar data={navabrQuery.data} />
      <Outlet />
      <Footer data={footerQuery.data} />
    </div>
  );
}
