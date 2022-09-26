import Image from "next/image";

import styles from "./FeatureCard.module.scss";

type Props = {
  title: string;
  subtitle: string;
  image: any;
};
const FeatureCard: React.FC<Props> = ({ title, subtitle, image }) => (
  <div className={styles.container}>
    <h1 className={[styles.centerText, styles.title].join(" ")}>{title}</h1>
    <h3 className={[styles.centerText, styles.subtitle].join(" ")}>
      {subtitle}
    </h3>

    <div className={styles.imageContainer}>
      <div className={styles.fakePhone}>
        <Image alt="screen shot" src={image} width={195} height={422} />
      </div>
    </div>
  </div>
);

export default FeatureCard;
