import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <Link className="footer-link" to="https://github.com/judithcrasser">
        <FaGithub icon="fa-brands fa-github" />
      </Link>
      <Link
        className="footer-link"
        to="https://www.linkedin.com/in/judith-c-351178249/"
      >
        <FaLinkedin icon="fa-brands fa-linkedin-in" />
      </Link>
    </div>
  );
}

export default Footer;
