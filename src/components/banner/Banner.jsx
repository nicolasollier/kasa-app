import React from "react";
import styles from "./Banner.module.sass";

const Banner = ({ hasText }) => {
  return (
    <>
      <div className={styles.banner}>
        {hasText && (
          <h1 className={styles.banner__title}>
            Chez vous, <br className={styles.linebreak} /> partout et ailleurs
          </h1>
        )}
      </div>
    </>
  );
};

export default Banner;
