import Head from "next/head";
import Lottie from "react-lottie";
import Image from "next/image";

import styles from "../styles/Home.module.scss";

import takeAwayMugLottie from "../public/lotties/takeAwayMug.json";

export default function Home() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: takeAwayMugLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

      <header className={styles.header} />
      <div className={styles.hero}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>Brewtime.</h1>
          <h3>
            Brewtime helps you be more mindful of how you brew your coffee by
            making you think about the key parameters that might impact your
            cup.
          </h3>
          <div className={styles.ctaContainer}>
            <a href="https://www.apple.com" target="_blank" rel="noreferrer">
              <Image
                src="/svgs/appStoreBadge.svg"
                height={60}
                width={180}
                alt="App Store Badge"
              />
            </a>
          </div>
        </div>
        <div className={styles.lottieContainer}>
          <Lottie options={lottieOptions} />
        </div>
      </div>
    </>
  );
}
