import React from "react";

function WorkDetails() {
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
      url: require("../images/work-w1.png"),
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
      title: "NÖIX",
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
    <div className="work-details">
      <div className="work-text">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          dolore facere corporis ratione ipsa voluptatem. Aspernatur labore
          dolor delectus ipsam!
        </p>
      </div>
      <div className="work-slider">
        <div className="img"></div>
      </div>

      <div className="route-to-detail">
        {/* <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default WorkDetails;
