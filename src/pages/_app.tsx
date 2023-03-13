import type { AppProps } from "next/app";
import "react-landing-storybook/src/assets/css/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
