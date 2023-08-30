import React, { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import LittleSwiper from "../LittleSwiper/LittleSwiperProfil";
import "./Profil.css";
import { NavLink } from "react-router-dom";
import { authContext } from "../../helpers/authContext";
import axios from "axios";

const Profil = () => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data", // Set the content type for the FormData
    },
  };
  const { user, setUser } = useContext(authContext);

  const [profileImage, setProfileImage] = useState(""); // State for profile image base de donne
  const [imageUrl, setImageUrl] = useState(require("../../assets/avatar.png")); //yafficheha feha path kemel

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); //eli yiteqra min aand el reader

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [numAccount, setNumAccount] = useState(" **** **** **** 2061");
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    ActualPassword: "",
  });

  useEffect(() => {
    setProfileImage(user ? user.image : "");

    setImageUrl(
      profileImage
        ? `http://localhost:5000/uploads/${profileImage}`
        : require("../../assets/avatar.png")
    );

    setEmail(user?.email ?? "");
    setFirstname(user?.firstname ?? "");
    setLastname(user?.lastname ?? "");
    const date = user?.birthdate ? formatDate(user.birthdate) : "";
    setBirthDate(date);
    setAddress(user?.country ?? "");
  }, [profileImage, user, imageUrl]);

  const [isEditing, setIsEditing] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    event.target.value = null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    const updatedUser = { ...user };
    updatedUser["image"] = file;
    setUser(updatedUser);

    axios.post("http://localhost:5000/user/update", updatedUser, config);
  };

  const handleEditClick = (index) => {
    setIsEditing((prevIsEditing) => {
      const updatedIsEditing = [...prevIsEditing];
      updatedIsEditing[index] = !updatedIsEditing[index];
      return updatedIsEditing;
    });
  };

  const handleConfirmClick = (index, key, value) => {
    const updatedUser = { ...user };

    if (index === 6) {
      //image
    } else if (index === 3) {
      //email
      if (isEditing[3]) {
        if (handleEmail(key, value)) {
          handleEditClick(index);
          return;
        }
      } else {
        handleEditClick(index);
        console.log("hello");
        return;
      }
    } else if (index === 4) {
      handleEditClick(index);
    } else if (index === 0) {
      if (isEditing[0]) {
        
        
        if ( handleName(key, value)) {
          handleEditClick(index);
          return;
        }
      
        
      } else {
        handleEditClick(index);
        console.log("hello");
        return;
      }
    } else {
      updatedUser[key] = value;
      handleEditClick(index);
    }
  };
  const handleName = (key, value) => {
    const updatedUser = { ...user };
    updatedUser[key] = value;
    
  
    if (
      updatedUser["firstname"] === user["firstname"] &&
      updatedUser["lastname"] === user["lastname"]
    ) {
      setUser(updatedUser);
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstname:"",
        lastname:"",
      }));
      return 1;
    }
  
    axios
      .post("http://localhost:5000/user/update", updatedUser, config)
      .then((res) => {
        console.log(res.data);
        setUser(updatedUser);
        setErrors((prevErrors) => ({
          ...prevErrors,
          firstname:"",
          lastname:"",
        }));
        return 1;
      })
      .catch((err) => {
        let newErrors = {};
        console.log(err);
        const error = err.response;
        console.log(error);
        if (error.status === 500) {
           
        
          if (key === "firstname") {
            setErrors((prevErrors) => ({
              ...prevErrors,
              firstname:error.data.details[0].message,
      
            }));
            return 0;
          } else if (key === "lastname") {
            setErrors((prevErrors) => ({
              ...prevErrors,
              lastname:error.data.details[0].message,
            }));
            return 0;
          }
          
        
        }
      });
  };
  
  const handleNewConfirmPassword = (newPassword, confirmPassword) => {
    if (newPassword === confirmPassword) {
      setNewPassword(newPassword);
      setConfirmPassword(confirmPassword);
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
      return 1;
    } else {
      console.log("Please verify your new password");
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Please verify your new password",
      }));
      console.log(errors);
      return 0;
    }
  };
  const handlePassword = (newPassword, confirmPassword) => {
    if (handleNewConfirmPassword(newPassword, confirmPassword)) {
      const updatedUser = { ...user };
      updatedUser["password"] = newPassword;
      updatedUser["ActualPassword"] = password;
      console.log(newPassword);
      console.log(updatedUser);
      console.log(user);
      axios
        .post("http://localhost:5000/user/update/password", updatedUser)
        .then((res) => {
          setErrors((prevErrors) => ({
            ...prevErrors,
            ActualPassword: "",
          }));
          setUser(updatedUser);
          return 1;
        })
        .catch((err) => {
          console.log(err);
          const error = err;

          setErrors((prevErrors) => ({
            ...prevErrors,
            ActualPassword: "Wrong Password",
          }));

          return 0;
        });
    }
    return 1;
  };
  const handleEmail = (key, value) => {
    const updatedUser = { ...user };
    updatedUser[key] = value;
    if (updatedUser["email"] === user["email"]) {
      setUser(updatedUser);
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
      return 1;
    }
    axios
      .post("http://localhost:5000/user/update/email", updatedUser)
      .then((res) => {
        console.log(res.data);
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
        setUser(updatedUser);
        return 1;
      })
      .catch((err) => {
        let newErrors = {};
        console.log(err);
        const error = err.response;
        console.log("bin");
        console.log(error);
        if (error.status === 500) {
          if (Array.isArray(error.data)) {
            newErrors["email"] = error.data[0].message;
            console.log(newErrors);
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: newErrors["email"],
            }));

            return 0;
          } else {
            newErrors["email"] = error.data;
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: newErrors["email"],
            }));

            return 0;
          }
        }
      });
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
                    <img
                      className="profileImage p-0 m-2"
                      src={previewImage || imageUrl}
                      alt="Profile"
                    />

                    <input
                      id="file"
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={handleImageUpload}
                      className="mt-2"
                      style={{ display: "none" }}
                    />
                    <div className="d-flex justify-content-end p-0">
                      {isEditing[6] && (
                        <i
                          className=" fas fa-check p-0 mt-1"
                          style={{
                            color: "#ffffff",
                            textAlign: "end",
                            fontSize: "20px",
                          }}
                          onClick={() => {
                            handleEditClick(6);
                          }}
                        />
                      )}
                      <label htmlFor="file">
                        <i
                          className="fa-sharp fa-regular fa-pen-to-square p-0"
                          onClick={() => handleEditClick(6)}
                          style={{ cursor: "pointer" }}
                        />
                      </label>
                    </div>
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
                          <React.Fragment>
                            {" "}
                            <div
                              className="d-flex flex-column"
                              style={{ width: "100%" }}
                            >
                              <input
                                className="input-username ms-2 me-2"
                                type="text"
                                value={firstname}
                                onChange={(e) => {
                                  setFirstname(e.target.value);
                                }}
                              />
                              {errors.firstname && (
                                <div
                                  className="error-text mb-1"
                                  style={{ color: "red" }}
                                >
                                  {errors["firstname"]}
                                </div>
                              )}
                              <input
                                className="input-username ms-2 me-2 mb-3"
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                              />
                              {errors.lastname && (
                                <div
                                  className="error-text mb-1 "
                                  style={{ color: "red" }}
                                >
                                  {errors["lastname"]}
                                </div>
                              )}
                            </div>
                          </React.Fragment>
                        ) : (
                          <p className="username">
                            {firstname + " " + lastname}
                          </p>
                        )}
                      </div>
                      <div className="edit" >
                        {isEditing[0] ? (
                          <React.Fragment>
                          
                              <i
                                className="fas fa-check ms-1"
                                style={{ color: "#ffffff" }}
                                onClick={() => {
                                  handleConfirmClick(0, "firstname", firstname);

                                }}
                              />
                          
                            <i
                              className="fas fa-check ms-1"
                              style={{ color: "#ffffff" }}
                              onClick={() => {
                                handleConfirmClick(0, "lastname", lastname);
                              }}
                            />
                          
                          </React.Fragment>
                        ) : (
                          <i
                            className="fas fa-pencil-alt"
                            style={{ color: "#ffffff" }}
                            onClick={() => handleEditClick(0)}
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
                        onClick={() =>
                          handleConfirmClick(1, "birthdate", birthDate)
                        }
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
                          />
                        ) : (
                          <p className="address">{address}</p>
                        )}
                      </div>
                      <div
                        className="edit"
                        onClick={() =>
                          handleConfirmClick(2, "country", address)
                        }
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
                            <React.Fragment>
                              <input
                                type="text"
                                className="col-8 input-email ms-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </React.Fragment>
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
                            onClick={() =>
                              handleConfirmClick(3, "email", email)
                            }
                          >
                            {isEditing[3] ? "Done" : "Update Email"}
                          </span>
                          {errors.email && (
                            <div
                              className="error-text m-4 mt-2 mb-1"
                              style={{ color: "red" }}
                            >
                              {errors["email"].charAt(0).toUpperCase() +
                                errors["email"].slice(1).toLowerCase()}
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          {isEditing[4] ? (
                            <React.Fragment>
                              <label className="col-3">Actual Password</label>
                              <input
                                type="password"
                                className="col-9"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              {errors.ActualPassword && (
                                <div
                                  className="error-text m-4 mt-2 mb-1"
                                  style={{ color: "red" }}
                                >
                                  {errors["ActualPassword"]}
                                </div>
                              )}
                              <label className="col-3">New Password</label>
                              <input
                                type="password"
                                className="col-9"
                                onChange={(e) => setNewPassword(e.target.value)}
                              />
                              <label className="col-3">
                                Confirm New Password
                              </label>
                              <input
                                type="password"
                                className="col-9"
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                              />
                              {errors["password"] && (
                                <div
                                  className="error-text col-12 d-flex justify-content-end"
                                  style={{ color: "red" }}
                                >
                                  {errors["password"]}
                                </div>
                              )}
                            </React.Fragment>
                          ) : (
                            <span
                              className="col-10"
                              style={{ wordBreak: "break-all" }}
                            >
                              Password : *****
                            </span>
                          )}

                          {isEditing[4] ? (
                            <React.Fragment>
                              <p
                                className="done-account edit p-0"
                                onClick={() => {
                                  if (
                                    handlePassword(newPassword, confirmPassword)
                                  ) {
                                    handleConfirmClick(4);
                                  }
                                }}
                              >
                                Done{" "}
                              </p>
                            </React.Fragment>
                          ) : (
                            <span
                              className="col-2 p-0 edit d-flex justify-content-end"
                              onClick={() => handleConfirmClick(4)}
                            >
                              Update Password
                            </span>
                          )}
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

                            <span>
                              {isEditing[5] ? (
                                <input
                                  type="text"
                                  value={numAccount}
                                  onChange={(e) =>
                                    setNumAccount(e.target.value)
                                  }
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
