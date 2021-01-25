import React from "react";

import github from "../../icons/github2.png";
import website from "../../icons/global2.png";
import galaxyPhone from "../../images/covid/covid19-iphone2.jpg";
import ipad2 from "../../images/covid/covid19-ipad2.jpg";
import covidprocess from "../../images/covid/covid-process2.jpg";
import home from "../../images/covid/covidhome1a.jpg";
import search from "../../images/covid/covidsearch1.jpg";
import Back from "../Back";
import "../Back.css";

export default function Covid() {
  return (
    <>
      <Back />
      <div className="headline">
        <h1>Covid-19 API Tracker - React</h1>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <div className="main-text-container">
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Overview</h3>
            <div className="rectangle"> </div>

            <p>
              This project was built with React. It provides statistics such as
              active cases, deaths, recovered, active, critical condition from
              different countries. As well as search functionality to allow you
              to find a specific country by name.
            </p>
          </div>
        </section>
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Deployment</h3>
            <div className="rectangle"> </div>

            <a
              href="https://github.com/isaacsantiago24/Covid19-Tracker-API"
              target="_blank"
              title="Repository"
            >
              <img src={github} alt="github" class="project-icons" /> View Repo
            </a>
            <br />
            <a
              href="https://covid19-tracker-api.web.app/"
              target="_blank"
              title="Website"
            >
              <img src={website} alt="website" class="project-icons" /> View
              Covid-19 Tracker
            </a>
          </div>
        </section>

        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Technologies</h3>
            <div className="rectangle"> </div>
            {/* <p>Adobe Photoshop, Illustrator, Lightroom.</p> */}
            <ul>
              <li className="list">React </li>
              <li className="list">Javascript</li>
              <li className="list">HTML</li>

              <li className="list">CSS</li>
              <li className="list">Bootstrap</li>
            </ul>
          </div>
        </section>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <img src={covidprocess} alt="design-process" class="center" />
      <img src={home} alt="covid19-homepage" class="center" />

      <section className="image-container">
        <img src={galaxyPhone} alt="galaxy Phone" />
        <img src={ipad2} alt="ipad" />
      </section>
      <img src={search} alt="covid19-search" class="center" />
    </>
  );
}
