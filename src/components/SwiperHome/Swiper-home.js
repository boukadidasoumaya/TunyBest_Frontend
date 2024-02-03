import "/node_modules/swiper/swiper.min.css";
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from "swiper/modules";
import "/node_modules/swiper/swiper-bundle.min.css";
import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper-home.css";
import {NavLink} from "react-router-dom";

const SwiperHome = ({ slides, inHome,mediaType}) => {
  return (
    <div>
      <div className="swipe-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop={true} // pour que ça revient au premier slide
          autoplay={{
            delay: 13000, // Définir le délai en millisecondes
            disableOnInteraction: false, // Permettre à l'autoplay de continuer même si l'utilisateur interagit avec le Swiper
          }}
        >
          {slides &&
            slides.map((slide,index) => (
              <SwiperSlide key={index} className="swipe-slide">
                <div
                  className="slide-content "
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(15, 19, 30, 1), rgba(15, 19, 30, 0)),
                  linear-gradient(to right, rgba(15, 19, 30, 0), rgba(15, 19, 30, 0.3), rgba(15, 19, 30, 0)),
                  url(${require(`../../assets/bigImages/${slide?.bigimage}`)})`,
                  }}
                >
                  <div className="slide-info container">
                    <h1 className="slide-title">{slide.title}</h1>
                    <div className="details">
                      <p>{slide.description}</p>
                    </div>

                      <NavLink to={`/details/${slide.type}/${slide.id}`}>
                          <button className=" learn-more">
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                              <span className="button-text">Learn More</span>
                          </button>
                      </NavLink>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperHome;
