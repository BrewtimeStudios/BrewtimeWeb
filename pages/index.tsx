import Head from "next/head";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brewtime.app | How do you brew your coffee?</title>
        <meta
          name="description"
          content="Brewtime helps you be more mindful of how you brew your coffee. Available on both iOS and Android, on the Apple App store and Google Play Store"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HomeHero />
      </Layout>
    </>
  );
}
