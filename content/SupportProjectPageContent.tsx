import { ReactElement } from "react";
import BMCButton from "../components/BMCButton";
import Hero from "../components/Hero";

import styles from "../styles/SupportProject.module.scss";
import rocketLottie from "../public/lotties/rocket_brown.json";

function SupportProjectPageContent(): ReactElement {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Hero
        {...{
          title: "Want to support this project?!",
          subtitle:
            "Wow, if you do that's so awsome! Here's the different ways you can! 👇",
          lottieOptions,
        }}
      />

      <div className={styles.heroMargin} />

      <section>
        <div className={styles.section}>
          <div className={styles.sectionLeft}>
            <h1 className={styles.bmcSectionTitle}>You can buy me a coffee!</h1>
            <h3 className={styles.bmcSectionSubtitle}>
              Keeping myself caffeinated makes me not fall asleep, and that
              means, I can write more code!
            </h3>
          </div>
          <BMCButton />
        </div>
      </section>

      <section>
        <div className={styles.section}>
          <div className={styles.sectionLeft}>
            <h1 className={styles.bmcSectionTitle}>Contribute Code!</h1>
            <h3 className={styles.bmcSectionSubtitle}>
              I am just a single developer with a passion for coffee, if you are
              a developer all contributions are welcome!
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupportProjectPageContent;
