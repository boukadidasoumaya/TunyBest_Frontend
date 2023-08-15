import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import LittleSwiper from "../LittleSwiper/LittleSwiperProfil";
import "./Profil.css";

const Profil = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("Rym Jbeli");
  const [birthDate, setBirthDate] = useState("16/05/2002");
  const [address, setAddress] = useState("Tunisia");
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleConfirmClick = () => {
    handleEditClick();
  };

  const handleBlur = () => {
    setIsEditing(false);
  };
  return (
    <div>
      <NavBar />
      <div className="profil-content">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 ">
                <div className="cadre d-flex flex-column align-items-center justify-content-center">
                  <div className="row d-flex  justify-content-center ">
                    <img
                      className="profileImage p-0 m-2"
                      src={require("../../assets/rym.jpg")}
                      alt="Logo"
                    />
                    <i class="fa-sharp fa-regular fa-pen-to-square"></i>
                    <hr className="mt-4 mb-4 " />
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex details">
                      <div className="d-flex ">
                        <i
                          className="fa-solid fa-user"
                          style={{ color: "#ffffff" }}
                        />
                        {isEditing ? (
                          <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onBlur={handleBlur}
                          />
                        ) : (
                          <p className="username">{username}</p>
                        )}
                      </div>
                      <div className="edit" onClick={handleConfirmClick}>
                        {isEditing ? (
                          <i
                            className="fas fa-check"
                            style={{ color: "#ffffff" }}
                          />
                        ) : (
                          <i
                            className="fas fa-pencil-alt"
                            style={{ color: "#ffffff" }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-12 d-flex details">
                      <div className="d-flex ">
                        <i
                          className="fa-solid fa-cake-candles"
                          style={{ color: "#ffffff" }}
                        />

                        {isEditing ? (
                          <input
                            type="text"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            onBlur={handleBlur}
                          />
                        ) : (
                          <div className="birthday">
                            <p className="date mb-0">{birthDate}</p>
                            <p className="birth mb-3">Date Of Birth</p>
                          </div>
                        )}
                      </div>
                      <div className="edit" onClick={handleConfirmClick}>
                        {isEditing ? (
                          <i
                            className="fas fa-check"
                            style={{ color: "#ffffff" }}
                          />
                        ) : (
                          <i
                            className="fas fa-pencil-alt"
                            style={{ color: "#ffffff" }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-12 d-flex details">
                      <div className="d-flex ">
                        <i className="fa-solid fa-map-marker-alt"></i>

                        <p className="address">Tunisia</p>
                      </div>
                      <div className="edit ">
                        <i
                          className="fa-solid fa-pencil"
                          style={{ color: "#ffffff" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9 col-md-8 col-sm-12 profil-right">
                <div className="row">
                  <div className="col-12">
                    <div className="account d-flex">
                      <h2>Account </h2>
                      <span className="fw-light fs-6 member">
                        Member since 2002
                      </span>
                    </div>

                    <hr className="custom-hr" />
                  </div>
                  <div className="col-12">
                    <p className="fs-5 fw-light">Subscribing and Billing:</p>
                  </div>
                  <div className="col-12 sub-bil ">
                    <ul>
                      <li>
                        <div className="row">
                          <span
                            className="col-9"
                            style={{ wordBreak: "break-all" }}
                          >
                            soumaya.boukadida@insat.ucar.tn
                          </span>
                          <span className="col-3 p-0 edit d-flex justify-content-end">
                            Update Email
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <span className="col-9">Password : ******</span>
                          <span className="col-3 p-0 edit d-flex justify-content-end">
                            Change Password
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-9">
                            <span>
                              <img
                                src={require("../../assets/visa.png")}
                                alt=""
                              />
                            </span>
                            <span> **** **** **** 2061</span>
                          </div>
                          <div className="col-3 p-0 edit d-flex flex-column align-items-end justify-content-end">
                            <div> Manage payment info</div>
                            <div>Billing details</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <p className="fs-5 fw-light">Plan Details:</p>
                  </div>
                  <div className="col-12 plan ">
                    <ul>
                      <li>
                        <div className="row">
                          <span className="col-9">Premium</span>
                          <span className="col-3 p-0 edit d-flex justify-content-end">
                            Change Plan
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <hr className="custom-hr m-0" />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <p className="fs-3 ">My List:</p>
              </div>
              <hr className="custom-hr" />
              <LittleSwiper inHome={true} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profil;
