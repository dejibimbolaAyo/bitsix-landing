import { MetaFunction, useLoaderData, useParams } from "@remix-run/react";
    import { json } from "@remix-run/node";

    export const meta: MetaFunction = () => {
      return [
        { title: "Single slug - BitSix Studio" },
        { name: "description", content: "Single slug page" },
      ];
    };

    export const loader = async ({ params }: { params: Record<string, string> }) => {
      const { slug } = params;
      
      // Here you can fetch data based on the slug parameter
      return json({
        slug: slug
      });
    };

    export default function Slug() {
      const { slug } = useParams();
      const data = useLoaderData<typeof loader>();
      
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Dynamic Slug Page: {slug}</h1>
          <p>This is a dynamic child route for case-studies</p>
        </div>
      );
    }