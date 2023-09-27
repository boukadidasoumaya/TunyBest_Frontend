import React, { useRef,useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import SwiperHome from "../SwiperHome/Swiper-home";
import Footer from "../Footer/Footer";
import SelectOptions from "../SelectOptions/SelectOptions";
import "./Movies.css";
import List from "../List/List";
import axios from "axios";

const Movies = () => {
  const [slides, setSlides] = useState([]);
  const [selectCategory, setSelectCategory] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Category");

  useEffect(() => {
    getSlides();
  }, []);
const getSlides = () => {
  axios.get("http://localhost:5000/movies").then((response) => {
    setSlides(response.data);
  });
}
  const getMediaByCategory = (category) => {
    let newSlides = slides.filter((slide) => slide.categories.includes(category));
    setSlides(newSlides);
    setSelectCategory(true);
  }
  const returnToAll = () => {
    getSlides();
    setSelectCategory(false);
    setSelectedOption("Category");
  }

  return (
    <div className="movies">
      <NavBar searched = {""} />

      <SwiperHome slides={slides} inHome={false} />
  <div className="container">
      <div className="row">
        {selectCategory && (<div className="col-1 col-md-1 col-sm-1 pe-5 pe-lg-0 d-lg-flex justify-content-lg-end">
          <button className="buttn" onClick={returnToAll}>
            <div className="button-box">
    <span className="button-elem">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
        <path
            d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
      </svg>
    </span>
              <span className="button-elem">
      <svg viewBox="0 0 46 40">
        <path
            d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
      </svg>
    </span>
            </div>
          </button>
        </div>)}
          <div className="select-options col-5 col-md-5 col-sm-5 ps-lg-2">
            <SelectOptions
              getMediaByCategory={getMediaByCategory}
              isCategories={true}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
      </div>
  </div>

      <div className="container d-flex flex-column align-items-center">
        <div className="row">
          <div className="col-12">
            <List slides={slides} />
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

export default Movies;
