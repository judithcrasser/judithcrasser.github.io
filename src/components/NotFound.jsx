import React from "react";
import { Link } from "react-router-dom";
import { GiDiamondsSmile } from "react-icons/gi";

function NotFound() {
  return (
    <div className="not-found">
      <p>
        <GiDiamondsSmile /> PAGE NOT FOUND
      </p>
      <Link to={"/work"}>
        <button className="mail-btn">BACK TO WORK</button>
      </Link>
    </div>
  );
}

export default NotFound;
