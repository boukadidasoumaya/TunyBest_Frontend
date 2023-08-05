import React, { useState, useRef, useEffect } from "react";
import "./EpisodesSection.css";

const EpisodesSection = () => {
  const options = ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5"];

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

  return (
    <div className="episodes-section">
      <div className="row episodes">
        <div className="col-3 nb-episodes d-flex flex-column justify-content-end">
          Episodes (6)
        </div>
        <div className="col-9 d-flex flex-column justify-content-end align-items-end">
          <div
            className="custom-select d-flex flex-column align-items-start"
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
          </div>
        </div>
      </div>

      <hr className="custom-hr" />

      <hr className="custom-hr" />
    </div>
  );
};

export default EpisodesSection;
