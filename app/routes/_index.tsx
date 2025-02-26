import type { MetaFunction } from "@remix-run/node";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <DotLottieReact
        src="animations/bit-six-loading.lottie"
        className="w-2/12"
        loop
        autoplay
      />
      <div className="m-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold font-script">BitSix</h1>
        <h1 className="text-2xl font-script">Coming Soon...</h1>
      </div>
    </div>
  );
}
