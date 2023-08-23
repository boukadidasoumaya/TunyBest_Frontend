import React from "react";
import "./Offer.css";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
const Offer = () => {
  return (
    <div className="offer-container">
      <div className="offers">
        <div className="offers-content">
          <div className="logo-container d-flex justify-content-center">
            <img src={require("../../assets/logo.png")} alt="" />
          </div>
          <h2 className="plans d-flex justify-content-center">
            Choose your package (4 plans)
          </h2>
          <div className="container cards d-flex justify-content-center mt-5">
            <div className="card d-flex flex-column justify-content-between">
              <p className="card-title "> Monthly Package</p>
              <p className="small-desc">
                Enjoy the freedom of <b>one-month</b> entertainment with our
                Monthly Package.
              </p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
              <div className="row card-footer m-0">
                <div className="col-5 tag d-flex flex-column align-items-center">
                  7 TND
                </div>
                <div className="col-7 d-flex flex-column justify-content-center align-items-center">
                  <button className="button">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="card d-flex flex-column justify-content-between">
              <p className="card-title">Quarterly Package</p>
              <p className="small-desc">
                Embark on a <b>three-month</b> adventure of non-stop entertainment
                with our Quarterly Package.
              </p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
              <div className="row card-footer m-0">
                <div className="col-5 tag d-flex flex-column align-items-center">
                  19 TND
                </div>
                <div className="col-7 d-flex flex-column justify-content-center align-items-center">
                  <button className="button">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="card d-flex flex-column justify-content-between">
              <p className="card-title">Half-Yearly Package</p>
              <p className="small-desc">
                Immerse yourself in <b>six months</b> of captivating storytelling
                with our Half-Yearly Package.
              </p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
              <div className="row card-footer m-0">
                <div className="col-5 tag d-flex flex-column align-items-center">
                  36 TND
                </div>
                <div className="col-7 d-flex flex-column justify-content-center align-items-center">
                  <button className="button">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="card d-flex flex-column justify-content-between">
              <p className="card-title">Annual Package</p>
              <p className="small-desc">
                Immerse yourself in a <b>year-long</b> cinematic journey with our
                Premium Package.
              </p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
              <div className="row card-footer m-0">
                <div className="col-5 tag d-flex flex-column align-items-center">
                  74 TND
                </div>
                <div className="col-7 d-flex flex-column justify-content-center align-items-center">
                  <button className="button">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default Offer;
