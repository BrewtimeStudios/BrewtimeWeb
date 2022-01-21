import Image from "next/image";
import Hero from "../components/Hero";

import styles from "../styles/Home.module.scss";
import takeAwayMugLottie from "../public/lotties/takeAwayMug.json";
import { ReactElement } from "react";

function HomePageContent() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: takeAwayMugLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const CtaSection = (): ReactElement => (
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
  );

  return (
    <Hero
      {...{
        title: "Brewtime.",
        subtitle:
          "Brewtime helps you be more mindful of how you brew your coffee by making you think about the key parameters that might impact your cup.",
        lottieOptions,
      }}
    >
      <CtaSection />
    </Hero>
  );
}

export default HomePageContent;
