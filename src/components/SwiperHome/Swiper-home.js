import "/node_modules/swiper/swiper.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "/node_modules/swiper/swiper-bundle.min.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../mock.json";
import "./Swiper-home.css";
const SwiperHome = (inHome) => {
  const [imagelist, setImageList] = useState(data);
  return (
    <div>
      <div className="swipe-container">
        <Swiper
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
                <div className="slide-info">
                  <h2 className="slide-title">Suits</h2>
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Learn More</span>
                  </button>

                  <button className="Btn d-flex justify-content-start align-items-center">
                    <div className="sign">+</div>
                    <div className="text">Add list</div>
                  </button>
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
