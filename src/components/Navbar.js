import React, { useState } from "react";
import "./Navbar.css";
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";

///////icons
import linkedin from "../icons/linkedin2.png";
import behance from "../icons/behance-white.png";
// import instagram from "../icons/instagram-white.png";
import github from "../icons/github-white.png";
import resumeicon from "../icons/document.png";
//pdf
import pdf from "../images/Isaac_Santiago_Resume.pdf";

function Navbar() {
  const [click, setClick] = useState(false);

  //   function is doing the opposite of the click
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <>
        <nav id="nav-section" className="navbar">
          <div className="navbar-container">
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <a href="/#software-section" id="soft" className="nav-links">
                  Software
                </a>
              </li>
              <li className="nav-item">
                <a href="/#design-section" className="nav-links">
                  Design
                </a>
              </li>
            </ul>
            <a
              href="https://www.linkedin.com/in/isaacsantiago/"
              target="_blank"
              className="navbar-logo"
              title="LinkedIn"
            >
              <img src={linkedin} alt="linkedin" className="social-icons" />
            </a>

            <a
              href="https://github.com/isaacsantiago24"
              target="_blank"
              className="navbar-logo"
              title="GitHub"
            >
              <img src={github} alt="github" className="social-icons" />
            </a>
            <a
              href="https://www.behance.net/isaacsantiago1"
              target="_blank"
              className="navbar-logo"
              title="Behance"
            >
              <img src={behance} alt="behance" className="social-icons" />
            </a>
            {/* <a
              href="https://www.instagram.com/isaacsdesign/?hl=en"
              target="_blank"
              className="navbar-logo"
              title="Instagram"
            >
              <img src={instagram} alt="instagram" class="social-icons" />
            </a> */}
            <a
              href={pdf}
              rel="noreferrer"
              target="_blank"
              className="navbar-logo"
            >
              <img
                src={resumeicon}
                alt="resume"
                className="social-icons"
                title="Resume"
              />
            </a>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Navbar;
