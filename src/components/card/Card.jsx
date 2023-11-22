import React from 'react';
import styles from './Card.module.sass';

const Card = ({description, imgUrl}) => {
  return ( 
    <div className={styles.card} style={{ backgroundImage: `url(${imgUrl})` }}>
      <p className={styles.card__description}>{description}</p>
    </div>
   );
}
 
export default Card;