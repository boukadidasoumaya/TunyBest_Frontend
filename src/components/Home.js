import React from "react";
import NavBar from "./NavBar";
import SwiperHome from "./Swiper-home";
import slides from "./mock.json";
import LittleSwiper from "./LittleSwiper";

const Home = () => {
  return (
    <>
      <NavBar />
      <SwiperHome slides={slides} />
      <LittleSwiper />
    </>
  );
};
export default Home;
