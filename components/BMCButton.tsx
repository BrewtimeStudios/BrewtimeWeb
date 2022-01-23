import { ReactElement } from "react";
import Image from "next/image";

import styles from "../styles/BMCButton.module.scss";

function BMCButton(): ReactElement {
  return (
    <a
      className={styles.base}
      // replace with your own account
      href="https://www.buymeacoffee.com/ugglr"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        className={styles.image}
        width={80}
        height={80}
        src="/svgs/bmc-new-btn-logo.svg"
        alt="buymecofee"
      />
      <div className={styles.text}>Buy me a coffee</div>
    </a>
  );
}

export default BMCButton;
