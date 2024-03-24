import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./image_slider.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  const [slider, setSlider] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToPrevious = () => {
    slider.slickPrev();
  };

  const goToNext = () => {
    slider.slickNext();
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
      <div className="slider-buttons flex justify-between">
        <button onClick={goToPrevious}>
          <FaArrowAltCircleLeft />
        </button>
        <button onClick={goToNext}>
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
