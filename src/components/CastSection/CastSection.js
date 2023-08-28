import React, {useEffect, useRef} from "react";
import "./CastSection.css";
import { useState } from "react";
const CastSection = () => {
  const [showMoreCast, setShowMoreCast] = useState(false);

  const handleViewMoreButtonClick = () => {
    setShowMoreCast((prevShowMoreCast) => !prevShowMoreCast);
  };
  const shownArray = Array.from({ length: 6 }, (_, index) => index + 1);
  const hiddenArray = Array.from({ length: 6 }, (_, index) => index + 1);


    const revealElementRef = useRef(null);

    useEffect(() => {
        const revealElement = revealElementRef.current;

        const handleScroll = () => {
            const viewportTop = window.scrollY;
            const viewportBottom = viewportTop + window.innerHeight/1.2;
            const elementTop = revealElement.getBoundingClientRect().top + viewportTop;
            const elementBottom = elementTop + revealElement.offsetHeight;

            const isElementVisible = elementBottom > viewportTop && elementTop < viewportBottom;
            revealElement.classList.toggle("reveal", isElementVisible);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


  return (
    <div className="cast-section">
      <span>Cast</span>
      <hr className="custom-hr"/>
      <div className="container big">
        <div ref={revealElementRef} className="container">
          <div  className="row">
            {shownArray.map((divNumber) => (
              <div
                key={divNumber}
                className="col-lg-2 col-md-4 col-sm-6 d-flex flex-column align-items-center img "
              >
                <div className="row">
                  <img
                    className="image p-0"
                    src={require("../../assets/rym.jpg")}
                    alt=""
                  />
                </div>
                <div className="row">
                  <div className="actor fw-bold d-flex flex-column align-items-center">
                    Thomas Shelby
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    Cillian Murphy
                  </div>
                </div>
              </div>
            ))}
            {showMoreCast ? (
              <>
                {hiddenArray.map((divNumber) => (
                  <div className="col-lg-2 col-md-4 col-sm-6 d-flex flex-column align-items-center img ">
                    <div className="row">
                      <img
                        className="image p-0"
                        src={require("../../assets/rym.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="row">
                      <div className="actor fw-bold d-flex flex-column align-items-center">
                        Thomas Shelby
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        Cillian Murphy
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : null}
          </div>
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center align-items-lg-end align-items-md-end">
              <button onClick={handleViewMoreButtonClick}>
                <span>{showMoreCast ? "View less" : "View more"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="custom-hr" />
    </div>
  );
};

export default CastSection;
