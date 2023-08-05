import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom-slider-arrows.css"; // Import du fichier CSS pour les flèches personnalisées
import "./test.css"
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
}
const Test = () => {
  const sliderRef = useRef(null);

  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: function (index) {},
  };

  return (
    <div  style={{ padding: "0 80px" }}>
      <h2>Trending Now</h2>
      <Slider ref={sliderRef} {...settings}>
        <div >
          <img
            src={require("../assets/suits.png")}
            style={{ width: "50%", height: "80px" }}
            alt="Slide 1"
          />
        </div>
        <div>
        <img
            src={require("../assets/suits.png")}
            style={{ width: "50%", height: "80px" }}
            alt="Slide 1"
          />
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Test;
// Le reste du code reste inchangé
