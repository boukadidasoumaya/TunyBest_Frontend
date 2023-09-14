import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LittleSwiper.css";
import { NavLink } from "react-router-dom";

const LittleSwiper = ({nbepisodes,littleImage}) => {
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
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const revealElementRef = useRef(null);

  useEffect(() => {
    const revealElement = revealElementRef.current;

    const handleScroll = () => {
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight/1.3;
      const elementTop = revealElement.getBoundingClientRect().top + viewportTop;
      const elementBottom = elementTop + revealElement.offsetHeight;

      const isElementVisible = elementBottom > viewportTop && elementTop < viewportBottom;
      revealElement.classList.toggle("reveal", isElementVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={revealElementRef} className="littleswiper details">
      <Slider className="slider" {...settings}>
        {Array.from({ length: nbepisodes }, (_, index) => (
          <div key={index} className="slider-item">
            <div className="slider-item-content">
              <img
                src={require("../../assets/smallImages/" + littleImage)}
                alt={`${index + 1}`}
                className="slider-image"
              />
              <label className="play-button">
                <input type="checkbox" />
                <svg
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="play"
                >
                  <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                </svg>
                <svg
                  viewBox="0 0 320 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pause"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
                </svg>
              </label>
            </div>
            <div className="ep-number d-flex justify-content-center mt-1">
              <span>Episode {index + 1}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LittleSwiper;
