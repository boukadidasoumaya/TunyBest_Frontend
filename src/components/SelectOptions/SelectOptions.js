import React, { useRef, useState, useEffect } from "react";
import "./SelectOptions.css";
import axios from "axios";

const SelectOptions = ({ seasons, isCategories, getEpisodesFromSeason, getMediaByCategory, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef();
  const [categories, setCategories] = useState(null);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (!isCategories) {
      getEpisodesFromSeason(option);
    } else {
      getMediaByCategory(option);
    }
    setIsOpen(false);
  };

  const handleDocumentClick = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add a click event listener to the document
    document.addEventListener("click", handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    if (isCategories) {
      axios.get("http://localhost:5000/category/all").then((response) => {
        setCategories(response.data);
      }).catch((err) => {
        console.log(err);
      })
    }
  }, []);

  return (
      <div
          className="custom-select d-flex align-items-start"
          onClick={toggleOptions}
          ref={selectRef}
      >
        <div className={`selected-option  ${isOpen ? "open" : ""}`}>
          {!isCategories && (<>Season </>)}{selectedOption}
        </div>
        {isOpen && (
            <div
                className={`options  ${
                    isCategories ? "categories" : "custom-scrollbar"
                }`}
            >
              {!isCategories && seasons && Array.from({ length: seasons }, (_, index) => index + 1).map((option) => (
                  <div
                      key={option}
                      className="option"
                      onClick={() => handleOptionClick(option)}
                  >
                    Season {option}
                  </div>
              ))}
              {isCategories && categories && categories.sort((a, b) => a.name.localeCompare(b.name))
                  .map((category) => (
                      <div
                          key={category.name}
                          className="option"
                          onClick={() => handleOptionClick(category.name)}
                      >
                        {category.name}
                      </div>
                  ))}
            </div>
        )}
        <div
            className="custom-arrow"
            style={{
              transform: `translateY(-50%) ${
                  isOpen ? "rotate(180deg)" : "rotate(0deg)"
              }`,
            }}
        />
      </div>
  );
};

export default SelectOptions;
