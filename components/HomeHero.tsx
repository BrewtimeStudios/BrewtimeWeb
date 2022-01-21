import Lottie from "react-lottie";
import Image from "next/image";

import styles from "../styles/HomeHero.module.scss";
import takeAwayMugLottie from "../public/lotties/takeAwayMug.json";

function HomeHero() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: takeAwayMugLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.hero}>
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroTitle}>Brewtime.</h1>
        <h3>
          Brewtime helps you be more mindful of how you brew your coffee by
          making you think about the key parameters that might impact your cup.
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
  );
}

export default HomeHero;
