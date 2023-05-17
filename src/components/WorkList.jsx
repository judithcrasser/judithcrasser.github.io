import React from "react";
import { Link } from "react-router-dom";

function WorkList({works}) {

  return (
    <div className="work-list">
      {works.map((work) => (
        <div className="work-container" key={work.id}>
          
          <div className="img-wrapper">
            <Link to={`/work/${work.id}`}>
            
              <div
                className="work-img"
                style={{ backgroundImage: `url(${work.image})` }}
              ></div>
              
              <div className="overlay">
                <div className="work-title">{work.title}</div>
              </div>
            </Link>
          </div>

        </div>
      ))}
    </div>
  );
}

export default WorkList;
