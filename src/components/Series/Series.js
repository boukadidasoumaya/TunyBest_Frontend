import React, { useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import SwiperHome from "../SwiperHome/Swiper-home";
import Footer from "../Footer/Footer";
import SelectOptions from "../SelectOptions/SelectOptions";
import Pagination from "../PaginatedItems/PaginatedItems";

import List from "../List/List";
import "./Series.css";
import { useEffect } from "react";
import axios from "axios";

const Series = () => {
  const [slides, setSlides] = useState([]);
  const [selectCategory, setSelectCategory] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Category");
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  const itemsPerPage = 6; // Nombre d'éléments par page
  // Fonction pour calculer l'index de début et de fin des éléments à afficher
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = slides.slice(indexOfFirstItem, indexOfLastItem);

  // Fonction pour changer de page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getSlides = () => {
    axios.get("http://localhost:5000/series").then((response) => {
      setSlides(response.data);
    });
  };
  useEffect(() => {
    getSlides();
  }, []);
  const getMediaByCategory = (category) => {
    let newSlides = slides.filter((slide) =>
      slide.categories.includes(category)
    );
    setSlides(newSlides);
    setSelectCategory(true);
  };
  const returnToAll = () => {
    getSlides();
    setSelectCategory(false);
    setSelectedOption("Category");
  };
  return (
    <div className="series">
      <NavBar searched={""} />

      <SwiperHome slides={slides} inHome={false} />
      <div className="container">
        <div className="row">
          {selectCategory && (
            <div className="col-1 col-md-1 col-sm-1  pe-5 pe-lg-0 d-lg-flex justify-content-lg-end">
              <button className="buttn" onClick={returnToAll}>
                <div className="button-box">
                  <span className="button-elem">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                  </span>
                  <span className="button-elem">
                    <svg viewBox="0 0 46 40">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          )}
          <div className="select-options col-5 col-md-5 col-sm-5 ps-lg-2">
            <SelectOptions
              getMediaByCategory={getMediaByCategory}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              isCategories={true}
            />
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column align-items-center">
        <div className="row">
          <div className="col-12">
            <List slides={currentItems} />
          </div>
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={slides.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Series;
