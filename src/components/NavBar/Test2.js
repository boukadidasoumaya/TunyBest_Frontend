import React from "react";
import { NavLink } from "react-router-dom";
import "./test2.css";
const Test2 = () => {
  return (
    <nav>
      <div className="container2">
        <div className="row">
          <div className="col-3">
            <div className="navbar-logo">
              <NavLink to="/">
                <img src={require("../../assets/logo.png")} alt="Logo" />
              </NavLink>
            </div>
          </div>
          <div className="">
            <div className="col-1">Home</div>
            <div className="col-1">Movies</div>
            <div className="col-1">Series</div>
            <div className="col-2">search</div>
            <div className="col-1">profil</div>
            <div className="col-1">notif</div>
            <div className="col-2">log-out</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Test2;
