import Head from "next/head";
import LegalPageContent from "../../content/LegalPageContent";

import styles from "../../styles/Legal.module.scss";

export default function Legal() {
  return (
    <>
      <Head>
        <title>Brewtime.app | Legal | How do you brew your coffee?</title>
        <meta
          name="description"
          content="Brewtime helps you be more mindful of how you brew your coffee. Available on both iOS and Android, on the Apple App store and Google Play Store"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LegalPageContent />
    </>
  );
}
