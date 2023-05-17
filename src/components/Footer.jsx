import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <Link 
        to="https://github.com/judithcrasser"
        target="_blank"
        className="footer-link" 
      >
        <FaGithub icon="fa-brands fa-github" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/judith-crasser-351178249/"
        target="_blank"
        className="footer-link"
      >
        <FaLinkedin icon="fa-brands fa-linkedin-in" />
      </Link>
    </div>
  );
}

export default Footer;
