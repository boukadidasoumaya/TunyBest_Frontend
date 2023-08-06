import React from "react";
import NavBar from "../NavBar/NavBar";
import SwiperHome from "../SwiperHome/Swiper-home";
import slides from "../mock.json";
import LittleSwiper from "../LittleSwiper/LittleSwiper";
import Footer from "../Footer/Footer";
import "./Home.css"
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <SwiperHome slides={slides} />
      <LittleSwiper inHome={true} />
    </div>
  );
};
export default Home;
