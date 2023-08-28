import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LittleSwiper.css";
import { NavLink } from "react-router-dom";

const LittleSwiper = () => {
  const [hoveredSlide, setHoveredSlide] = useState(null); // State to track hovered slide index
  const sliderRef = useRef(null);
  const [slides, setSlides] = useState(
    Array.from({ length: 8 }, (_, index) => index)
  );
  const handleRemoveClick = (index) => {
    const newSlides = slides.filter((_, i) => i !== index);
    setSlides(newSlides);
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
  };

  return (
    <div className="littleswiper">
      <Slider className="slider" {...settings}>
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className="slide list"
          >
            <img
              src={require("../../assets/peakyblinderssmall.jpg")}
              alt={`${index + 1}`}
            />
            {/*<p*/}
            {/*  onClick={() => handleRemoveClick(index)}*/}
            {/*  className={`r ${hoveredSlide === index ? "remove" : ""}`}*/}
            {/*>*/}
            {/*  <i className="fa-solid fa-minus" style={{ color: "#fafafa" }}></i>*/}
            {/*  Remove From List*/}
            {/*</p>*/}

              <button className="button profil">
                <svg viewBox="0 0 448 512" className="svgIcon">
                  <path
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
              </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LittleSwiper;
