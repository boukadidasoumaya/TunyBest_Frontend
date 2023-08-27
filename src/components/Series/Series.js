import React, { useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import SwiperHome from "../SwiperHome/Swiper-home";
import slides from "../mock.json";
import Footer from "../Footer/Footer";
import SelectOptions from "../SelectOptions/SelectOptions";
import List from "../List/List";
import "./Series.css";
import { useEffect } from "react";
import axios from "axios";
const Series = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/series").then((response) => {
      setSlides(response.data);
      
    
    });
  }, []);
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

      <SwiperHome slides={slides} inmovies={false} inseries={true} inHome={false} />
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
        <nav aria-label="Page navigation example">
          <ul className="pagination ">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </div>
  );
};

export default Series;
