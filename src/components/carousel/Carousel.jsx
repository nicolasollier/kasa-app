import React, { useState } from "react";
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

  return (
    <div className={styles.carousel__wrapper}>
      <img src={pictures[currentIndex]} alt="carousel" />
      <button className={styles.carousel__btn} onClick={goToPrev}>
        Previous
      </button>
      <button className={styles.carousel__btn} onClick={goToNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
