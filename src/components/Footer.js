import React from "react";
import "./Footer.css";

import ScrollBackUp from "./ScrollBackUp";
function Footer() {
  return (
    <div className="footer-container">
      <ScrollBackUp />
      <h5 id="copyright">
        Copyright © 2021 Isaac Santiago - Website built with React, Javascript,
        HTML, CSS{" "}
      </h5>
      <a
        href="https://github.com/isaacsantiago24/Portfolio_2021"
        target="_blank"
        title="Portfolio Repository"
        id="link"
      >
        View Source Code
      </a>
    </div>
  );
}

export default Footer;
