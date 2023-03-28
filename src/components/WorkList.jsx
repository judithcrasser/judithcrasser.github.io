import React from "react";
import { Link } from "react-router-dom";

function WorkList() {
  const works = [
    {
      id: 0,
      title: "RECORD COVER",
      subtitle: "inDesign",
      url: require("../images/work-1a.jpg"),
    },
    {
      id: 1,
      title: "TO DO LIST",
      subtitle: "javascript, react",
      url: require("../images/work-w1b.png"),
    },
    {
      id: 2,
      title: "POSTER SERIES FM ADHOC",
      subtitle: "",
      url: require("../images/work-2a.jpg"),
    },
    {
      id: 3,
      title: "TOMATO COLLECTION APP",
      subtitle: "",
      url: require("../images/work-w2a.jpeg"),
    },
    {
      id: 4,
      title: "POSTER CLUB NIGHT",
      subtitle: "",
      url: require("../images/work-3.jpg"),
    },
    {
      id: 5,
      title: "NÖIX APP",
      subtitle: "",
      url: require("../images/work-w3a.jpg"),
    },
    {
      id: 6,
      title: "POSTER REOPENING",
      subtitle: "",
      url: require("../images/work-4.jpg"),
    },
    {
      id: 7,
      title: "PRACHT HOMEPAGE",
      subtitle: "",
      url: require("../images/work-w4.png"),
    },
  ];

  return (
    <div className="work-list">
      {works.map((work) => (
        <div className="work-container" key={work.id}>
          <div className="img-wrapper">
            <Link to={`/work/${work.id}`}>
              <div
                className="work-img"
                style={{ backgroundImage: `url(${work.url})` }}
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
