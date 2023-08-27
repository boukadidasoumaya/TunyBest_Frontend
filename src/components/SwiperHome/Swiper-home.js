import "/node_modules/swiper/swiper.min.css";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import "/node_modules/swiper/swiper-bundle.min.css";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
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
                    pagination={{clickable: true}}
                    loop={true} // pour que ça revient au premier slide
                >
                    {imagelist.map((slide) => (
                        <SwiperSlide key={slide.id} className="swipe-slide">
                            <div className="slide-content "
                            style={{
                                backgroundImage: `linear-gradient(to top, rgba(15, 19, 30, 1), rgba(15, 19, 30, 0)),
                                linear-gradient(to right, rgba(15, 19, 30, 0), rgba(15, 19, 30, 0.3), rgba(15, 19, 30, 0)),
                                url(${require("../../assets/bigImages/series/winx.jpg")})`}}
                            >
                                <div className="slide-info container">
                                    <h1 className="slide-title">Peaky Blinders</h1>
                                    <div className="details">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Natus, ducimus quasi tempore dolor odio ut non provident,
                                            pariatur quia ullam et at praesentium, consequatur
                                            sapiente facere saepe reprehenderit quas cupiditate!
                                        </p>
                                    </div>

                                    <button className=" learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                                        <span className="button-text">Learn More</span>
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
