import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LittleSwiper.css";
import { NavLink } from "react-router-dom";

const LittleSwiper = () => {
  const [hoveredSlide, setHoveredSlide] = useState(null); // State to track hovered slide index
  const sliderRef = useRef(null);

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
          className={`slide ${hoveredSlide === index ? "hovered" : ""}`}
          onMouseEnter={() => setHoveredSlide(index)}
          onMouseLeave={() => setHoveredSlide(null)}
        >
          <NavLink to="/details/1">
            <img
              src={require("../../assets/peakyblinderssmall.jpg")}
              alt={`${index + 1}`}
            />
          </NavLink>
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default LittleSwiper;
