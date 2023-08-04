import "/node_modules/swiper/swiper.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "/node_modules/swiper/swiper-bundle.min.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./mock.json";
import "./Swiper-home.css";

const SwiperHome = () => {
  const [imagelist, setImageList] = useState(data);

  return (
    <Swiper
    className="swipe-container1"
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      loop={true} // pour que ça revient au premier slide
    
    >
      {imagelist.map((slide) => (
        <SwiperSlide key={slide.id} className="swipe-slide">
          <div className="slide-content">
            <img
              src={require("../assets/suits.png")}
              alt={slide.title}
              style={{ width: "100%", height: "800px" }}
            />
            <h2 className="slide-title">Suits</h2>
            <button className="discover-btn">Discover</button>
            <button className="add-btn"><i className="fa-solid fa-plus" style={{ color: "#ffffff" }} />
             Add List</button>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperHome;
