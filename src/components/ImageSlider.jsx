import React from 'react'
import { useState } from "react";
import {useParams} from 'react-router-dom'

// import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
// import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

function ImageSlider({works}) {

    const { id } = useParams()
    const slides = works[id].slides;

    

    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };


  return (
    <div className='slider-container'>
      <div>
        {slides.length > 1 && <div onClick={goToPrevious} className='left-arrow'>
            <IoMdArrowDropleft />
        </div>}
        {slides.length > 1 && <div onClick={goToNext} className='right-arrow'>
            <IoMdArrowDropright />
        </div>}
      </div>
      <div style={slideStylesWidthBackground}></div>
      {slides.length > 1 && <div className='slide-dots-container'>
        {slides.map((slide, slideIndex) => (
          <div
            className='slide-dots'
            id={currentIndex === slideIndex ? 'active' : ''}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>}
    </div>
  )
}

export default ImageSlider