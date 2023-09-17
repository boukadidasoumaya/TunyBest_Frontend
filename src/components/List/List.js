import React from "react";
import "./List.css";
import { NavLink } from "react-router-dom";
const List = ({ slides }) => {
  console.log(slides);

  
  return (
    <div className="list">
      <div className="list-container row ">
        {slides &&
          slides.map((slide) => (
            <div
              className="latest col-lg-2 col-md-3 col-sm-6 mb-4"
              key={slide.id}
            >
              <div className="box">
                <NavLink to="/details/1">
                  <div className="card">
                    <div className="details d-flex flex-column justify-content-end">
                      <div className="details-content row d-flex">
                        <div className="left col-8 p-0 mt-1  ">
                          <div className="date_quality">
                            <p className="quality">HD</p>
                            <p className="date">{slide.year}</p>
                          </div>
                          {slide.categories && slide.categories.length > 0 && (
                        <>
                          {slide.categories
                            .slice(0, 3)
                            .map((category, index) => (
                              <span key={index} className="category">
                                {category}
                                {index < slide.categories.length -1 && ", "}

                              </span>
                            ))}
                          {slide.categories.length > 3 && (
                            <span className="category">...</span>
                          )}
                        </>
                      )}
                          <div className="info">
                            <div className="rate">
                              <i className="fa-solid fa-star" />
                              <p>{slide.rating}</p>
                            </div>
                            <div className="time">
                              <i className="fa-regular fa-clock" />
                              <p>{slide.runningtime}</p>
                            </div>
                          </div>
                        </div>
                        <div className="right col-4 p-0 mt-1  ">
                          <i className="mt-4 fa-solid fa-play" />
                        </div>
                      </div>
                    </div>
                    <img id="imghomeandprofil" src={require(`../../assets/smallImages/${slide?.littleimage}`)} alt={`Item ${slide.id}`} />
                  </div>
                </NavLink>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
