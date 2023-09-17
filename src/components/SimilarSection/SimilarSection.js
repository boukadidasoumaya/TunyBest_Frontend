import React, {useEffect, useState} from "react";
import "./SimilarSection.css";
import Slider from "react-slick";
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";

const PrevArrow = ({onClick}) => (
    <div
        className="slick-next"
        style={{transform: "rotate(270deg)", right: "47%", zIndex: 1, top: "-3%"}}
        onClick={onClick}
    />
);

const NextArrow = ({onClick}) => (
    <div
        className="slick-next"
        style={{transform: "rotate(90deg)", left: "47%", zIndex: 1, top: "101%"}}
        onClick={onClick}
    />
);

const SimilarSection = ({mediaId,mediaType}) => {
    const { id } = useParams();
    const [similar, setSimilar] = useState();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: similar?.length === 1 ? 1 : (similar?.length === 2 ? 2 : 3),
        slidesToScroll: similar?.length === 1 ? 1 : (similar?.length === 2 ? 2 : 3),
        initialSlide: 0,
        vertical: true,
        verticalSwiping: true,
        nextArrow: <NextArrow />, // Custom next arrow component
        prevArrow: <PrevArrow />, // Custom prev arrow component
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: similar?.length === 1 ? 1 : (similar?.length === 2 ? 2 : 3),
                    slidesToScroll: similar?.length === 1 ? 1 : (similar?.length === 2 ? 2 : 3),
                    infinite: true,
                    vertical: true,
                    verticalSwiping: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: similar?.length === 1 ? 1 : 2,
                    slidesToScroll: similar?.length === 1 ? 1 : 2,
                    initialSlide: 0,
                    vertical: true,
                    verticalSwiping: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: similar?.length === 1 ? 1 : 1,
                    slidesToScroll: similar?.length === 1 ? 1 : 1,
                    vertical: true,
                    verticalSwiping: true,
                },
            },
        ],
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/category/similar/${mediaType}/${mediaId}`).then((response) => {
            console.log("similar",response.data);
            setSimilar(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [mediaId,mediaType]);

    return (
        <div className="similar-section">
            <span id="sim">Similar</span>
            <hr className="custom-hr"/>
            <div className="container similar d-flex flex-column justify-content-center align-md-start">
                {similar?.length > 3 ? (
                    <Slider className="slider" {...settings}>
                        {similar?.map((media, index) => (
                            <React.Fragment key={media.id}>
                                <NavLink
                                    to={`/details/${mediaType}/${media.id}`}
                                    style={{ textDecoration: "none", color: "white" }}
                                >
                                    <div className="img d-flex justify-content-start">
                                        <img
                                            src={require(`../../assets/smallImages/${media?.littleimage}`)}
                                            alt={`${media.title}`}
                                        />
                                        <div className="title d-flex flex-column justify-content-center">
                                            <span>{media.title}</span>
                                            <span>{media.year}</span>
                                        </div>
                                    </div>
                                </NavLink>
                                {index !== similar.length - 1 && <hr className="m-0" />}
                            </React.Fragment>
                        ))}
                    </Slider>
                ) : (
                    similar?.map((media, index) => (
                        <React.Fragment key={media.id}>
                            <NavLink
                                className="m-3 ms-0"
                                to={`/details/${mediaType}/${media.id}`}
                                style={{ textDecoration: "none", color: "white" }}
                            >
                                <div className="img d-flex justify-content-start">
                                    <img
                                        src={require(`../../assets/smallImages/${media?.littleimage}`)}
                                        alt={`${media.title}`}
                                    />
                                    <div className="title d-flex flex-column justify-content-center">
                                        <span>{media.title}</span>
                                        <span>{media.year}</span>
                                    </div>
                                </div>
                            </NavLink>
                            {index !== similar.length - 1 && <hr className="m-0" />}
                        </React.Fragment>
                    ))
                )}

            </div>
        </div>
    );
};

export default SimilarSection;
