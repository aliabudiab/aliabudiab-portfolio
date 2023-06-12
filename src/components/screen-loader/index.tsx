import { FC } from "react";

import styles from "./screen-loader.module.css";

const ScreenLoader: FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles["load-text"]}>
        <div className={styles["loaded-text"]}>A</div>
        <div className={styles["loading-text"]}>li Abu Diab</div>
      </div>
    </div>
  );
};

export default ScreenLoader;
