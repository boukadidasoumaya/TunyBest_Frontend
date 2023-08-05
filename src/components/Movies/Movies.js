import React, { useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import SwiperHome from "../SwiperHome/Swiper-home";
import slides from "../mock.json";
import LittleSwiper from "../LittleSwiper/LittleSwiper";
import Test1 from "../Test1";
import Footer from "../Footer/Footer";
import SelectOptions from "../SelectOptions/SelectOptions";
import "./Movies.css"
const Movies = () => {
  const options=["adventure","sci-fi","horror","romantic","drama","documentaire","anime"]
  return (
    <div className="movies">
      <NavBar />
    
<SwiperHome slides={slides} inHome={false}/>
    <div className="select-options">  
<SelectOptions options={options} />      </div>
        
      <LittleSwiper />
      <Footer/>
    </div>
  );
};

export default Movies;
