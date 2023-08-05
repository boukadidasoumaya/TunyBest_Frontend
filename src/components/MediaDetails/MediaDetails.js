import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import "./MediaDetails.css";
import EpisodesSection from "../EpisodesSection/EpisodesSection";
import CastSection from "../CastSection/CastSection";
import MediaInfos from "../MediaInfos/MediaInfos";
import MediaStatistics from "../MediaStatistics/MediaStatistics";
import CommentSection from "../CommentSection/CommentSection";
import SimilarSection from "../SimilarSection/SimilarSection";
import Modal from "react-modal";
import NavBar from "../NavBar";
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

const MediaDetails = () => {
  const [modalIsOpen, setModalOpen] = React.useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const totalStars = 10; // Total number of stars

  const handleStarClick = (rating) => {
    console.log(`Selected rating: ${rating}`);
  };

  const [chartData, setChartData] = useState({
    labels: [10,9,8,7,6,5,4,3,2,1], // Numerical values representing the data points on the X-axis
    datasets: [
      {
        // label: 'Dataset 1',
        data: [10, 20, 15, 30, 25,60,10,10,40,50], // Numerical values representing the data points on the Y-axis
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  });

  return (
    <>
    <NavBar />
    <div className="media-details">
      <div className="main-header">
        <div className="header-content">
          <h1 className="media-title ">Peaky Blinders</h1>
          <div className="container rating">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 our-rating d-flex flex-column align-items-center align-items-lg-start">
                <div className="label">Our Rating</div>
                <div className="icon d-flex justify-content-center align-items-start">
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <span>9/10</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 your-rating d-flex flex-column align-items-center align-items-lg-start">
                <div className="label">Your rating</div>
                <div className="icon d-flex justify-content-center align-items-start">
                  <i
                    onClick={openModal}
                    className="fa-sharp fa-regular fa-star"
                  ></i>
                  <span>Rate</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 add-list d-flex flex-column align-items-center align-items-lg-start">
                <button className="Btn d-flex justify-content-start align-items-center">
                  <div className="sign">+</div>
                  <div className="text">Add list</div>
                </button>
              </div>
            </div>
          </div>
          <div className="date-seasons">
            <span className="date">2013</span>
            <span className="num-seasons">6 seasons</span>
          </div>

          <div className="genre">Genres: Tv Dramas, Crime, British</div>
          <div className="synopsis">
            <div className="custom-scrollbar">
              <p className="clamp-lines">
                Peaky Blinders is a crime drama centred on a family of mixed
                Irish Traveller and Romani origins based in Birmingham, England,
                starting in 1919, several months after the end of the First
                World War. It centres on the Peaky Blinders street gang and
                their ambitious, cunning crime boss Tommy Shelby. The gang comes
                to the attention of Major Chester Campbell, a detective chief
                inspector in the Royal Irish Constabulary sent over by Winston
                Churchill from Belfast, where he had been sent to clean up the
                city of the Irish Republican Army flying columns, the Communist
                Party of Great Britain, street gangs, and common criminals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container main-content mt-5">
        <div className="row content">
          <div className="col-12">
            <EpisodesSection />
            <CastSection />

            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 infos">
                  <MediaInfos />
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 ">
                    <MediaStatistics chartData={chartData}/>
                </div>
              </div>
            </div>
            <hr className="custom-hr"/>
            <div className="container">
              <div className="row">
                <div className="col-9 comment">
                  <CommentSection />
                </div>
                <div className="col-3 similar">
                  <SimilarSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      footer
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-content p-3 m-3 d-flex flex-column align-items-center justify-content-center ">
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
          <button  className="d-flex flex-column align-items-center" onClick={closeModal}>
            <span>Rate</span>
          </button>
        </div>
      </Modal>
    </div>
    </>
  );
};

export default MediaDetails;
