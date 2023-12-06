import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../utils/data.json";
import Carousel from "../../components/carousel/Carousel";

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
    <div>
      <Carousel pictures={accommodation.pictures} ></Carousel>
    </div>
  );
};

export default Accomodations;
