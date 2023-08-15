import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    image: null,
    date: "",
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
    setFormData({ ...formData, [name]: files[0] });
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Check for empty fields
    for (const key in formData) {
      if (key === "image" && key === "date") continue;

      if (formData[key].trim() === "") {
        newErrors[key] = `${key} is required`;
        isValid = false;
      }
    }

    // Check email validity
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form data is valid, perform form submission or other actions
      console.log("Form data:", formData);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        image: null,

      });
      setErrors({});
    }
  };

  return (
    <div className="sign-up d-flex flex-column align-items-center">
      <div className="logo ">
        <img src={require("../../assets/logo.png")} alt="" />
      </div>
      <div className="content">
        <div className="texte">Sign Up</div>
        <form onSubmit={handleSubmit}>
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
                  {errors.firstname}
                </div>
              )}
            </div>
            <div className="col p-1">
              {errors.lastname && (
                <div className="error-text m-4 mt-2 mb-2">
                  {errors.lastname}
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
            <div className="error-text m-4 mt-2 mb-3">{errors.email}</div>
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
            <div className="error-text m-4 mt-2 mb-3">{errors.password}</div>
          )}
          <div className="field d-flex justify-content-evenly ">
            <input
              type="file"
              className="file"
              placeholder="Enter your photo"
              name="image"
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
                name="date"
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
            Already a member? <a href="#"> Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
