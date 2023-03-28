import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <Link to={"/"}>HOME</Link>
      <Link to={"/work"}>WORK</Link>
      <Link to={"/contact"}>CONTACT</Link>
    </div>
  );
}

export default Navbar;
