declare module "react-landing-storybook/dist/components/Navbar";
declare module "react-landing-storybook/dist/components/Button";
declare module "react-landing-storybook/dist/components/FeaturedItems";
declare module "react-landing-storybook/dist/components/FeaturedSection";

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
