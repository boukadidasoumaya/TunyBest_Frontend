import React, {useEffect} from "react";
import "./SimilarSection.css";
import Slider from "react-slick";
import {NavLink, useParams} from "react-router-dom";

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

const SimilarSection = () => {
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        vertical: true,
        verticalSwiping: true,
        nextArrow: <NextArrow/>, // Custom next arrow component
        prevArrow: <PrevArrow/>, // Custom prev arrow component
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                    vertical: true,
                    verticalSwiping: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    initialSlide: 2,
                    vertical: true,
                    verticalSwiping: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    vertical: true,
                    verticalSwiping: true,
                },
            },
        ],
    };

    return (
        <div className="similar-section">
            <span id="sim">Similar</span>
            <hr className="custom-hr"/>
            <div className="container similar p-0 d-flex flex-column justify-content-center align-md-start">
                <Slider className="slider" {...settings}>
                    {Array.from({length: 8}, (_, index) => (
                        <React.Fragment key={index}>
                            <NavLink to={`/details/${index}`} style={{textDecoration:"none", color:"white"}}>
                                <div className="img d-flex justify-content-start">
                                    <img
                                        src={require(`../../assets/poldark.jpg`)}
                                        alt={`${index + 1}`}
                                    />
                                    <div className="title d-flex flex-column justify-content-center">
                                        <span>poldark</span>
                                        <span>2014 </span>
                                    </div>
                                </div>
                            </NavLink>
                            {index !== 8 - 1 && <hr className="m-0"/>}
                        </React.Fragment>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SimilarSection;
