import React, { useState } from "react";
import "./SignIn.css";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowButtonClick = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="sign-in d-flex flex-column align-items-center">
      <div className="content">
        <div className="texte">Login</div>
        <form action="#">
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
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="d-flex flex-column align-items-center">
            <button className="button">
              Sign in
              <div class="arrow-wrapper">
                <div class="arrow"></div>
              </div>
            </button>
          </div>
          <div className="signing-up">
            Not a member?
            <a href="#"> Sign up now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
