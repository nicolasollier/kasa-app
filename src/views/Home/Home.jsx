import React from "react";
import Banner from "../../components/banner/Banner.jsx";
import Card from "../../components/card/Card.jsx";
import data from "../../utils/data.json";
import styles from "./Home.module.sass";

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner hasText={true} img={'background-coast.png'}/>

      <div className={styles.home__cardList}>
        {data.map((item) => (
          <Card
            key={"card_" + item.id}
            description={item.title}
            imgUrl={item.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
