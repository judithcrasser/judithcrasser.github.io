import React from "react";
import { Link, useParams } from 'react-router-dom'
import ImageSlider from "./ImageSlider";

import { MdArrowBackIos } from 'react-icons/md';

function WorkDetails({works}) {

  const { id } = useParams()

  return (

    <div className="work-details">
      
      <div className="work-text-container">
        <Link to={'/work'}>
          <div className="back-btn"><MdArrowBackIos style = {{transform: 'rotate(90deg)' }} /></div>
        </Link>
      
        <p className="work-text">
         {works[id].text}
        </p>
      </div>
      <div className="work-slider">
        <div className="img-container">
          <ImageSlider works={works} />
        </div>
      </div>
    </div>
  );
}

export default WorkDetails;
