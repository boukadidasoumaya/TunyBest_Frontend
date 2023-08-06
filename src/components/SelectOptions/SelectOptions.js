import React, { useRef, useState, useEffect } from "react";
import "./SelectOptions.css";

const SelectOptions = ({ options, byDefault, isCategories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(byDefault);
  const selectRef = useRef();

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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
  return (
    <div
      className="custom-select d-flex align-items-start"
      onClick={toggleOptions}
      ref={selectRef}
    >
      <div className={`selected-option  ${isOpen ? "open" : ""}`}>
        {selectedOption}
      </div>
      {isOpen && (
        <div
          className={`options  ${
            isCategories ? "categories" : "custom-scrollbar"
          } `}
        >
          {options &&
            options.map((option) => (
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
