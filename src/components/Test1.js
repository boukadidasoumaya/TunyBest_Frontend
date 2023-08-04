import "./test.css";
import React, { useState, useEffect } from 'react';

const Test1 = () => {
  const [currentSliderCount, setCurrentSliderCount] = useState(0);
  const [showCount, setShowCount] = useState(4);
  const videoCount = 17; 
  const sliderCount = Math.ceil(videoCount / showCount);
  const controlsWidth = 40;
  const scaling = 1.5;

  useEffect(() => {
    init();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function init() {
    const windowWidth = window.innerWidth;
    let newShowCount;

    if (windowWidth >= 0 && windowWidth <= 414) {
      newShowCount = 2;
    } else if (windowWidth >= 414 && windowWidth <= 768) {
      newShowCount = 3;
    } else {
      newShowCount = 4;
    }

    setShowCount(newShowCount);
    controls();
  }

  function handleResize() {
    init();
  }

  function controls() {
    const win = window;
    const sliderFrame = document.querySelector(".slider-frame");
    const sliderContainer = document.querySelector(".slider-container");
    const slide = document.querySelectorAll(".slide");
    let scollWidth = 0;

    const windowWidth = win.innerWidth;
    const frameWidth = windowWidth - 80;
    const videoWidth = ((windowWidth - controlsWidth * 2) / showCount);
    const videoHeight = Math.round(videoWidth / (16 / 9));
    const videoWidthDiff = (videoWidth * scaling) - videoWidth;
    const videoHeightDiff = (videoHeight * scaling) - videoHeight;

    sliderFrame.style.width = `${windowWidth}px`;
    sliderFrame.style.height = `${videoHeight * scaling}px`;

    sliderContainer.style.height = `${videoHeight}px`;
    sliderContainer.style.width = `${(videoWidth * videoCount) + videoWidthDiff}px`;
    sliderContainer.style.top = `${videoHeightDiff / 2}px`;
    sliderContainer.style.marginLeft = `${controlsWidth}px`;

    slide.forEach((item) => {
      item.style.height = `${videoHeight}px`;
      item.style.width = `190px`;
    });
  }

  function handleNext() {
    setCurrentSliderCount((prevCount) => (prevCount + 1) % sliderCount);
  }

  function handlePrev() {
    setCurrentSliderCount((prevCount) => (prevCount - 1 + sliderCount) % sliderCount);
  }

  return (
    <div className="slider-frame">
      <div className="btn prev" onClick={handlePrev}></div>
      <div className="btn next" onClick={handleNext}></div>
      <div className="slider-container" style={{ marginLeft: -currentSliderCount * 100 + '%' }}>
        {Array.from({ length: videoCount }, (_, index) => (
          <div key={index} className="slide">
            {index}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test1;
