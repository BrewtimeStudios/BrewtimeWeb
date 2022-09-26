import { ReactElement } from "react";
import styles from "./Footer.module.scss";

function Footer(): ReactElement {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Brewtime.</h1>
      </div>
    </footer>
  );
}

export default Footer;
