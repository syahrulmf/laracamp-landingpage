import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "react-landing-storybook/dist/components/Button";
import Navbar from "react-landing-storybook/dist/components/Navbar";

export default function Home() {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>Laracamp</title>
        <meta name="description" content="Laracamp Landingpage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        className={{
          active: "text-purple",
          idle: "text-navy",
        }}
        cta={
          <>
            <Button className="relative px-8" state="secondary">
              <Link legacyBehavior href="/sign-in">
                <a>Sign In</a>
              </Link>
            </Button>
            <Button className="relative px-8" state="primary">
              <Link legacyBehavior href="/sign-up">
                <a>Sign Up</a>
              </Link>
            </Button>
          </>
        }
        pathname={pathname}
      >
        <Link legacyBehavior href="/">
          <a>Program</a>
        </Link>
        <Link legacyBehavior href="/mentor">
          <a>Mentor</a>
        </Link>
        <Link legacyBehavior href="/pricing">
          <a>Pricing</a>
        </Link>
        <Link legacyBehavior href="/bussiness">
          <a>Bussiness</a>
        </Link>
      </Navbar>
    </>
  );
}
