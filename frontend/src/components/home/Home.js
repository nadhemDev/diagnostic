import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import HomeService from "../homeservice/HomeService";
import Addreservation from "../modalReservation/Addreservation";
import "./home.css";
const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://france3-regions.francetvinfo.fr/image/fHhfL28blQozZzmw2i2P329_Z3Q/1200x675/regions/2020/06/09/5edf4f70ad7b1_maxstockworld367367-3554809.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>welcome to our service</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.ladepeche.fr/api/v1/images/view/5e4babc5d286c243e1649405/hd/image.jpg?v=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Technical visit</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.toutsurmesfinances.com/vie-pratique/wp-content/uploads/sites/9/2018/02/controle-technique.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
          <p>
          How to take your vehicle for a technical visit
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    <HomeService/>
    <Addreservation /> 
    </div>
  );
};

export default Home;
