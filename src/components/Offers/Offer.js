import React from "react";
import "./Offer.css";
const Offer = () => {
  return (
    <div className="offers">
      <div className="logo-container d-flex justify-content-center">
        <img src={require("../../assets/logo.png")} alt="" />
      </div>
      <h2 className="plans d-flex justify-content-center">
        Choose your package (4 plans)
      </h2>
      <div className="container cards d-flex justify-content-center mt-5">
        <div class="card d-flex flex-column justify-content-between">
          <p class="card-title "> Monthly Package</p>
          <p class="small-desc">
            Enjoy the freedom of <b>one-month</b> entertainment with our Monthly
            Package.
          </p>
          <div class="go-corner">
            <div class="go-arrow">→</div>
          </div>
          <div class="row footer m-0">
            <div class="col-5 tag d-flex flex-column align-items-center">
              7 TND
            </div>
            <div className="col-7 d-flex flex-column justify-content-center align-items-center">
              <button className="button">Subscribe</button>
            </div>
          </div>
        </div>
        <div class="card d-flex flex-column justify-content-between">
          <p class="card-title">Quarterly Package</p>
          <p class="small-desc">
            Embark on a <b>three-month</b> adventure of non-stop entertainment
            with our Quarterly Package.
          </p>
          <div class="go-corner">
            <div class="go-arrow">→</div>
          </div>
          <div class="row footer m-0">
            <div class="col-5 tag d-flex flex-column align-items-center">
              19 TND
            </div>
            <div className="col-7 d-flex flex-column justify-content-center align-items-center">
              <button className="button">Subscribe</button>
            </div>
          </div>
        </div>
        <div class="card d-flex flex-column justify-content-between">
          <p class="card-title">Half-Yearly Package</p>
          <p class="small-desc">
            Immerse yourself in <b>six months</b> of captivating storytelling
            with our Half-Yearly Package.
          </p>
          <div class="go-corner">
            <div class="go-arrow">→</div>
          </div>
          <div class="row footer m-0">
            <div class="col-5 tag d-flex flex-column align-items-center">
              36 TND
            </div>
            <div className="col-7 d-flex flex-column justify-content-center align-items-center">
              <button className="button">Subscribe</button>
            </div>
          </div>
        </div>
        <div class="card d-flex flex-column justify-content-between">
          <p class="card-title">Annual Package</p>
          <p class="small-desc">
            Immerse yourself in a <b>year-long</b> cinematic journey with our
            Premium Package.
          </p>
          <div class="go-corner">
            <div class="go-arrow">→</div>
          </div>
          <div class="row footer m-0">
            <div class="col-5 tag d-flex flex-column align-items-center">
              74 TND
            </div>
            <div className="col-7 d-flex flex-column justify-content-center align-items-center">
              <button className="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
