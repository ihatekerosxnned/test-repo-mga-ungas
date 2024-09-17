import React from "react";
import Slider from "react-slick";
import webHeader from "/vite.svg";
import "./Carousel.css";

import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import slide4 from "../../assets/images/slide4.png";
import slide5 from "../../assets/images/slide5.png";
import slide6 from "../../assets/images/slide6.png";
import Animate from "../../Animation/Animate";
const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
  };
  //   FOR LOOP PARA DI MAG LABA IMO CODE
  const items = [
    {
      title: "Slide 1",
      image: slide1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, itaque",
    },
    {
      title: "Slide 2",
      image: slide2,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, itaque.",
    },
    {
      title: "Slide 3",
      image: slide3,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, itaque.",
    },
    {
      title: "Slide 4",
      image: slide4,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, itaque.",
    },
    {
      title: "Slide 5",
      image: slide5,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, itaque.",
    },
    {
      title: "Slide 6",
      image: slide6,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, itaque.",
    },
  ];

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {items.map((item) => (
            <Animate>
              <div className="card">
                <div className="card-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="card-text">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <button className="read-more">Read More</button>
                </div>
              </div>
            </Animate>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
