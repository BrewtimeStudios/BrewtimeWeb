import { ReactElement } from "react";

import styles from "../styles/Button.module.scss";

type Props = {
  title: string;
};

function Button({ title }: Props): ReactElement {
  return <button className={styles.base}>{title}</button>;
}

export default Button;
