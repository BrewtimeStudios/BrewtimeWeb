import { ReactElement } from "react";
import Hero from "../../components/Hero";

import styles from "../../styles/Legal.module.scss";
import coffeAndBiscuitLottie from "../../public/lotties/coffeeAndBiscuit.json";

function LegalPageContent(): ReactElement {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: coffeAndBiscuitLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Hero
        {...{
          title: "Legal stuffs",
          subtitle: "A quick word about what data Brewtime collects.",
          lottieOptions,
        }}
      />

      <section className={styles.section}>
        <div className={styles.listContainer}>
          <h3>
            Before you look at the full fat legal documents that I bought using
            a generator, here is an understandable list of what&apos;s going on
          </h3>
          <ul>
            <li className={styles.li}>
              We collect your email for account login and administration of your
              account. We will never sell your email, or usage statistics.
            </li>
            <li className={styles.li}>
              When collecting errors we can see what operating system you have
              (Android/iOS version), device manufacturer, and screen size. This
              is to be able to reproduce the error and fix it.
            </li>
            <li className={styles.li}>
              We collect click statistics in the app to see how our users
              navigate the app, and develop the features that are the most
              popular.
            </li>
            <li className={styles.li}>
              In the future we might programmatically go through the brews and
              beans you have been submitting in order to give you insights.
            </li>
          </ul>
          <h3>
            That&apos;s it! That&apos;s all we do and if there&apos;s any
            changes we will update you so you can opt out or stop using the
            app/service.
          </h3>
        </div>
        <div className={styles.linksContainer}>
          <a
            className={styles.linkButton}
            href="https://getterms.io/view/s7v2y/privacy/en-us"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          <a
            className={styles.linkButton}
            href="https://getterms.io/view/s7v2y/tos/en-us"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Service
          </a>
          <a
            className={styles.linkButton}
            href="https://getterms.io/view/s7v2y/cookie/en-us"
            target="_blank"
            rel="noreferrer"
          >
            Cookie Policy
          </a>
          <a
            className={styles.linkButton}
            href="https://getterms.io/view/s7v2y/aup/en-us"
            target="_blank"
            rel="noreferrer"
          >
            Acceptable Use Policy
          </a>
        </div>
      </section>
    </>
  );
}

export default LegalPageContent;
