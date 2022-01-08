import type { AppProps } from "next/app";
import "~/styles/styles.css";
import { NavigationProvider } from "~/utilities/context/NavigationContext";
import Layout from "../components/Layout";
// import "antd/dist/antd.css";how t

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavigationProvider>
  );
}

export default MyApp;
