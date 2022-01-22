import Link from "next/link";

import styles from "../styles/NavBar.module.scss";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <a>BT.</a>
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.linksText}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className={styles.linksText}>
          <Link href="/legal">
            <a>Legal</a>
          </Link>
        </div>
        <div className={styles.linksText}>
          <Link href="/support-project">
            <a>Support us!</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
