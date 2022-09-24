import Image from "next/image";
import Hero from "../../components/Hero";

import styles from "../../styles/Home.module.scss";
import takeAwayMugLottie from "../../public/lotties/takeAwayMug.json";
import { ReactElement } from "react";
import Features from "./components/Features";

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
      <a
        href="https://apps.apple.com/us/app/brewtime-track-your-coffee/id1617402319"
        target="_blank"
        rel="noreferrer"
      >
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
    <>
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

      <div style={{ height: "10vh" }} />

      <Features />
    </>
  );
}

export default HomePageContent;
