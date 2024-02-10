import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleUser,
  faDownload,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-parent">
      <div className="footer-container">
        <span className="footer-icon">
          <a
            className="icon-link"
            href="https://github.com/gonzavh17"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p className="footer-icon-description">Follow Me</p>
        </span>
        <span className="footer-icon">
          <a className="icon-link" href="https://personal-web-two-eta.vercel.app/" target="_blank">
          <FontAwesomeIcon icon={faCircleUser} />
          </a>
          <p className="footer-icon-description">Visit my website</p>
        </span>
        <span className="footer-icon">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/devgonzaloasis"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <p className="footer-icon-description">Contact Me</p>
        </span>
        <span className="footer-icon">
          <a
            className="icon-link"
            href="https://drive.google.com/file/d/1SiKURKTe08gF2V0aFSVv44_15dYba1hL/view?usp=sharing"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <p className="footer-icon-description">Downlaod my CV</p>
        </span>
      </div>

      <div className="footer-dedication">
        <p className="rights">All rights Reserved</p>
        <p className="made-by">
          Made with <FontAwesomeIcon icon={faHeart} /> by Gonza{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;