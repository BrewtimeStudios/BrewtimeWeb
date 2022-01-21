import Link from "next/link";

import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">BT.</Link>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.linksText}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.linksText}>
          <Link href="/legal">Legal</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
