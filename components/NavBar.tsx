import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div className={styles.linksContainer}>
        <div>Home</div>
        <div>Legal</div>
      </div>
    </div>
  );
};

export default NavBar;
