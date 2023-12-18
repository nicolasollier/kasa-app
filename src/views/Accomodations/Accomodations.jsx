import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../utils/data.json";
import Avatar from "../../components/avatar/Avatar";
import Badge from "../../components/badge/Badge";
import Carousel from "../../components/carousel/Carousel";
import Dropdown from "../../components/dropdown/Dropdown";
import Star from "../../components/icons/star";
import styles from "./Accomodations.module.sass";

const Accomodations = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    //could use fetch() for an API call instead of data.json file for development
    const foundAccommodation = data.find((item) => item.id === id);
    setAccommodation(foundAccommodation);
  }, [id]);

  if (!accommodation) {
    return <div>Chargement...</div>;
  }

  return (
    <div className={styles.accomodations}>
      <Carousel pictures={accommodation.pictures}></Carousel>

      <div className={styles.header}>
        <div className={styles.header__left__items}>
          <div>
            <h1>{accommodation.title}</h1>
            <p>{accommodation.location}</p>
          </div>

          <div className={styles.header__badge__wrapper}>
            {accommodation.tags.map((tag, id) => (
              <Badge key={"badge_" + id} text={tag} />
            ))}
          </div>
        </div>

        <div className={styles.header__right__items}>
          <Avatar host={accommodation.host} />
          <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map((count, index) => {
              return (
                <Star
                  key={"star_" + id}
                  isActive={count <= accommodation.rating}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.description}>
        <Dropdown title='Description' content={accommodation.description} />
      </div>
    </div>
  );
};

export default Accomodations;
