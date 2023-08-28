import React, { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import LittleSwiper from "../LittleSwiper/LittleSwiperProfil";
import "./Profil.css";
import { NavLink } from "react-router-dom";
import { authContext } from "../../helpers/authContext";
import axios from "axios";

const Profil = () => {
  const { user } = useContext(authContext);

  const [profileImage, setProfileImage] = useState(""); // State for profile image
  const [imageUrl, setImageUrl] = useState(require("../../assets/avatar.png"));
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("******");
  const [numAccount, setNumAccount] = useState(" **** **** **** 2061");
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    setProfileImage(user ? user.image : "");
    // Update imageUrl based on profileImage
    setImageUrl(
      profileImage
        ? `http://localhost:5000/uploads/${profileImage}`
        : require("../../assets/avatar.png")
    );
    setEmail(user ? user.email : "");
    setFirstname(user ? user.firstname : "");
    setLastname(user ? user.lastname : "");
    const date = user ? formatDate(user.birthdate) : "";
    setBirthDate(date);
    setAddress(user ? user.country : "");
  }, [profileImage, user]);

  const [isEditing, setIsEditing] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the selected image file
    const reader = new FileReader(); // Create a FileReader to read the image
    reader.onload = (event) => {
      // When the reader finishes loading the image
      const imageDataURL = event.target.result; // Get the data URL of the image
      // Update the profile image with the selected image data
      setProfileImage(imageDataURL);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleEditClick = (index) => {
    const updatedIsEditing = [...isEditing];
    //  const updatedUser = { ...user, key: value };
    
    updatedIsEditing[index] = !updatedIsEditing[index];
    setIsEditing(updatedIsEditing);
  };

  const handleConfirmClick = (index, key, value) => {
    const updatedUser={...user};
    updatedUser[key]=value;
    handleEditClick(index);
    console.log(updatedUser);

    axios.post("http://localhost:5000/user/update",updatedUser)

  };

  const handleBlur = (index) => {
    setIsEditing((prevEditing) =>
      prevEditing.map((value, idx) => (idx === index ? false : value))
    );
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
                    <div className="row d-flex justify-content-center">
                      {isEditing[6] ? (
                        <React.Fragment>
                          <img
                            className="profileImage p-0 m-2"
                            src={profileImage}
                            alt="Profile"
                          />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="mt-2"
                          />
          
                          <i
                            className=" fas fa-check"
                            style={{
                              color: "#ffffff",
                              margin: "0 0 0 400px",
                              fontSize: "20px",
                            }}
                            onClick={() => handleEditClick(6)}
                          />
                        </React.Fragment>
                      ) : (
                        <>
                          <img
                            className="profileImage p-0 m-2"
                            src={imageUrl}
                            alt="Profile"
                          />
                          <i
                            className="fa-sharp fa-regular fa-pen-to-square"
                            onClick={() => handleEditClick(6)}
                            style={{ cursor: "pointer" }}
                          />
                        </>
                      )}
                      <hr className="mt-4 mb-4 " />
                    </div>
          
                    <div className="row">
                      <div className="col-12 d-flex details pe-0">
                        <div className="d-flex" style={{ width: "100%" }}>
                          <i
                            className="fa-solid fa-user"
                            style={{ color: "#ffffff" }}
                          />
                          {isEditing[0] ? (
                            <div className="d-flex flex-column">
                              <input
                                className="input-username ms-2 me-2"
                                type="text"
                                value={firstname}
                              onChange={(e) => setFirstname(e.target.value)}
                                onBlur={() => handleBlur(0)}
                              />
                              <input
                                className="input-username ms-2 me-2 mb-3"
                                type="text"
                                value={lastname}
                                 onChange={(e) => setLastname(e.target.value)}
                                onBlur={() => handleBlur(0)}
                              />
                            </div>
                          ) : (
                            <p className="username">
                              {firstname + " " + lastname}
                            </p>
                          )}
                        </div>
                        <div className="edit" onClick={() => {handleEditClick(0)
                      handleEditClick(0)}}>
                          {isEditing[0] ? (
                            <i
                              className="fas fa-check"
                              style={{ color: "#ffffff" }}
                              onClick={()=>{
                                handleConfirmClick(0,"firstname",firstname)
                                handleConfirmClick(0,"lastname",lastname)
                              }}
                            />
                          ) : (
                            <i
                              className="fas fa-pencil-alt"
                              style={{ color: "#ffffff" }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex details pe-0">
                        <div className="d-flex " style={{ width: "100%" }}>
                          <i
                            className="fa-solid fa-cake-candles"
                            style={{ color: "#ffffff" }}
                          />
                          {isEditing[1] ? (
                            <input
                              className="input-date ms-2 me-2"
                              style={{ fontSize: "14px" }}
                              type="date"
                              value={birthDate}
                              onChange={(e) => setBirthDate(e.target.value)}
                              onBlur={() => handleBlur(1)}
                            />
                          ) : (
                            <div className="birthday">
                              <p
                                className={`date ${birthDate ? "mb-0" : "mt-4"}`}
                              >
                                {birthDate}
                              </p>
                              <p className="birth mb-3">Date Of Birth</p>
                            </div>
                          )}
                        </div>
                        <div
                          className="edit"
                          onClick={() => handleConfirmClick(1)}
                        >
                          {isEditing[1] ? (
                            <i
                              className="fas fa-check"
                              style={{ color: "#ffffff", top: "10%" }}
                            />
                          ) : (
                            <i
                              className={`fas fa-pencil-alt ${
                                birthDate ? "" : "mt-3"
                              }`}
                              style={{ color: "#ffffff" }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex details pe-0">
                        <div className="d-flex " style={{ width: "100%" }}>
                          <i className="fa-solid fa-map-marker-alt"></i>
          
                          {isEditing[2] ? (
                            <input
                              type="text"
                              className="input-address ms-2 me-2"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              onBlur={() => handleBlur(2)}
                            />
                          ) : (
                            <p className="address">{address}</p>
                          )}
                        </div>
                        <div
                          className="edit"
                          onClick={() => handleConfirmClick(2)}
                        >
                          {isEditing[2] ? (
                            <i
                              className="fas fa-check"
                              style={{ color: "#ffffff" }}
                            />
                          ) : (
                            <i
                              className="fa-solid fa-pencil"
                              style={{ color: "#ffffff" }}
                            />
                          )}
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
                            {isEditing[3] ? (
                              <input
                                type="text"
                                className="col-8 input-email ms-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => handleBlur(3)}
                              />
                            ) : (
                              <span
                                className="col-10"
                                style={{ wordBreak: "break-all" }}
                              >
                                {email}
                              </span>
                            )}
                            <span
                              className="col-2 p-0 edit d-flex justify-content-end"
                              onClick={() => handleConfirmClick(3)}
                            >
                              {isEditing[3] ? "Done" : "Update Email"}
                            </span>
                          </div>
                        </li>
                        <li>
                          <form method="POST">
                            <div className="row">
                              {isEditing[4] ? (
                                <React.Fragment>
                                  <label className="col-3">Actual Password</label>
                                  <input
                                    type="password"
                                    name="ActualPassword"
                                    className="col-9"
                                    onChange={(e) => setPassword(e.target.value)}
                                  />
                                  <label className="col-3">New Password</label>
                                  <input
                                    type="password"
                                    name="password"
                                    className="col-9"
                                    onChange={(e) => setPassword(e.target.value)}
                                  />
                                  <label className="col-3">
                                    Confirm New Password
                                  </label>
                                  <input
                                    type="password"
                                    className="col-9"
                                    onChange={(e) => setPassword(e.target.value)}
                                  />
                                </React.Fragment>
                              ) : (
                                <span
                                  className="col-10"
                                  style={{ wordBreak: "break-all" }}
                                >
                                  Password : {password}
                                </span>
                              )}
          
                              {isEditing[4] ? (
                                <p
                                  className="done-account edit p-0"
                                  onClick={() => handleConfirmClick(4)}
                                >
                                  Done{" "}
                                </p>
                              ) : (
                                <span
                                  className="col-2 p-0 edit d-flex justify-content-end"
                                  onClick={() => handleConfirmClick(4)}
                                >
                                  Update Password
                                </span>
                              )}
                            </div>
                          </form>
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
          
                              <span>
                                {isEditing[5] ? (
                                  <input
                                    type="text"
                                    value={numAccount}
                                    onChange={(e) =>
                                      setNumAccount(e.target.value)
                                    }
                                    onBlur={() => handleBlur(5)}
                                  />
                                ) : (
                                  <span>{numAccount}</span>
                                )}
                              </span>
                            </div>
                            <div
                              className="col-3 p-0 edit d-flex flex-column align-items-end justify-content-end"
                              onClick={() => handleConfirmClick(5)}
                            >
                              {isEditing[5] ? (
                                "Done"
                              ) : (
                                <div> Manage payment info</div>
                              )}
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
                              <NavLink
                                to="/offers"
                                style={{
                                  textDecoration: "none",
                                  color: "#D2DAEF ",
                                }}
                              >
                                Change Plan
                              </NavLink>
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
                <LittleSwiper />
              </div>
            </div>
        
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profil;
