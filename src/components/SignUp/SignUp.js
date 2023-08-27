import React, {useState, useMemo} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "./SignUp.css";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";
import Select from 'react-select'
import countryList from 'react-select-country-list'

const SignUp = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = useMemo(() => countryList().getData(), []);
    const changeHandler = option => {
        setSelectedOption(option);
        setFormData({...formData, country: option.label});
    };
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            boxShadow: `inset 2px 2px 5px #838aa4,
                    inset -5px -5px 10px #5e5e5e73;`,
            background: '#dde1e7',
            height: '45px',
            borderRadius: '25px',
            padding: '0 10px',
            marginTop: '20px',
            paddingLeft: '35px',
            border: 'none',
            width:'390px',
        }),
        menu: (provided, state) => ({
            ...provided,
            marginTop: '25px',
            zIndex: '1',
            maxHeight: '212px',
            background: '#e7ebee',
        }),
        option: (provided, state) => ({
            ...provided,
            padding: '5px 25px', // Adjust the padding of the options here
            backgroundColor: state.isFocused ? 'rgb(8,14,31)' : 'transparent',
            color: state.isFocused ? '#dde1e7' : '#5e5e5e',
        }),
        menuList: (provided, state) => ({
            ...provided,
            maxHeight: '212px', // Adjust the max height of the menu here
            overflowY: 'scroll',
            scrollbarWidth: 'thin', // For Firefox
            scrollbarColor: '#5e5e5e73 #dde1e7', // For supported browsers
        }),
    }

    const navigate = useNavigate();
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data' // Set the content type for the FormData
        }
    };
    const CloseButton = ({closeToast}) => (
        <i
            className="fa-sharp fa-solid fa-xmark"
            onClick={closeToast}
            style={{color: "white", fontSize: "1.2rem"}}
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
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleFileChange = (event) => {
        const {name, files} = event.target;
        console.log(files[0]);
        setFormData({...formData, [name]: files[0]});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form data:", formData);

        axios
            .post("http://localhost:5000/register", formData, config)
            .then((res) => {
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
    };

    return (
        <div className="sign-up-container">
            <div className="sign-up d-flex flex-column align-items-center ">
                <div className="logo ">
                    <img src={require("../../assets/logo.png")} alt=""/>
                </div>
                <div className="content mb-3">
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
                        <div className="select"><Select
                            options={options}
                            value={selectedOption}
                            onChange={changeHandler}
                            placeholder="Select a Country ..."
                            styles={customStyles}

                        />
                            <span className="span ">
                  <i className="fa-sharp fa-solid fa-earth-americas"></i>
                </span></div>

                        <div className="d-flex justify-content-between ">
                            <div className="field d-flex justify-content-evenly ">
                                <label htmlFor="image" className="custom-label" style={{
                                    color: formData.image ? 'rgb(15,19,30)' : '#808080'
                                }}>
                                     {formData.image ? formData.image.name : 'Upload an Image'}
                                </label>
                                <span className="span">
                <i className="fa-solid fa-camera custom-icon"></i>
            </span>
                                <input
                                    id="image"
                                    type="file"
                                    className="file mt-1 custom-input"
                                    placeholder="Enter your photo"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />

                            </div>
                            <div className="field d-flex justify-content-end">
                                <input
                                    type="date"
                                    className="date form-select-sm"
                                    value={formData.birthdate}
                                    name="birthdate"
                                    onChange={handleInputChange}
                                    style={{
                                        color: formData.birthdate ? 'rgb(15,19,30)' : '#808080'
                                    }}
                                />
                                <span className="span">
              <i className="fa-sharp fa-solid fa-calendar-days"></i>
            </span>
                            </div>
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
                    autoClose={false}
                    theme="colored"
                    closeButton={CloseButton}
                />
            </div>
            <Footer className="footer"/>
        </div>
    );
};

export default SignUp;
