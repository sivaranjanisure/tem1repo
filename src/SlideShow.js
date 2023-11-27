import React, { useState } from 'react';
import './SlideShow.css';

const SlideShow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slide-show">
      <div className="slide-container">
        <div className="slide-wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className="dot-navigation">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;