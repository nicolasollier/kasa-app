import React from 'react';
import styles from './Card.module.sass';

const Card = () => {
  return ( 
    <div className={styles.card}>
      <p className={styles.card__description}>Titre de la <br /> location</p>
    </div>
   );
}
 
export default Card;