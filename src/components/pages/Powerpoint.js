import React from "react";

// import amber1 from "../../images/amber/amb-1.jpg";
import process from "../../images/powerpoint/process1.jpg";
import slideone from "../../images/powerpoint/Slide1.jpg";
import slidetwo from "../../images/powerpoint/Slide2.jpeg";
import slidethree from "../../images/powerpoint/Slide3.jpeg";
import slidefour from "../../images/powerpoint/Slide4.jpeg";
import slidefive from "../../images/powerpoint/Slide5.jpeg";
import slidesix from "../../images/powerpoint/Slide6.jpeg";

import github from "../../icons/github2.png";
import web from "../../icons/global2.png";
import Back from "../Back";
import "../Back.css";
export default function PowerpointWork() {
  return (
    <>
      <Back />
      <div className="headline">
        <h1>Mastering One Thing at a Time - PowerPoint Design</h1>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <div className="main-text-container">
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Overview</h3>
            <div className="rectangle"> </div>

            <p>
              A PowerPoint design created using Microsoft PowerPoint based on
              the article The Scientific Argument for Mastering One Thing at a
              Time written by James Clear.{" "}
            </p>
          </div>
        </section>
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Web</h3>
            <div className="rectangle"> </div>

            <a
              href="https://jamesclear.com/master-one-thing"
              target="_blank"
              title="Website"
            >
              <img src={web} alt="website" class="project-icons" /> Read Article
            </a>
          </div>
        </section>

        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Technologies</h3>
            <div className="rectangle"> </div>
            {/* <p>Adobe Photoshop, Illustrator, Lightroom.</p> */}
            <ul>
              <li className="list">Microsoft PowerPoint</li>
              <li className="list">Adobe Lightroom</li>
              <li className="list">Adobe Photoshop</li>
            </ul>
          </div>
        </section>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <img src={process} alt="design-process" class="center" />
      <section className="image-container-2">
        <img src={slideone} alt="slide-one" class="center" />
      </section>
      <section className="image-container-2">
        <img src={slidetwo} alt="slide-one" class="center" />
      </section>
      <section className="image-container-2">
        <img src={slidethree} alt="slide-one" class="center" />
      </section>
      <section className="image-container-2">
        <img src={slidefour} alt="slide-one" class="center" />
      </section>
      <section className="image-container-2">
        <img src={slidefive} alt="slide-one" class="center" />
      </section>
      <section className="image-container-2">
        <img src={slidesix} alt="slide-one" class="center" />
      </section>
    </>
  );
}
