import FeaturedItems from "react-landing-storybook/dist/components/FeaturedItems";

import Briefcase from "assets/images/fi-briefcase.svg";
import Codesandbox from "assets/images/fi-codesandbox.svg";
import Globe from "assets/images/fi-globe.svg";
import Users from "assets/images/fi-users.svg";

type Props = {};

function Features({}: Props) {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col justify-center items-center mb-4">
        <h3 className="text-green uppercase font-semibold mb-2">
          our super benefits
        </h3>
        <h2 className="text-navy font-semibold text-[30px] mb-10">
          Learn Faster & Better
        </h2>
      </div>

      <FeaturedItems
        features={[
          {
            icon: <Globe />,
            key: "diversity",
            paragraph:
              "Learn from anyone around the world and get a new skills",
            title: "Diversity",
          },
          {
            icon: <Codesandbox />,
            key: "guideline",
            paragraph:
              "Lara will help you to choose which path that suitable for you",
            title: "A.I Guideline",
          },
          {
            icon: <Users />,
            key: "mentoring",
            paragraph:
              "We will ensure that you will get what you really do need",
            title: "1-1 Mentoring",
          },
          {
            icon: <Briefcase />,
            key: "futurejob",
            paragraph:
              "Get your dream job in your dream company together with us",
            title: "Future Job",
          },
        ]}
      />
    </section>
  );
}

export default Features;
