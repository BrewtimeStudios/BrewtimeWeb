import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

type LayoutProps = {
  children: any;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
