import React, { useState } from "react";
import ArrowNext from "../icons/arrow_next";
import styles from "./Carousel.module.sass";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const showArrows = pictures.length > 1;

  return (
    <div className={styles.carousel__wrapper}>
      {showArrows && (
        <button className={styles.carousel__btn} onClick={goToPrev}>
          <ArrowNext className={styles.arrow} />
        </button>
      )}
      <img src={pictures[currentIndex]} alt="carousel" />
      <div className={styles.carousel__counter}>
        {currentIndex + 1}/{pictures.length}
      </div>
      {showArrows && (
        <button className={styles.carousel__btn} onClick={goToNext}>
          <ArrowNext className={styles.arrow} />
        </button>
      )}
    </div>
  );
};

export default Carousel;
