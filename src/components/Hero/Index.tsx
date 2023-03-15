import Image from "next/legacy/image";
import Link from "next/link";
import Button from "react-landing-storybook/dist/components/Button";
type Props = {};

function Hero({}: Props) {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-20 md:gap-y-0 gap-x-16 md:gap-x-20 xl:gap-x-28">
        <div className="w-full md:w-6/12 xl:w-5/12 2xl:w-4/12">
          <h3 className="text-green uppercase font-semibold mb-5">
            learn from expert
          </h3>
          <h1 className="text-navy font-semibold text-[42px] mb-5">
            Start Your <span className="text-purple"> Developer Journey</span>{" "}
            Today
          </h1>
          <p className="text-grey leading-8 mb-8 ">
            Our bootcamp is helping junior developers who are really passionate
            in the programming.
          </p>
          <Button className="relative px-8" state="primary">
            <Link href="#about">
              <a>Get Started</a>
            </Link>
          </Button>
        </div>

        <div className="relative max-w-full">
          <div className="absolute rounded-xl top-0 left-0 bg-white z-10 transform -translate-x-4 -translate-y-4 md:-translate-x-1/4 md:-translate-y-1/4 xl:-translate-x-1/2 xl:-translate-y-1/2 p-4 w-56">
            <span className="flex items-center gap-x-2 mb-2">
              <span className="w-5 h-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#31B380" />
                  <path
                    d="M5.83325 10L8.46483 12.5L14.1666 7.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-navy font-medium">Greate & Solid</span>
            </span>
            <p className="text-grey text-sm hidden md:block">
              We help people how to finish the project together
            </p>
          </div>

          <div className="absolute rounded-xl bottom-0 right-0 bg-white z-10 transform translate-x-4 translate-y-4 md:translate-x-1/4 md:translate-y-1/4 xl:translate-x-1/2 xl:translate-y-1/2 p-4 w-56">
            <span className="flex items-center gap-x-2 mb-2">
              <span className="w-5 h-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#31B380" />
                  <path
                    d="M5.83325 10L8.46483 12.5L14.1666 7.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-navy font-medium">Up to Date</span>
            </span>
            <p className="text-grey text-sm hidden md:block">
              We encourage people to use the latest techstack
            </p>
          </div>

          <div className="relative max-w-full w-[390px] h-[240px] xl:w-[490px] xl:h-[340px] rounded-[59px] overflow-hidden">
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <span className="bg-purple w-[50px] h-[50px] rounded-full flex items-center justify-center">
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 6.40193C15.5 7.55663 15.5 10.4434 13.5 11.5981L4.5 16.7942C2.5 17.9489 1.05473e-06 16.5056 1.15568e-06 14.1962L1.60994e-06 3.80385C1.71089e-06 1.49445 2.5 0.0510708 4.5 1.20577L13.5 6.40193Z"
                    className="fill-white"
                  />
                </svg>
              </span>
            </span>
            <Image
              src="/images/hero.jpg"
              priority
              alt="hero"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
