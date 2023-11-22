import React from "react";
import styles from "./Banner.module.sass";

const Banner = ({ hasText, img }) => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${require(`../../assets/img/${img}`)})`,
      }}
    >
      {hasText && (
        <h1 className={styles.banner__title}>
          Chez vous, <br className={styles.linebreak} /> partout et ailleurs
        </h1>
      )}
    </div>
  );
};

export default Banner;
