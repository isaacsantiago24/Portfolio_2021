import React from "react";

import amber1 from "../../images/amber/amb-1.jpg";
import amber2 from "../../images/amber/amb-2.jpg";
import amber3 from "../../images/amber/amb-3.jpg";
import iphone from "../../images/amber/iphone.jpg";
import ipad from "../../images/amber/ipad.jpg";

import github from "../../icons/github2.png";
import web from "../../icons/global2.png";
import Back from "../Back";
import "../Back.css";
export default function AmberWork() {
  return (
    <>
      <Back />
      <div className="headline">
        <h1>Amber Gray Photography - HTML, CSS</h1>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <div className="main-text-container">
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Overview</h3>
            <div className="rectangle"> </div>

            <p>
              This website was built using HTML, CSS and uploaded to Github
              pages. It's a responsive portfolio displaying photos by Amber
              Gray. It includes form submission and animations.
            </p>
          </div>
        </section>
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Deployment</h3>
            <div className="rectangle"> </div>

            <a
              href="https://github.com/isaacsantiago24/isaacsantiago24.github.io"
              target="_blank"
              title="Repository"
            >
              <img src={github} alt="github" class="project-icons" /> View Repo
            </a>
            <br />
            <a
              href="https://isaacsantiago24.github.io/ambergray-photography/"
              target="_blank"
              title="Website"
            >
              <img src={web} alt="website" class="project-icons" /> View
              Photography Portfolio
            </a>
          </div>
        </section>

        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Technologies</h3>
            <div className="rectangle"> </div>
            {/* <p>Adobe Photoshop, Illustrator, Lightroom.</p> */}
            <ul>
              <li className="list">HTML</li>
              <li className="list">CSS</li>
              <li className="list">Adobe Photoshop</li>
              <li className="list">Github Pages</li>
            </ul>
          </div>
        </section>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <img src={amber1} alt="Amber-cover" class="center" />
      <section className="image-container-2">
        <img src={amber2} alt="Amber" />
      </section>
      <section className="image-container">
        <img src={iphone} alt="iphone" />
        <img src={ipad} alt="ipad" />
      </section>
      {/* //////////////////////////////////////////////////////////// */}

      <section className="image-container-2">
        <img src={amber3} alt="Amber" />
      </section>
    </>
  );
}
