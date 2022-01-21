import { ReactChild, ReactChildren, ReactElement } from "react";
import Lottie, { Options as LottieAnimationOptions } from "react-lottie";

import styles from "../styles/Hero.module.scss";

type Props = {
  title: String;
  subtitle: String;
  children?: ReactChild | ReactChildren;
  lottieOptions?: LottieAnimationOptions;
};

function Hero({
  title,
  subtitle,
  lottieOptions,
  children,
}: Props): ReactElement {
  return (
    <div className={styles.hero}>
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <h3 className={styles.heroSubtitle}>{subtitle}</h3>
        {children}
      </div>
      {lottieOptions && (
        <div className={styles.lottieContainer}>
          <Lottie options={lottieOptions} />
        </div>
      )}
    </div>
  );
}

export default Hero;
