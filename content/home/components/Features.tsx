import FeatureCard from "./FeatureCard";

import styles from "./Features.module.scss";

const BrewFeature = () => (
  <section className={styles.container}>
    <div className={styles.row}>
      <FeatureCard
        {...{
          title: "Log & list brews.",
          subtitle: "Keep brews collected neatly in a list.",
          image: "/images/home-screen.png",
        }}
      />
      <FeatureCard
        {...{
          title: "Brew like yourself.",
          subtitle: "Only log the information important to you.",
          image: "/images/add-brew-screen.png",
        }}
      />
    </div>
    <div className={styles.row}>
      <FeatureCard
        {...{
          title: "Beans Inventory.",
          subtitle: "Keep your beans organized & link them with your brews.",
          image: "/images/beans-screen.png",
        }}
      />
      <FeatureCard
        {...{
          title: "Beans logging.",
          subtitle: "Keep track of the parameters that matter to your beans.",
          image: "/images/add-beans-screen.png",
        }}
      />
    </div>
  </section>
);

export default BrewFeature;
