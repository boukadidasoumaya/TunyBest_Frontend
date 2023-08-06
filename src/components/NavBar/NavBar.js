import React, { useEffect, useState } from "react";
import "./NavBarre.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  const [isSearchBoxActive, setSearchBoxActive] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleSearchButtonClick = () => {
    setSearchBoxActive((prevState) => !prevState);
  };

  const handleToggleClick = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <nav className="nav">
      <div className="container1">
        <div className="navbarre">
          <div className="navbar-logo">
            <NavLink to="/">
              <img src={require("../../assets/logo.png")} alt="Logo" />
            </NavLink>
          </div>
          <ul className={`navbar-menu ${clicked ? "active" : ""}`}>
            <li>
              <div
                className={`mobile-search ${
                  isSearchBoxActive ? "active" : ""
                } `}
              >
                <input
                  type="text"
                  placeholder="Search"
                  className={`search-txt`}
                />
                <a className="search-btn" onClick={handleSearchButtonClick}>
                  <i className="fas fa-search" />
                </a>
              </div>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/series">Series</NavLink>
            </li>
            <li>
              <div
                className={`search-box ${isSearchBoxActive ? "active" : ""}`}
              >
                <input
                  type="text"
                  placeholder="Search"
                  className={`search-txt`}
                />
                <a className="search-btn" onClick={handleSearchButtonClick}>
                  <i className="fas fa-search" />
                </a>
              </div>
            </li>
            <li>
              <div className="bell">
                <i className="fas fa-bell" style={{ color: "#ffffff" }} />
              </div>
            </li>
            <li>
              <NavLink className="profil" to="/profil/1">
                Profil
              </NavLink>
            </li>
            <li>
              <div className="bell-notif1">
                <i className="fas fa-bell" style={{ color: "#ffffff" }} />
              </div>
            </li>
            <div id="toggle" className="toggle" onClick={handleToggleClick}>
              <i
                className={clicked ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"}
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;