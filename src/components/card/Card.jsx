import React from "react";
import styles from "./Card.module.sass";
import { Link } from "react-router-dom";

const Card = ({ id, description, imgUrl }) => {
  return (
    <Link
      to={"/accomodations/" + id}
      className={styles.card}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <p className={styles.card__description}>{description}</p>
    </Link>
  );
};

export default Card;
