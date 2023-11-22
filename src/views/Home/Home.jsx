import React from "react";
import Banner from "../../components/banner/Banner.jsx";
import Card from "../../components/card/Card.jsx";
import data from "../../utils/data.json";
import styles from "./Home.module.sass";

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner hasText={true} />
      
      <div className={styles.home__cardList}>
        {data.map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
