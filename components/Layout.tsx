import NavBar from "./NavBar";
import Footer from "./Footer";

import styles from "../styles/Layout.module.scss";

type LayoutProps = {
  children: any;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <NavBar />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
