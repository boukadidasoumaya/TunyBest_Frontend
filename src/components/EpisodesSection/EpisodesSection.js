import React, { useState, useRef, useEffect } from "react";
import "./EpisodesSection.css";
import Slider from "react-slick";
import SelectOptions from "../SelectOptions/SelectOptions";
import LittleSwiper from "../LittleSwiper/LittleSwiperDetails";
const EpisodesSection = ({media}) => {

  // const numberOfImages = 8;
  //
  // const [isOpen, setIsOpen] = useState(false);
  // const selectRef = useRef();
  //
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="episodes-section">
      <div className="row episodes">
        <div className="col-5 nb-episodes d-flex flex-column justify-content-end">
          Episodes (6)
        </div>
        <div className="col-7 d-flex flex-column justify-content-end align-items-end">
          {media?.nbseason > 1 ? (
            <SelectOptions
              seasons={media?.nbseason}
              byDefault={1}
              isCategories={false}
            />
          ) : null}
        </div>
      </div>

      <hr className="custom-hr" />
      <LittleSwiper  />
      <hr className="custom-hr" />
    </div>
  );
};

export default EpisodesSection;
