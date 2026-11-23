import { registerRoot, Composition } from "remotion";
import { HeroVideo } from "./compositions/HeroVideo";
import { BrandBackground } from "./compositions/BrandBackground";
import { ExpertiseIllustration } from "./compositions/ExpertiseIllustration";
import { DigitalTransformationHero } from "./compositions/DigitalTransformationHero";
import { DigitalTransformationServicesIllustration } from "./compositions/DigitalTransformationServicesIllustration";
import {
  DigitalTransformationCaseStudyAnalytics,
  DigitalTransformationCaseStudyOps,
} from "./compositions/DigitalTransformationCaseStudies";
import {
  ProductDevelopmentBuildingScene,
  ProductDevelopmentHeroScene,
  ProductDevelopmentShowcaseScene,
  ProductDevelopmentTestimonialsScene,
} from "./compositions/ProductDevelopmentScenes";

const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroVideo"
        component={HeroVideo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="BrandBackground"
        component={BrandBackground}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ExpertiseIllustration"
        component={ExpertiseIllustration}
        durationInFrames={240}
        fps={30}
        width={1220}
        height={800}
      />
      <Composition
        id="DigitalTransformationHero"
        component={DigitalTransformationHero}
        durationInFrames={240}
        fps={30}
        width={1220}
        height={800}
      />
      <Composition
        id="DigitalTransformationServicesIllustration"
        component={DigitalTransformationServicesIllustration}
        durationInFrames={240}
        fps={30}
        width={1220}
        height={800}
      />
      <Composition
        id="DigitalTransformationCaseStudyOps"
        component={DigitalTransformationCaseStudyOps}
        durationInFrames={240}
        fps={30}
        width={960}
        height={640}
      />
      <Composition
        id="DigitalTransformationCaseStudyAnalytics"
        component={DigitalTransformationCaseStudyAnalytics}
        durationInFrames={240}
        fps={30}
        width={960}
        height={640}
      />
      <Composition
        id="ProductDevelopmentHeroScene"
        component={ProductDevelopmentHeroScene}
        durationInFrames={240}
        fps={30}
        width={960}
        height={720}
      />
      <Composition
        id="ProductDevelopmentShowcaseScene"
        component={ProductDevelopmentShowcaseScene}
        durationInFrames={240}
        fps={30}
        width={960}
        height={720}
      />
      <Composition
        id="ProductDevelopmentTestimonialsScene"
        component={ProductDevelopmentTestimonialsScene}
        durationInFrames={240}
        fps={30}
        width={960}
        height={720}
      />
      <Composition
        id="ProductDevelopmentBuildingScene"
        component={ProductDevelopmentBuildingScene}
        durationInFrames={240}
        fps={30}
        width={960}
        height={720}
      />
    </>
  );
};

registerRoot(RemotionRoot);
