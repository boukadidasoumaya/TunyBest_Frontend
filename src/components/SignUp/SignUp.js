import React, { useState } from "react";
import "./SignUp.css";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowButtonClick = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="sign-up d-flex flex-column align-items-center">
      <div className="content">
        <div className="texte">Sign Up</div>
        <form action="#">
          <div className="field">
            <input
              required
              // type="email"
              type="text"
              className="input"
              placeholder="Enter your firstname"
            />
            <span className="span">
              <i className="fa-solid fa-user"></i>
            </span>
            <input
              required
              // type="email"
              type="text"
              className="input p-3"
              placeholder="Enter your lastname"
            />
          </div>

          <div className="field">
            <input
              required
              // type="email"
              type="text"
              className="input"
              placeholder="Enter your email"
            />
            <span className="span">
              <i className="fa-solid fa-envelope"></i>
            </span>
            {/* <label className="label">Email or Phone</label> */}
          </div>
          <div className="field">
            <input
              required
              type={`${showPassword ? "text" : "password"}`}
              className="input"
              placeholder="Enter your password"
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

          <div className="field">
            <input
              type="file"
              className="file"
              placeholder="Enter your photo"
            />
            <span className="span">
              <i className="fa-solid fa-camera"></i>
            </span>
          </div>

          <div className="d-flex flex-column align-items-center">
            <button className="button">
              Sign up
              <div class="arrow-wrapper">
                <div class="arrow"></div>
              </div>
            </button>
          </div>
          <div className="signing-in">
            Already a member?
            <a href="#"> Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
