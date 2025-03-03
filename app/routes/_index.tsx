import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { tinaField, useTina } from "tinacms/dist/react";
import client from "tina/__generated__/client";
import { useLoaderData } from "@remix-run/react";
import type { CommingSoonQuery } from "tina/__generated__/types";

export const meta: MetaFunction = () => {
  return [
    { title: "BitSix Studio" },
    { name: "description", content: "Welcome to the studio!" },
  ];
};

export const loader: LoaderFunction = async () => {
  const response = await client.queries.commingSoon({
    relativePath: "coming-soon.mdx",
  });
  return response;
};

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();

  const { data } = useTina<CommingSoonQuery>(loaderData);

  const comingSoon = data.commingSoon;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <DotLottieReact
        data-tina-field={tinaField(comingSoon, "logo")}
        src={comingSoon.logo?.default ?? ""}
        className="w-2/12"
        loop
        autoplay
      />
      <div className="m-4 flex flex-col items-center">
        <h1
          data-tina-field={tinaField(comingSoon, "header")}
          className="text-4xl font-bold font-script"
        >
          {comingSoon.header}
        </h1>
        <h1
          data-tina-field={tinaField(comingSoon, "subtext")}
          className="text-2xl font-script"
        >
          {comingSoon.subtext}
        </h1>
      </div>
    </div>
  );
}
