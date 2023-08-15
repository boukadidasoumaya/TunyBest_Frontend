import React from "react";
import NavBar from "../NavBar/NavBar";
import SwiperHome from "../SwiperHome/Swiper-home";
import slides from "../mock.json";
import LittleSwiper from "../LittleSwiper/LittleSwiperHome";
import Footer from "../Footer/Footer";
import "./Home.css";
import { useParams } from "react-router-dom";
const Home = () => {

  return (
    <div className="home">
      <NavBar />
      <SwiperHome slides={slides} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <LittleSwiper />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
