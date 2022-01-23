import Head from "next/head";
import SupportProjectPageContent from "../../content/SupportProjectPageContent";

export default function SupportProject() {
  return (
    <>
      <Head>
        <title>
          Brewtime.app | Support Project | How do you brew your coffee?
        </title>
        <meta
          name="description"
          content="Brewtime helps you be more mindful of how you brew your coffee. Available on both iOS and Android, on the Apple App store and Google Play Store"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SupportProjectPageContent />
    </>
  );
}
