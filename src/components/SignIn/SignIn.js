import React, {useState, useContext} from "react";
import "./SignIn.css";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {authContext} from "../../helpers/authContext";
import Footer from "../Footer/Footer";
const SignIn = () => {
    const { setUser } = useContext(authContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleShowButtonClick = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const CloseButton = ({ closeToast }) => (
        <i
            className="fa-sharp fa-solid fa-xmark"
            onClick={closeToast}
            style={{ color: "white", fontSize: "1.2rem" }}
        ></i>
    );
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        // Check for empty fields
        for (const key in formData) {
            if (formData[key].trim() === "") {
                newErrors[key] = `${key} is required`;
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("Form data:", formData);
            setFormData({
                email: "",
                password: "",
            });
            setErrors({});
            await axios.post("http://localhost:5000/login", formData,
                {
                    withCredentials: true,
                }).then((res) => {
                    console.log(res);
                    console.log(res.data);
                    navigate('/');

                    localStorage.removeItem('token')
                    localStorage.setItem('token', res.data.token);
                    setUser(res.data.user);
                }
            ).catch((err) => {
                const error = err.response;
                console.log(err);
                if (error.status === 400) {
                    console.log('error', error);
                    toast.error("Invalid email or password");
                } else {
                    console.log('error1', error);
                    setErrors({});
                    toast.error(error.data);
                }
            });
        }
    };

    return (
        <div className="sign-in-container">
            <div className="sign-in d-flex flex-column align-items-center">
                <div className="logo ">
                    <img src={require("../../assets/logo.png")} alt=""/>
                </div>
                <div className="content mb-3">
                    <div className="texte">Login</div>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <input
                                type="text"
                                value={formData.email}
                                className={`input ${errors.email ? "error" : ""}`}
                                placeholder="Enter your email"
                                name="email"
                                onChange={handleInputChange}
                            />
                            <span className="span">
            <i className="fa-solid fa-envelope"></i>
            </span>
                        </div>
                        {errors.email && (
                            <div className="error-text m-4 mt-2 mb-2">
                                {errors.email}
                            </div>
                        )}
                        <div className="field">
                            <input
                                type={`${showPassword ? "text" : "password"}`}
                                className={`input ${errors.password ? "error" : ""}`}
                                placeholder="Enter your password"
                                value={formData.password}
                                name="password"
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
                            <div className="error-text m-4 mt-2 mb-2">
                                {errors.password}
                            </div>
                        )}
                        <div className="forgot-pass">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <button className="button">
                                Sign in
                                <div className="arrow-wrapper">
                                    <div className="arrow"></div>
                                </div>
                            </button>
                        </div>
                        <div className="signing-up">
                            Not a member?
                            <NavLink to="/signup">Sign up now</NavLink>
                        </div>
                    </form>
                </div>
                <ToastContainer
                    autoClose="4000"
                    theme="colored"
                    closeButton={CloseButton}
                />
            </div>
            <Footer className="footer" />
        </div>
    );
};

export default SignIn;
