import React, {useEffect, useState} from 'react';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Search.css";
import axios from "axios";
import List from "../List/List";
import {useLocation} from "react-router-dom";
const Search = () => {
    const [media, setMedia] = useState();
    const [filteredMedia, setFilteredMedia] = useState();
    useEffect(() => {
        axios.get("http://localhost:5000/series")
            .then((series) => {
                axios.get("http://localhost:5000/movies")
                    .then((movies) => {
                        setMedia([...series.data, ...movies.data]);
                        setFilteredMedia([...series.data, ...movies.data])
                    })
                    .catch((err) => {
                        console.log("Error fetching movie data:", err);
                    })
            })
            .catch((err) => {
                console.log("Error fetching series data:", err);
            })
    }, []);
    const location = useLocation();
    const { searchedMedia, isSearchBoxActive } = location.state || {};


    useEffect(() => {
        setFilteredMedia(media)
        if (media) {
            setFilteredMedia(media.filter((m) => m.title.toLowerCase().includes(searchedMedia.toLowerCase())));
        }
        console.log("searched", searchedMedia)
        console.log("isSearchBoxActive", isSearchBoxActive)
    }, [searchedMedia]);

    return (
        <div className="search-container d-flex flex-column justify-content-between">
            <NavBar searched = {searchedMedia} searchBoxActive={isSearchBoxActive} />
            <div className="search container">
                <div className="p-1 result-msg fw-medium fs-2 ">
                    Result for: {searchedMedia || ''}
                </div>
                <hr className="hr ms-1" />
                <div className="row">
                    <div className="col-12">
                        {filteredMedia?.length > 0 ?(<List slides={filteredMedia}/>) : (<div className="text-center mt-5 fs-3" style={{color:"#4b4e56"}}>No Result Found</div>)}
                    </div>
                </div>
            </div>
            <Footer/>
            
        </div>
    );
};

export default Search;
