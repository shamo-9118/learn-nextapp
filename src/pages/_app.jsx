import classes from "../styles/globals.css";
import { Layout } from "../components/Layouts/Layout";
import { SWRConfig } from "swr";

export const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("エラーが発生したため、データ取得できませんでした");
  }

  const json = await response.json();
  return json;
};

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value = {{fetcher}}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SWRConfig>
  );
}

export default MyApp;
