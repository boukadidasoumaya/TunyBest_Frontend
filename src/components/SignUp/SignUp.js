import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data' // Set the content type for the FormData
    }
  };
  const CloseButton = ({ closeToast }) => (
    <i
      className="fa-sharp fa-solid fa-xmark"
      onClick={closeToast}
      style={{ color: "white", fontSize: "1.2rem" }}
    ></i>
  );

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    image: null,
    birthdate: "",
  });
  const [errors, setErrors] = useState({});

  const handleShowButtonClick = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    console.log(files[0]);
    setFormData({ ...formData, [name]: files[0] });
  };

  // const validateForm = () => {
  //   let newErrors = {};
  //   let isValid = true;

  //   Check for empty fields
  //   for (const key in formData) {
  //     if (key === "image" || key === "birthdate") {
  //       continue;
  //     }
  //     if (formData[key].trim() === "") {
  //       newErrors[key] = `${key} is required`;
  //       isValid = false;
  //     }
  //   }

  //   Check email validity
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(formData.email)) {
  //     newErrors.email = "Invalid email address";
  //     isValid = false;
  //   }

  //   setErrors(newErrors);
  //   return isValid;
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
    // if (validateForm()) {
    // Form data is valid, perform form submission or other actions
    axios
      .post("http://localhost:5000/register",formData,config)
      .then((res) =>{
        console.log(res.data);
        console.log("Form data:", formData);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          image: "",
          birthdate: "",
        });
        setErrors({});
        toast.dismiss();
        navigate("/login");
      })
      .catch((err) => {
        let newErrors = {};
        console.log(err);
        const error = err.response;
        console.log(error);
        console.log(error.status);
        if (error.status === 400) {
          error.data.forEach((err) => {
            newErrors[err.context.label] = err.message;
          });
          setErrors(newErrors);
        } else {
          console.log(error.data);
          setErrors({});
          toast.error(error.data);
        }
      });
    // }
  };

  return (
    <div className="sign-up d-flex flex-column align-items-center">
      <div className="logo ">
        <img src={require("../../assets/logo.png")} alt="" />
      </div>
      <div className="content">
        <div className="texte">Sign Up</div>
        <form onSubmit={handleSubmit} >
          <div className="field">
            <input
              type="text"
              className={`input ${errors.firstname ? "error" : ""}`}
              placeholder="Enter your firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
            />
            <span className="span">
              <i className="fa-solid fa-user"></i>
            </span>
            <input
              type="text"
              className={`input p-3 ${errors.lastname ? "error" : ""}`}
              placeholder="Enter your lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <div className="col p-1 pt-0 pb-0">
              {errors.firstname && (
                <div className="error-text m-4 mt-2 mb-2">
                  {errors.firstname.charAt(0).toUpperCase() +
                    errors.firstname.slice(1).toLowerCase()}
                </div>
              )}
            </div>
            <div className="col p-1">
              {errors.lastname && (
                <div className="error-text m-4 mt-2 mb-2">
                  {errors.lastname.charAt(0).toUpperCase() +
                    errors.lastname.slice(1).toLowerCase()}
                </div>
              )}
            </div>
          </div>
          <div className="field">
            <input
              type="text"
              className={`input ${errors.email ? "error" : ""}`}
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span className="span">
              <i className="fa-solid fa-envelope"></i>
            </span>
          </div>
          {errors.email && (
            <div className="error-text m-4 mt-2 mb-1">
              {errors.email.charAt(0).toUpperCase() +
                errors.email.slice(1).toLowerCase()}
            </div>
          )}
          <div className="field">
            <input
              type={`${showPassword ? "text" : "password"}`}
              className={`input ${errors.password ? "error" : ""}`}
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span className="span">
              <i className="fa-solid fa-lock"></i>
            </span>
            <span id="show-pwd" onClick={handleShowButtonClick}>
              <i
                className={`fa-solid ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                }`}
              ></i>
            </span>
          </div>
          {errors.password && (
            <div className="error-text m-4 mt-2 mb-3">
              {errors.password.charAt(0).toUpperCase() +
                errors.password.slice(1).toLowerCase()}
            </div>
          )}
          <div className="field d-flex justify-content-evenly ">
            <input
              type="file"
              className="file mt-1"
              placeholder="Enter your photo"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
            <span className="span">
              <i className="fa-solid fa-camera"></i>
            </span>
          </div>
          <div className="field d-flex justify-content-between ">
            <input
              type="date"
              className="date form-select-sm"
              value={formData.birthdate}
              name="birthdate"
              onChange={handleInputChange}
            />
            <span className="span">
              <i className="fa-sharp fa-solid fa-calendar-days"></i>
            </span>
          </div>

          <div className="d-flex flex-column align-items-center">
            <button className="button">
              Sign up
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </div>
          <div className="signing-in">
            Already a member? <NavLink to="/login">Sign in</NavLink>
          </div>
        </form>
      </div>
      <ToastContainer
        autoClose="4000"
        theme="colored"
        closeButton={CloseButton}
      />
    </div>
  );
};

export default SignUp;
