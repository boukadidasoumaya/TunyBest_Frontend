import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LittleSwiper = () => {
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
    nextArrow: (
      <div className="slick-arrow slick-next" onClick={() => sliderRef.current.slickNext()}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    ),
    prevArrow: (
      <div className="slick-arrow slick-prev" onClick={() => sliderRef.current.slickPrev()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    ),
    afterChange: function (index) {},
  };

  return (
    <div>
      <h2>Swipe To Slide</h2>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img
            src={require("../assets/suits.png")}
            style={{ width: "50%", height: "80px" }}
            alt="Slide 1"
          />
        </div>
        <div>
          <h3>2</h3>
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

export default LittleSwiper;
