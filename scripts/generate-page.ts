#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import https from 'node:https';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const camelCase = (text: string): string => {
    return text
        .split("-")
        .map((word, index) => (index === 0 ? word : capitalizeFirstLetter(word)))
        .join("");
};

const pascalCase = (text: string): string => {
    return text
        .split("-")
        .map((word) => capitalizeFirstLetter(word))
        .join("");
};

interface LLMBlock {
    blockName: string;
    title: string;
    subtitle: string;
    content: string;
}

interface LLMResponse {
    blocks: LLMBlock[];
}

interface TemplateData {
    importPath: string;
    templateName: string;
    componentImportPath: string;
    componentName: string;
}

interface CollectionData {
    collectionName: string;
    schemaPath: string;
}

const isValidPageUri = (uri: string): boolean => {
    // Only allow alphabets, numbers, and hyphens (no slashes)
    const validPattern = /^[a-zA-Z0-9-]+$/;
    return validPattern.test(uri);
};

const generateContentWithLLM = async (pageUri: string, pageBlocks: string[]): Promise<LLMResponse | null> => {
    try {
        const useOpenAI = await new Promise<boolean>((resolve) => {
            rl.question(
                "Would you like to generate content using OpenAI? (yes/no): ",
                (answer) => {
                    resolve(answer.trim().toLowerCase() === "yes");
                }
            );
        });

        if (!useOpenAI) {
            console.log("Skipping content generation with LLM.");
            return null;
        }

        const openAIKey = await new Promise<string>((resolve) => {
            rl.question("Enter your OpenAI API key: ", (answer) => {
                resolve(answer.trim());
            });
        });

        if (!openAIKey) {
            console.log("No API key provided. Skipping content generation.");
            return null;
        }

        console.log("Generating content with LLM...");

        const pageDescription = await new Promise<string>((resolve) => {
            rl.question(
                "Enter a brief description of the page purpose: ",
                (answer) => {
                    resolve(answer.trim());
                }
            );
        });

        const requestData = JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content:
                        "You are a helpful content generator for a marketing website.",
                },
                {
                    role: "user",
                    content: `Generate content for a marketing website page with URI "${pageUri}". 
          The page has the following blocks: ${pageBlocks.join(", ")}. 
          Page description: ${pageDescription}.
          For each block, provide a title, subtitle, and content paragraph.
          Format your response as JSON with the following structure:
          {
            "blocks": [
              {
                "blockName": "hero",
                "title": "Example Title",
                "subtitle": "Example Subtitle",
                "content": "Example content paragraph..."
              }
            ]
          }`,
                },
            ],
            temperature: 0.7,
            max_tokens: 1000,
        });

        const options = {
            hostname: "api.openai.com",
            path: "/v1/chat/completions",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${openAIKey}`,
                "Content-Length": Buffer.byteLength(requestData),
            },
        };

        return new Promise<LLMResponse | null>((resolve) => {
            const req = https.request(options, (res) => {
                let data = "";
                res.on("data", (chunk) => {
                    data += chunk;
                });
                res.on("end", () => {
                    try {
                        const response = JSON.parse(data);
                        if (response.error) {
                            console.error("OpenAI API error:", response.error.message);
                            resolve(null);
                            return;
                        }
                        const contentJson = response.choices[0].message.content;
                        try {
                            const content = JSON.parse(contentJson) as LLMResponse;
                            resolve(content);
                        } catch (e) {
                            console.error("Error parsing LLM response as JSON:", e);
                            resolve(null);
                        }
                    } catch (e) {
                        console.error("Error parsing API response:", e);
                        resolve(null);
                    }
                });
            });

            req.on("error", (e) => {
                console.error("Error making request to OpenAI:", e);
                resolve(null);
            });

            req.write(requestData);
            req.end();
        });
    } catch (error) {
        console.error("Error generating content with LLM:", error);
        return null;
    }
};

const generateTemplateFile = (pageUri: string, blockName: string): TemplateData => {
    const blockNamePascal = pascalCase(blockName);
    const pageUriPascal = pascalCase(pageUri);
    const componentName = `${pageUriPascal}${blockNamePascal}`;
    const fullPath = path.join(
        process.cwd(),
        "app",
        "components",
        "blocks",
        componentName
    );

    // Create component directory if it doesn't exist
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
    }

    // Create template file
    const templateContent = `import type { Template } from "tinacms";

export const ${camelCase(pageUri)}${blockNamePascal}Template: Template = {
  name: "${camelCase(pageUri)}${blockNamePascal}",
  label: "${pageUriPascal} ${blockNamePascal}",
  fields: [
    {
      type: "string",
      name: "${camelCase(pageUri)}${blockNamePascal}Title",
      label: "Title",
    },
    {
      type: "string",
      name: "${camelCase(pageUri)}${blockNamePascal}Subtitle",
      label: "Subtitle",
    },
    {
      type: "rich-text",
      name: "${camelCase(pageUri)}${blockNamePascal}Content",
      label: "Content",
    },
    {
      type: "image",
      name: "${camelCase(pageUri)}${blockNamePascal}Image",
      label: "Image",
    },
    {
      type: "string",
      name: "${camelCase(pageUri)}${blockNamePascal}CtaText",
      label: "Call to Action Text",
    },
    {
      type: "string",
      name: "${camelCase(pageUri)}${blockNamePascal}CtaLink",
      label: "Call to Action Link",
    },
  ],
};
`;

    fs.writeFileSync(
        path.join(fullPath, `${camelCase(blockName)}.template.ts`),
        templateContent
    );
    console.log(
        `Created template file: ${path.join(
            fullPath,
            `${camelCase(blockName)}.template.ts`
        )}`
    );

    // Create component file
    const componentContent = `import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface ${componentName}Props {
  data: any;
}

const ${componentName}: React.FC<${componentName}Props> = ({ data }) => {
  return (
    <section className="px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.${camelCase(
        pageUri
    )}${blockNamePascal}Title}</h2>
        {data.${camelCase(pageUri)}${blockNamePascal}Subtitle && (
          <h3 className="text-xl md:text-2xl mb-6">{data.${camelCase(
        pageUri
    )}${blockNamePascal}Subtitle}</h3>
        )}
        {data.${camelCase(pageUri)}${blockNamePascal}Content && (
          <div className="prose max-w-none">
            <TinaMarkdown content={data.${camelCase(
        pageUri
    )}${blockNamePascal}Content} />
          </div>
        )}
        {data.${camelCase(pageUri)}${blockNamePascal}Image && (
          <img 
            src={data.${camelCase(pageUri)}${blockNamePascal}Image} 
            alt={data.${camelCase(pageUri)}${blockNamePascal}Title}
            className="mt-6 w-full h-auto rounded-lg"
          />
        )}
        {data.${camelCase(
        pageUri
    )}${blockNamePascal}CtaText && data.${camelCase(
        pageUri
    )}${blockNamePascal}CtaLink && (
          <div className="mt-8">
            <a 
              href={data.${camelCase(pageUri)}${blockNamePascal}CtaLink}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {data.${camelCase(pageUri)}${blockNamePascal}CtaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ${componentName};
`;

    fs.writeFileSync(
        path.join(fullPath, `${camelCase(blockName)}.tsx`),
        componentContent
    );
    console.log(
        `Created component file: ${path.join(
            fullPath,
            `${camelCase(blockName)}.tsx`
        )}`
    );

    return {
        importPath: `@app/components/blocks/${componentName}/${camelCase(
            blockName
        )}.template`,
        templateName: `${camelCase(pageUri)}${blockNamePascal}Template`,
        componentImportPath: `@app/components/blocks/${componentName}/${camelCase(
            blockName
        )}`,
        componentName: componentName,
    };
};

const createSchemaFile = (pageUri: string, templates: TemplateData[]): CollectionData => {
    const pageUriCamel = camelCase(pageUri);
    const pageUriPascal = pascalCase(pageUri);

    const schemaContent = `import type { Collection } from "tinacms";

${templates
            .map((t) => `import { ${t.templateName} } from "${t.importPath}";`)
            .join("\n")}

export const ${pageUriCamel}PageBlocksCollection: Collection = {
    label: "${pageUriPascal}",
    name: "${pageUriCamel}",
    path: "content/blockPages",
    match: {
        include: "${pageUri}",
    },
    format: "mdx",
    ui: {
        router: ({ document }) => {
            if (document._sys.filename === '${pageUri}') {
                return \`/${pageUri.split("/").filter(Boolean).join("/")}\`
            }
            return \`/\${document._sys.filename}\`
        },
    },
    fields: [
        {
            label: 'Page Sections',
            name: 'blocks',
            type: 'object',
            list: true,
            ui: {
                visualSelector: true,
            },
            templates: [
                ${templates
            .map((t) => t.templateName)
            .join(",\n                ")}
            ],
        },
    ],
}
`;

    const schemaFilePath = path.join(
        process.cwd(),
        "tina",
        "collectionsSchema",
        "pageBlocks",
        `${pageUri}.ts`
    );
    const schemaDir = path.dirname(schemaFilePath);

    if (!fs.existsSync(schemaDir)) {
        fs.mkdirSync(schemaDir, { recursive: true });
    }

    fs.writeFileSync(schemaFilePath, schemaContent);
    console.log(`Created schema file: ${schemaFilePath}`);

    return {
        collectionName: `${pageUriCamel}PageBlocksCollection`,
        schemaPath: `./collectionsSchema/pageBlocks/${pageUri}`,
    };
};

const updateSchemaFile = (collection: CollectionData): void => {
    const schemaFilePath = path.join(process.cwd(), "tina", "schema.ts");
    const schemaContent = fs.readFileSync(schemaFilePath, "utf8");

    // Add import
    let updatedContent = schemaContent.replace(
        'import { defineSchema } from "tinacms";',
        `import { defineSchema } from "tinacms";\nimport { ${collection.collectionName} } from "${collection.schemaPath}";`
    );

    // Add to collections array
    updatedContent = updatedContent.replace(
        "collections: [",
        `collections: [\n        ${collection.collectionName},`
    );

    fs.writeFileSync(schemaFilePath, updatedContent);
    console.log(`Updated schema file: ${schemaFilePath}`);
};

const updateViteConfig = (
    pageUri: string,
    parentPath: string,
    hasChildRoute: boolean,
    childRouteName: string
): void => {
    const viteConfigPath = path.join(process.cwd(), "vite.config.ts");
    const viteContent = fs.readFileSync(viteConfigPath, "utf8");

    // Find the routes section
    const routesRegex =
        /routes\(defineRoutes\)\s*{\s*return defineRoutes\(\(route\)\s*=>\s*{([\s\S]*?)}\);/;
    const routesMatch = viteContent.match(routesRegex);

    if (routesMatch && routesMatch[1]) {
        const existingRoutes = routesMatch[1];
        let newRoutes = existingRoutes;

        // Construct the full route path with proper slash handling
        // Use the validated URI values directly since we've ensured they don't contain slashes
        const fullPath = parentPath ? `/${parentPath}/${pageUri}` : `/${pageUri}`;

        // For route target, ensure path separators are handled correctly
        const routePath = parentPath ? `${parentPath}/${pageUri}` : pageUri;
        const route = `\n        route("${fullPath}", "routes/${routePath}/route.tsx");`;

        newRoutes += route;

        // Add child route if needed
        if (hasChildRoute && childRouteName) {
            const childRoute = `\n        route("${fullPath}/:${childRouteName}", "routes/${routePath}/${childRouteName}.tsx");`;
            newRoutes += childRoute;
        }

        const updatedViteContent = viteContent.replace(
            routesRegex,
            `routes(defineRoutes) {\n      return defineRoutes((route) => {${newRoutes}\n      });`
        );
        fs.writeFileSync(viteConfigPath, updatedViteContent);
        console.log(`Updated vite config with new route: ${fullPath}`);
    } else {
        console.error("Could not find routes section in vite.config.ts");
    }
};

const createRoutesFiles = (pageUri: string, parentPath: string, pageBlocks: string[], templates: TemplateData[]): void => {
    const pageUriPascal = pascalCase(pageUri);
    const pageUriCamel = camelCase(pageUri);

    // Create route directory with proper path handling
    // Construct the directory path properly
    const routePath = parentPath ? `${parentPath}/${pageUri}` : pageUri;
    const routeDir = path.join(
        process.cwd(),
        "app",
        "routes",
        routePath
    );

    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }

    // Create route.tsx file
    const routeContent = `import { MetaFunction, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { client } from "@tina/__generated__/client";
import type { ${pageUriPascal}Query } from "@tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { ${pageUriPascal}Page } from "./page";

export const meta: MetaFunction = () => {
  return [
    { title: "${pageUriPascal} - BitSix Studio" },
    { name: "description", content: "${pageUriPascal} page" },
  ];
};

export const loader = async () => {
  try {
    const pageQuery = await client.queries.${pageUriCamel}({
      relativePath: "${pageUri}.mdx",
    });

    if (!pageQuery.data.${pageUriCamel}) {
      throw new Error("No page data found");
    }

    return json({
      query: pageQuery,
    });
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};

export default function ${pageUriPascal}() {
  const { query } = useLoaderData<typeof loader>();
  const pageData = useTina<${pageUriPascal}Query>(query);
  
  if (!pageData.data.${pageUriCamel}?.blocks) {
    return <div>No blocks found</div>;
  }

  return (
    <div>
      <${pageUriPascal}Page data={pageData.data} />
    </div>
  );
}`;

    fs.writeFileSync(path.join(routeDir, "route.tsx"), routeContent);
    console.log(`Created route file: ${path.join(routeDir, "route.tsx")}`);

    // Create page.tsx file
    const pageContent = `import React from "react";
import type { ${pageUriPascal}Query } from "@tina/__generated__/types";

${templates
            .map((t) => `import ${t.componentName} from "${t.componentImportPath}";`)
            .join("\n")}

interface PageProps {
  data: ${pageUriPascal}Query;
}

export const ${pageUriPascal}Page: React.FC<PageProps> = ({ data }) => {
  const page = data.${pageUriCamel};

  ${pageBlocks
            .map((block, index) => {
                const componentName = templates[index].componentName;
                return `const ${camelCase(block)} = page.blocks?.find(
    (block) => block?.__typename === "${pageUriPascal}Blocks${componentName}"
  );`;
            })
            .join("\n  ")}

  return (
    <div>
      ${pageBlocks
            .map((block, index) => {
                return `{${camelCase(block)} && <${templates[index].componentName
                    } data={${camelCase(block)}} />}`;
            })
            .join("\n      ")}
    </div>
  );
};

export default ${pageUriPascal}Page;`;

    fs.writeFileSync(path.join(routeDir, "page.tsx"), pageContent);
    console.log(`Created page file: ${path.join(routeDir, "page.tsx")}`);
};

const createMdxContent = async (
    pageUri: string,
    pageBlocks: string[],
    templates: TemplateData[],
    generatedContent: LLMResponse | null = null
): Promise<void> => {
    const contentDir = path.join(process.cwd(), "content", "blockPages");

    // Create directories if they don't exist
    if (!fs.existsSync(contentDir)) {
        fs.mkdirSync(contentDir, { recursive: true });
    }

    // Create basic MDX content
    let blocksContent = "";

    if (generatedContent && generatedContent.blocks) {
        // Use generated content from LLM
        blocksContent = pageBlocks
            .map((block) => {
                const blockData = generatedContent.blocks.find(
                    (b) => b.blockName.toLowerCase() === block.toLowerCase()
                );

                let content = `  - _template: ${camelCase(pageUri)}${pascalCase(block)}
                    }
    ${camelCase(pageUri)}${pascalCase(block)}Title: "${blockData?.title || `${pascalCase(block)} Title`
                    }"
    ${camelCase(pageUri)}${pascalCase(block)}Subtitle: "${blockData?.subtitle || `${pascalCase(block)} Subtitle`
                    }"`;

                if (blockData?.content) {
                    content += `
    ${camelCase(pageUri)}${pascalCase(block)}Content: >
      ${blockData.content.replace(/\n/g, "\n      ")}`;
                } else {
                    content += `
    ${camelCase(pageUri)}${pascalCase(block)}Content: >
      This is placeholder content for the ${block} section. Replace this with your actual content.`;
                }

                return content;
            })
            .join("\n\n");
    } else {
        // Use default placeholder content
        blocksContent = pageBlocks
            .map((block) => {
                return `  - _template: ${camelCase(pageUri)}${pascalCase(block)}
    ${camelCase(pageUri)}${pascalCase(block)}Title: "${pascalCase(block)} Title"
    ${camelCase(pageUri)}${pascalCase(block)}Subtitle: "${pascalCase(
                    block
                )} Subtitle"
    ${camelCase(pageUri)}${pascalCase(block)}Content: >
      This is placeholder content for the ${block} section. Replace this with your actual content.`;
            })
            .join("\n\n");
    }

    const mdxContent = `---
blocks:
${blocksContent}
---

# ${pascalCase(pageUri)} Page

This is a placeholder MDX content file for the ${pageUri} page.
`;

    fs.writeFileSync(path.join(contentDir, `${pageUri}.mdx`), mdxContent);
    console.log(
        `Created MDX content file: ${path.join(contentDir, `${pageUri}.mdx`)}`
    );
};

const generateChildRoute = (pageUri: string, parentPath: string, childRouteName: string): void => {
    // Create child route file with proper path handling
    const routePath = parentPath ? `${parentPath}/${pageUri}` : pageUri;
    const routeDir = path.join(
        process.cwd(),
        "app",
        "routes",
        routePath
    );

    const childRouteContent = `import { MetaFunction, useLoaderData, useParams } from "@remix-run/react";
    import { json } from "@remix-run/node";

    export const meta: MetaFunction = () => {
      return [
        { title: "Single ${childRouteName} - BitSix Studio" },
        { name: "description", content: "Single ${childRouteName} page" },
      ];
    };

    export const loader = async ({ params }: { params: Record<string, string> }) => {
      const { ${childRouteName} } = params;
      
      // Here you can fetch data based on the slug parameter
      return json({
        slug: ${childRouteName}
      });
    };

    export default function ${pascalCase(childRouteName)}() {
      const { slug } = useParams();
      const data = useLoaderData<typeof loader>();
      
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Dynamic ${pascalCase(
        childRouteName
    )} Page: {slug}</h1>
          <p>This is a dynamic child route for ${pageUri}</p>
        </div>
      );
    }`;

    fs.writeFileSync(
        path.join(routeDir, `${childRouteName}.tsx`),
        childRouteContent
    );
    console.log(
        `Created child route file: ${path.join(routeDir, `${childRouteName}.tsx`)}`
    );
};

const runPageGenerator = async (): Promise<void> => {
    // Ask for page URI with validation
    let pageUri = '';
    let isValid = false;

    while (!isValid) {
        pageUri = await new Promise<string>((resolve) => {
            rl.question('Enter the page URI (e.g., "digital-marketing"). Only use alphabets, numbers, and hyphens: ', (answer) => {
                resolve(answer.trim());
            });
        });

        if (isValidPageUri(pageUri)) {
            isValid = true;
        } else {
            console.log('\x1b[31mInvalid page URI.\x1b[0m The URI must contain only alphabets, numbers, and hyphens.');
            console.log('Examples of valid URIs: "digital-marketing", "about-us", "products123"');
            console.log('For nested routes, use the parent path field in the next step.');
        }
    }

    // Ask for parent path (optional) with validation
    let parentPath = '';
    isValid = false;

    while (!isValid) {
        parentPath = await new Promise<string>((resolve) => {
            rl.question("Enter the parent path (leave empty if none). Only use alphabets, numbers, and hyphens: ", (answer) => {
                resolve(answer.trim());
            });
        });

        // Empty parent path is valid
        if (parentPath === '' || isValidPageUri(parentPath)) {
            isValid = true;
        } else {
            console.log('\x1b[31mInvalid parent path.\x1b[0m The path must contain only alphabets, numbers, and hyphens.');
            console.log('Examples of valid paths: "services", "about", "blog-posts"');
            console.log('The parent path will be combined with the URI to create the full route.');
        }
    }

    // Ask if page will use blocks
    const usePageBlocks = await new Promise<boolean>((resolve) => {
        rl.question(
            "Will this page use TinaCMS page blocks? (yes/no): ",
            (answer) => {
                resolve(answer.trim().toLowerCase() === "yes");
            }
        );
    });

    if (!usePageBlocks) {
        console.log(
            "Page generation without blocks is not supported in this script."
        );
        rl.close();
        return;
    }

    // Ask for page blocks
    const pageBlocksStr = await new Promise<string>((resolve) => {
        rl.question(
            'Enter the page block names separated by commas (e.g., "hero,content,pricing"): ',
            (answer) => {
                resolve(answer.trim());
            }
        );
    });

    const pageBlocks = pageBlocksStr.split(",").map((block) => block.trim());

    // Generate templates for each block
    const templates: TemplateData[] = [];
    for (const block of pageBlocks) {
        const template = generateTemplateFile(pageUri, block);
        templates.push(template);
    }

    // Create schema file
    const collection = createSchemaFile(pageUri, templates);

    // Update main schema file
    updateSchemaFile(collection);

    // Generate content with LLM if requested
    const generatedContent = await generateContentWithLLM(pageUri, pageBlocks);

    // Ask if page should have a child route
    const hasChildRoute = await new Promise<boolean>((resolve) => {
        rl.question(
            "Should this page have a child route (e.g., like blog/:slug)? (yes/no): ",
            (answer) => {
                resolve(answer.trim().toLowerCase() === "yes");
            }
        );
    });

    let childRouteName = "";
    if (hasChildRoute) {
        childRouteName = await new Promise<string>((resolve) => {
            rl.question(
                'Enter the child route parameter name (e.g., "slug", "id"): ',
                (answer) => {
                    resolve(answer.trim());
                }
            );
        });
    }

    // Update vite config
    updateViteConfig(pageUri, parentPath, hasChildRoute, childRouteName);

    // Create route files
    createRoutesFiles(pageUri, parentPath, pageBlocks, templates);

    // Create MDX content
    await createMdxContent(pageUri, pageBlocks, templates, generatedContent);

    // Generate child route if needed
    if (hasChildRoute && childRouteName) {
        generateChildRoute(pageUri, parentPath, childRouteName);
    }

    console.log("\nPage generation completed successfully!");
    console.log("\nNext steps:");
    console.log("1. Update the components to match your design requirements");
    console.log("2. Update the MDX content with actual page content");
    console.log("3. Restart the development server to see your changes");
    console.log("\nRun the following commands:");
    console.log("npm run dev");

    rl.close();
};

runPageGenerator().catch((error) => {
    console.error("Error running page generator:", error);
    rl.close();
}); 