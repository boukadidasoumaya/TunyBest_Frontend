import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import SwiperHome from "../SwiperHome/Swiper-home";
import LittleSwiper from "../LittleSwiper/LittleSwiperHome";
import LearnMoreButton from "../LearnMoreButton/LearnMoreButton";
import Footer from "../Footer/Footer";
import "./Home.css";
import axios from "axios";
import {useLocation} from "react-router-dom";


const Home = () => {
  const [slides, setSlides] = useState([]);
const [popular,setPopular]=useState([]);
const [trending,setTrending]=useState([]);
const [newmovies,setNewMovies]=useState([]);
const [newseries,setNewSeries]=useState([]);
const [anime,setAnime]=useState([]);
const [kdrama,setKdrama]=useState([]);



  useEffect(() => {
    axios.get("http://localhost:5000").then((response) => {
      setSlides(response.data);
    });
    axios.get("http://localhost:5000/trending").then((response) => {
      setTrending(response.data);
    });
    axios.get("http://localhost:5000/popular").then((response) => {
      setPopular(response.data);
    });
    axios.get("http://localhost:5000/newmovies").then((response) => {
      setNewMovies(response.data);
    });
    axios.get("http://localhost:5000/newseries").then((response) => {
      setNewSeries(response.data);
    });
    axios.get("http://localhost:5000/anime").then((response) => {
      setAnime(response.data);
    });
    axios.get("http://localhost:5000/k-drama").then((response) => {
      setKdrama(response.data);
    });


  }, []);


  const location = useLocation();
  const { isSearchBoxActive } = location.state || {};

  return (
    <div className="home">
      <NavBar searched = {""} searchBoxActive={isSearchBoxActive}/>
      <SwiperHome slides={slides} inHome={true}  />
      <div className="container">
        <div className="container">
          <div className="d-flex ps-2">
            <h3>Trending</h3>

          <LearnMoreButton/>
          </div>

          <div className="row">
            <div className="col-12">
              <LittleSwiper littleslides={trending} />
            </div>
          </div>
          <hr className="mt-4 mb-4" />
        </div>
        <div className="container">
        <div className="d-flex ps-2">
            <h3>Popular</h3>
          
            <LearnMoreButton/>

        </div>

          <div className="row">
            <div className="col-12">
              <LittleSwiper littleslides={popular} />
            </div>
          </div>
          <hr className="mt-4 mb-4" />
        </div>
        <div className="container">
          <div className="d-flex ps-2">
            <h3>New Movies</h3>

            <LearnMoreButton/>

          </div>

          <div className="row">
            <div className="col-12">
              <LittleSwiper littleslides={newmovies} />
            </div>
          </div>
          <hr className="mt-4 mb-4" />
        </div>
        <div className="container">
          <div className="d-flex ps-2">
            <h3>New Series</h3>

            <LearnMoreButton/>

          </div>
          <div className="row">
            <div className="col-12">
              <LittleSwiper littleslides={newseries} />
            </div>
          </div>
          <hr className="mt-4 mb-4" />
        </div>
        <div className="container">
          <div className="d-flex ps-2">
            <h3>Anime</h3>
            <LearnMoreButton/>

          </div>
          <div className="row">
            <div className="col-12">
              <LittleSwiper littleslides={anime} />
            </div>
          </div>
          <hr className="mt-4 mb-4" />
        </div>
        <div className="container">
          <div className="d-flex ps-2">
            <h3>K-Drama</h3>
            <LearnMoreButton/>

          </div>

          <div className="row mb-5">
            <div className="col-12">
              <LittleSwiper littleslides={kdrama} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
