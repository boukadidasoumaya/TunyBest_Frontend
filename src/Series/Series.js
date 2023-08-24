import React, { useRef, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import SwiperHome from "../components/SwiperHome/Swiper-home";
import slides from "../components/mock.json";
import Footer from "../components/Footer/Footer";
import SelectOptions from "../components/SelectOptions/SelectOptions";
import List from "../components/List/List";
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
