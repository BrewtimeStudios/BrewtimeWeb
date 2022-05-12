import { ReactElement } from "react";
import BMCButton from "../components/BMCButton";
import Hero from "../components/Hero";

import styles from "../styles/SupportProject.module.scss";
import buttonStyles from "../styles/BMCButton.module.scss";
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
            <h1 className={styles.sectionTitle}>You can buy me a coffee!</h1>
            <h3 className={styles.sectionSubtitle}>
              Keeping myself caffeinated makes me not fall asleep, and that
              means, I can write more code!
            </h3>
          </div>
          <div className={styles.sectionRight}>
            <BMCButton />
          </div>
        </div>
      </section>

      <section>
        <div className={styles.section}>
          <div className={styles.sectionLeft}>
            <h1 className={styles.sectionTitle}>Send Feedback!</h1>
            <h3 className={styles.sectionSubtitle}>
              I am just a single developer with a passion for coffee, if you
              have feedback or suggestions please send them my way so I can get
              a better understanding of what is working or not working.
            </h3>
          </div>
          <div className={styles.sectionRight}>
            <a
              href="mailto:brewtimeapp@gmail.com"
              className={buttonStyles.base}
            >
              <div className={buttonStyles.text}>♥️</div>
              <div className={buttonStyles.text}>Send Feedback!</div>
            </a>
          </div>
        </div>
      </section>

      <div className={styles.footerMargin} />
    </div>
  );
}

export default SupportProjectPageContent;
