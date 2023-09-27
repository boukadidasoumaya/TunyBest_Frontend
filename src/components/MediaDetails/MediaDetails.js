import React, {useContext, useEffect, useState} from "react";
import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";
import "./MediaDetails.css";
import EpisodesSection from "../EpisodesSection/EpisodesSection";
import CastSection from "../CastSection/CastSection";
import MediaInfos from "../MediaInfos/MediaInfos";
import MediaStatistics from "../MediaStatistics/MediaStatistics";
import CommentSection from "../CommentSection/CommentSection";
import SimilarSection from "../SimilarSection/SimilarSection";
import Modal from "react-modal";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import {useParams} from "react-router-dom";
import axios from "axios";
import {authContext} from "../../helpers/authContext";

Chart.register(CategoryScale);
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "transparent",
        color: "white",
        border: "none",
    },
    overlay: {
        backgroundColor: "rgba(15, 19, 30, 0.5)",
    },
};
Modal.setAppElement("#root");

const MediaDetails = ({mediaType}) => {
    const [media, setMedia] = useState(null);
    const {id} = useParams();
    const token = localStorage.getItem("token");
    const [yourRating, setYourRating] = useState(0);
    const {user} = useContext(authContext);
    const [rating, setRating] = useState(null);
    const [data, setData] = useState([]);
    const [isFromMyList, setIsFromMyList] = useState(null);


    useEffect(() => {
        getPercentage();
        axios.get(`http://localhost:5000/${mediaType}/${id}/${user?.id}`)
            .then((response) => {
                console.log("data media", response.data);
                setMedia(response.data);
                setRating(response.data.rating);
                setIsFromMyList(response.data.isFromMyList?.id);
            }).catch((err) => {
            console.log(err);
        })

    }, [id, mediaType, user]);
const getPercentage = () => {
    axios.get(`http://localhost:5000/rating/getPercentages/${id}/${mediaType}`)
        .then((response) => {
            setData(response.data);
        }).catch((err) => {
        console.log(err);
    })
}

    const [modalIsOpen, setModalOpen] = React.useState(false);

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    const handleRating = () => {
        closeModal();
        axios.post(`http://localhost:5000/rating/handleRating`, {
            rating: yourRating,
            mediaId: media?.id,
            mediaType: mediaType,
            userId: user?.id,
        }).then((response) => {
            console.log(response.data);
            setRating(response.data.rating)
            getPercentage();
        }).catch((err) => {
            console.log(err);
        })
    }

    const totalStars = 10; // Total number of stars

    const handleStarClick = (rating) => {
        setYourRating(rating);
    };
    const [chartData, setChartData] = useState();
useEffect(() => {
setChartData({
    labels: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], // Numerical values representing the data points on the X-axis
    datasets: [
        {
            data: data, // Numerical values representing the data points on the Y-axis
            backgroundColor: "rgba(255,255,255,1)",
            borderColor: "rgba(255,255,255,1)",
            borderWidth: 1,
            borderRadius: 10,
        },
    ],
})
},[data])

    const handleMyList = () => {
    if(isFromMyList){
        axios.post(`http://localhost:5000/user/mylist/delete/${isFromMyList}`).then((response) => {
            console.log(response);
            setIsFromMyList(null);

        }).catch((error) => {
            console.log(error);
        });
    } else {
        axios.post(`http://localhost:5000/user/mylist/add`, {
            userId: user?.id,
            mediaType: mediaType,
            mediaId: media?.id,
        }).then((response) => {
            console.log(response.data);
            setIsFromMyList(response.data.id);

        }).catch((error) => {
            console.log(error);
        });
    }

    };
    return (
        <>
            <NavBar/>
            <div className="media-details">
                { media && (<div className="main-header"
                                 style={{
                    background: ` linear-gradient(to top, rgba(15, 19, 30, 1), rgba(15, 19, 30, 0)),
    linear-gradient(to right, rgba(15, 19, 30, 0), rgba(15, 19, 30, 0.3), rgba(15, 19, 30, 0)),
    url(${require("../../assets/bigImages/" + media?.bigimage)})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                >
                    <label className="play-button">
                        <input type="checkbox"/>
                        <svg
                            viewBox="0 0 384 512"
                            height="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            className="play"
                        >
                            <path
                                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                        </svg>
                        <svg
                            viewBox="0 0 320 512"
                            height="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            className="pause"
                        >
                            <path
                                d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
                        </svg>
                    </label>
                    <div className="header-content">


                        <h1 className="media-title ">{media?.title}</h1>
                        <div className="container rating">
                            <div className="row">
                                {rating && (<div
                                    className="col-lg-4 col-md-4 col-sm-4 our-rating d-flex flex-column align-items-center align-items-lg-start">
                                    <div className="label">Our Rating</div>
                                    <div className="icon d-flex justify-content-center align-items-start">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <span>{rating}/10</span>
                                    </div>
                                </div>)}
                                {token && (<>
                                        <div
                                            className="col-lg-4 col-md-4 col-sm-4 your-rating d-flex flex-column align-items-center align-items-lg-start">
                                            <div className="label">Your rating</div>
                                            <div className="icon d-flex justify-content-center align-items-start">
                                                <i
                                                    onClick={openModal}
                                                    className="fa-sharp fa-regular fa-star"
                                                ></i>
                                                <span>Rate</span>
                                            </div>
                                        </div>
                                        <div
                                            className="col-lg-3 col-md-4 col-sm-4 add-list d-flex flex-column align-items-center align-items-lg-start">
                                            <button className="Btn d-flex justify-content-start align-items-center" onClick={handleMyList}>
                                                {isFromMyList ? (
                                                    <>
                                                        <div className="sign">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="-3 0 30 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="3"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <line x1="18" y1="6" x2="6" y2="18"/>
                                                                <line x1="6" y1="6" x2="18" y2="18"/>
                                                            </svg>
                                                        </div>
                                                        <div className="text">Remove from list</div>
                                                    </>
                                                    ) : (
                                                    <>
                                                        <div className="sign"> + </div>
                                                        <div className="text">Add list</div>
                                                    </>
                                                    )}

                                            </button>
                                        </div>
                                    </>
                                    )}
                            </div>
                        </div>
                        <div className="date-seasons">
                            <span className="date">{media?.year}</span>
                            {mediaType === "series" && (<span
                                className="num-seasons">{media?.nbseason} season{media?.nbseason > 1 && (<>s</>)}</span>)}
                        </div>

                        <div className="genre">
                            Genres: {media?.categories.map((category, index) => (
                            <span key={index}>
                                {category}
                                {index < media.categories.length - 1 && ", "}
                            </span>
                        ))}
                        </div>
                        <div className="synopsis">
                            <div className="custom-scrollbar">
                                <p className="clamp-lines">
                                    {media?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>)}
                <div className="container main-content mt-5">
                    <div className="row  ">
                        <div className="content col-12">
                            {mediaType === "series" && (<EpisodesSection media={media}/>)}
                            <div className="mt-5">
                                <CastSection media={media}/>
                            </div>
                            <div className="container">
                                <div className="row mt-5">
                                    <div className="col-lg-5 col-md-12 col-sm-12 infos">
                                        <MediaInfos media={media}/>
                                    </div>
                                    {chartData && (
                                        <div className="col-lg-7 mt-sm-5 mt-md-5 mt-lg-0 col-md-12 col-sm-12 statistics">
                                            <MediaStatistics chartData={chartData} media={media} />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <hr className="custom-hr"/>
                            <div className="container">
                                <div className="row mt-5 d-flex justify-content-center ">
                                    <div className="col-lg-9 col-md-12 col-sm-12 comment" >
                                        <CommentSection media={media} mediaType={mediaType} />
                                    </div>
                                    <div className="col-lg-3 mt-sm-5 mt-md-5 mt-lg-0 col-md-8 col-sm-9 similar">
                                        <SimilarSection mediaId={media?.id} mediaType={mediaType}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div
                        className="modal-content p-3 m-3 d-flex flex-column align-items-center justify-content-center ">
                        <div className="star">
                            <span>?</span>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <h4 className="">Rate this</h4>

                        <div>
                            <div className="rating-container">
                                {[...Array(totalStars)].map((_, index) => {
                                    const rating = totalStars - index;
                                    return (
                                        <React.Fragment key={rating}>
                                            <input
                                                type="radio"
                                                id={`star${rating}`}
                                                name="rate"
                                                value={rating}
                                                onClick={() => handleStarClick(rating)}
                                            />
                                            <label
                                                htmlFor={`star${rating}`}
                                                title={`Rating: ${rating}`}
                                            ></label>
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </div>
                        <button
                            className="d-flex flex-column align-items-center"
                            onClick={handleRating}
                        >
                            <span>Rate</span>
                        </button>
                    </div>
                </Modal>
            </div>
            <Footer/>
        </>
    );
};

export default MediaDetails;
