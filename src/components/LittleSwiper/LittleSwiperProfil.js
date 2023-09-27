import React, {useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LittleSwiper.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";


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
const LittleSwiper = ({ littleSlides, setLittleSlides }) => {

  const handleRemoveClick = (id) => {
    axios.post(`http://localhost:5000/user/mylist/delete/${id}`).then((response) => {
        console.log(response);
         setLittleSlides();
         closeModal();
    }).catch((error) => {
        console.log(error);
    });
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [modalIsOpen, setModalOpen] = useState(false);
  const [mediaToDelete, setMediaToDelete] = useState(0);

  function openModal(media) {
    setModalOpen(true);
    setMediaToDelete(media);
  }

  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div className="littleswiper">
      <Slider className="slider" {...settings}>
        {littleSlides &&
            littleSlides.map((slide, index) => (
            <div key={index} className="slide list">
                <NavLink to={`/details/${slide.type}/${slide.media_id}`}>
                  <img
                      src={require(`../../assets/smallImages/${slide?.littleimage}`)}
                      alt={`Item ${index}`}
                  />
                </NavLink>
                  <button className="button profil" onClick={() => openModal(slide)}>
                    <svg viewBox="0 0 448 512" className="svgIcon">
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                  </button>

            </div>
          ))}
      </Slider>


      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
      >
        <div
            className="modal-content p-3 m-3 d-flex flex-column align-items-center justify-content-center ">
          <h4 className="">Confirm</h4>
          <p className="text-center">Are you sure you want to delete this { mediaToDelete?.type === 'series' ? (<> serie </>):(<> movie </>)} from your list ?</p>
          <div className="confirm row">
            <div className="col-md-6 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center ">
              <button onClick={() => handleRemoveClick(mediaToDelete)}>
                <span>Delete</span>
              </button>
            </div>
            <div className="col-md-6 d-flex justify-content-center ">
              <button onClick={closeModal}>
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LittleSwiper;
