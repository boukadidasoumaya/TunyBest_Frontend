import React, { useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import SwiperHome from "../SwiperHome/Swiper-home";
import slides from "../mock.json";
import Footer from "../Footer/Footer";
import SelectOptions from "../SelectOptions/SelectOptions";
import List from "../List/List";
import "./Series.css";
const Series = () => {
  const options = [
    "adventure",
    "sci-fi",
    "horror",
    "romantic",
    "drama",
    "documentaire",
    "anime",
    "adventure",
    "sci-fi",
    "horror",
    "romantic",
    "drama",
    "documentaire",
    "anime",
  ];
  return (
    <div className="series">
      <NavBar />

      <SwiperHome slides={slides} inHome={false} />
      <div className="select-options">
        <SelectOptions
          options={options}
          byDefault={"Category"}
          isCategories={true}
        />{" "}
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <List />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Series;
