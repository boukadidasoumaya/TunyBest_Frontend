import React from "react";
import "./NavBarre.css";
const NavMenu = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={require("../assets/logo.png")} />
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Series</a>
        </li>
      </ul>
      <div className="search-box">
        <input type="search-txt" placeholder="Search" />
        <button type="submit">
          <i className="fas fa-search" />
        </button>
      </div>
    </nav>
  );
};


export default NavMenu;
