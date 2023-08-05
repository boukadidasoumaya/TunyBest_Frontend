import React from "react";
import NavBar from "../NavBar/NavBar";
import SwiperHome from "../SwiperHome/Swiper-home";
import slides from "../mock.json";
import LittleSwiper from "../LittleSwiper/LittleSwiper";
import Test1 from "../Test1";
import Footer from "../Footer/Footer";
import SelectOptions from "../SelectOptions/SelectOptions";
import "./Home.css"
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <SwiperHome slides={slides} />
      <SelectOptions />
      <LittleSwiper />
      <Test1 />
    </div>
  );
};
export default Home;
