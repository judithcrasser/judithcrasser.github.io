import React from "react";
import { Link, useParams } from 'react-router-dom'
import ImageSlider from "./ImageSlider";
import { MdArrowBackIos } from 'react-icons/md';

function WorkDetails({works}) {

  const { id } = useParams()

  const work = works[id];

  return (

    <div className="work-details">
      
      <div className="work-text-container">
        <Link to={'/work'}>
          <div className="back-btn"><MdArrowBackIos style = {{transform: 'rotate(90deg)' }} /></div>
        </Link>
      
        <p className="work-detail-title">
          {work.title}
        </p>
        <p className="work-detail-text">
          {work.text}
        </p>
        <Link 
          to={work.link} 
          target="_blank" 
          className="work-link-style"
        >
          <p className="work-link-title">
            {work.linkTitle}
          </p>
        </Link>
        <Link 
          to={work.link2} 
          target="_blank" 
          className="work-link-style"
        >
          <p className="work-link-title">
            {work.linkTitle2}
          </p>
        </Link>
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
