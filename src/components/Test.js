import React, { useEffect, useState } from "react";
import "./test.css"
const Test = () => {
  const [isSearchBoxActive, setSearchBoxActive] = useState(false);

  const handleSearchButtonClick = () => {
    setSearchBoxActive((prevState) => !prevState);
  };
  const [clicked, setClicked] = useState(false);
  const handleToggleClick = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <nav>
      <div>
        <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
          <li>Home</li>
          <li>movies</li>
          <li>series</li>
          <li>profil</li>
        
        </ul>
      
      </div>
      <div id="toggle" className="toggle" onClick={handleToggleClick}>
              <i className={clicked ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"} style={{ color: "#ffffff" }}/>
            </div>
    </nav>
  );
};

export default Test;
