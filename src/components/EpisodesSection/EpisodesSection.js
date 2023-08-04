import React, { useState, useRef, useEffect } from "react";
import "./EpisodesSection.css";
import Slider from "react-slick";
const EpisodesSection = () => {
  const options = ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5"];

  const numberOfImages = 8;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Season 1");
  const selectRef = useRef();

  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener("click", handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleDocumentClick = (event) => {
    // Check if the clicked element is inside the custom select
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  var settings = {
    dots: true,
    infinite: false,
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
          dots: true,
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

  return (
    <div className="episodes-section">
      <div className="row episodes">
        <div className="col-5 nb-episodes d-flex flex-column justify-content-end">
          Episodes (6)
        </div>
        <div className="col-7 d-flex flex-column justify-content-end align-items-end">
          <div
            className="custom-select d-flex  align-items-start"
            onClick={toggleOptions}
            ref={selectRef}
          >
            <div className={`selected-option ${isOpen ? "open" : ""}`}>
              {selectedOption}
            </div>
            {isOpen && (
              <div className="options">
                {options.map((option) => (
                  <div
                    key={option}
                    className="option"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
            {/* Inline styles for the arrow */}
      <div
        className="custom-arrow"
        style={{
          position: "absolute",
          top: "52%",
          right: "15px",
          borderLeft: "9px solid transparent",
          borderRight: "9px solid transparent",
          borderTop: "11px solid rgb(15, 19, 30)",
          transform: `translateY(-50%) ${isOpen ? "rotate(180deg)" : "rotate(0deg)"}`,
          transition: "transform 0.2s ease-in-out",
          pointerEvents: "none",
        }}
      />
          </div>
        </div>
      </div>

      <hr className="custom-hr" />
      <Slider className="slider" {...settings}>
        {Array.from({ length: numberOfImages }, (_, index) => (
          <div key={index}>
            <div className="img d-flex justify-content-center" key={index}>
              <img
                src={require(`../../assets/peakyblinderssmall.jpg`)}
                alt={`${index + 1}`}
              />
            </div>
            <div className="ep-number d-flex justify-content-center">
              <span>Episode {index + 1}</span>
            </div>
          </div>
        ))}
      </Slider>
      <hr className="custom-hr" />
    </div>
  );
};

export default EpisodesSection;
