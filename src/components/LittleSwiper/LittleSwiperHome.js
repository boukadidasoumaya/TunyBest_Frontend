import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LittleSwiper.css";
import { NavLink } from "react-router-dom";

const LittleSwiper = ({ littleslides }) => {
  const [hoveredSlide, setHoveredSlide] = useState(null); // State to track hovered slide index
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const revealElementRef = useRef(null);

  useEffect(() => {
    const revealElement = revealElementRef.current;

    const handleScroll = () => {
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight / 1.2;
      const elementTop =
        revealElement.getBoundingClientRect().top + viewportTop;
      const elementBottom = elementTop + revealElement.offsetHeight;

      const isElementVisible =
        elementBottom > viewportTop && elementTop < viewportBottom;
      revealElement.classList.toggle("reveal", isElementVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={revealElementRef} className="littleswiper home">
      <Slider className="slider" {...settings}>
        {littleslides &&
          littleslides.map((slide) => (
            <div
              key={slide.id}
              className={`slide ${hoveredSlide === slide.id ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredSlide(slide.id)}
              onMouseLeave={() => setHoveredSlide(null)}
            >
              <NavLink to={`details/${slide.type}/${slide.id}`}>
                <div className="details d-flex flex-column justify-content-end">
                  <div className="details-content row d-flex">
                    <div className="left col-8 ">
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
                          {slide.type === "series" ? (
                            <span className="season">
                              <span>{slide.nbseason}</span>
                              <span className="name">Seasons</span>
                            </span>
                          ) : (
                            <p>{slide?.runningtime}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="right col-4 p-0 ">
                      <i className=" fa-solid fa-play" />
                    </div>
                  </div>
                </div>

                <img

                  id="imghomeandprofil"
                  src={require(`../../assets/smallImages/${slide?.littleimage}`)}
                  alt={`Item ${slide.id}`}
                />
              </NavLink>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default LittleSwiper;
