import React from "react";

import logoprocess from "../../images/fresheats/logoprocess.jpg";
import finallogo from "../../images/fresheats/finallogo.jpg";
import process2 from "../../images/fresheats/process2.jpg";
import menu from "../../images/fresheats/menu.jpg";
import target from "../../images/fresheats/target.jpg";
import website from "../../images/fresheats/cover1bb.jpg";
import github from "../../icons/github2.png";
import web from "../../icons/global2.png";
import Back from "../Back";
import "../Back.css";

export default function FreshEatsWork() {
  return (
    <>
      <Back />
      <div className="headline">
        <h1>Fresh Eats Restaurant - Branding</h1>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <div className="main-text-container">
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Overview</h3>
            <div className="rectangle"> </div>

            <p>
              This is a branding project for a restaurant I created called Fresh
              Eats. Its focus is to encourage the community to enjoy healthier
              alternatives. I built a website using HTML, CSS and Github Pages.
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
              href="https://isaacsantiago24.github.io/fresh-eats/"
              target="_blank"
              title="Website"
            >
              <img src={web} alt="website" class="project-icons" /> View Fresh
              Eats Website
            </a>
          </div>
        </section>

        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Technologies</h3>
            <div className="rectangle"> </div>
            {/* <p>Adobe Photoshop, Illustrator, Lightroom.</p> */}
            <ul>
              <li className="list">Adobe Illustrator</li>
              <li className="list">Adobe Photoshop</li>
              <li className="list">Adobe Lightroom</li>
              <li className="list">HTML</li>

              <li className="list">CSS</li>
              <li className="list">Github Pages</li>
            </ul>
          </div>
        </section>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <img src={logoprocess} alt="Design process" class="center" />
      <section className="image-container-2">
        <img src={finallogo} alt="Logo exploration" class="center" />
      </section>
      {/* //////////////////////////////////////////////////////////// */}
      {/* <section className="image-container">
        <img src={office1} alt="desert" />
        <img src={office2} alt="desert" />
      </section> */}
      <section className="image-container-2">
        <img src={process2} alt="Design process" class="center" />
      </section>
      <section className="image-container-2">
        <img src={website} alt="Fresh Eats Website" class="center" />
      </section>
      <section className="image-container-2">
        <img src={target} alt="Personas" class="center" />
      </section>
      <section className="image-container-2">
        <img src={menu} alt="Fresh Eats Menu" class="center" />
      </section>
    </>
  );
}
