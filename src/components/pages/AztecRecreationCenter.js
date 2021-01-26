import React from "react";

import poster from "../../images/arc/poster2-design.png";
import lockerposter from "../../images/arc/final.jpg";

import wallposter2 from "../../images/arc/wallposter2.jpg";
import events from "../../images/arc/events.jpg";
import tvslides from "../../images/arc/promoslides.png";
import smores2 from "../../images/arc/smores-two.jpg";
import flyer from "../../images/arc/flyer.png";
import Back from "../Back";
import "../Back.css";

export default function AztecRecreationCenter() {
  return (
    <>
      <Back />
      <div className="headline">
        <h1>Aztec Recreation Center - Graphic Artist</h1>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <div className="main-text-container">
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Overview</h3>
            <div className="rectangle"> </div>

            <p>
              Aztec Recreation Center provides high quality programs, services
              and facilities that inspire healthy living to enhance the San
              Diego State University experience.
            </p>
          </div>
        </section>
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Responbilities</h3>
            <div className="rectangle"> </div>

            <p>
              Branding images and graphics for Aztec Recreation social media
              accounts. Ensuring consistency with all style guides including
              fonts, logos and symbols. Completing posters, flyers, web banners
              and edited photographs.
            </p>
          </div>
        </section>

        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Technologies</h3>
            <div className="rectangle"> </div>
            {/* <p>Adobe Photoshop, Illustrator, Lightroom.</p> */}
            <ul>
              <li className="list">Adobe Photoshop</li>
              <li className="list">Adobe Lightroom</li>
              <li className="list">Adobe Illustrator</li>
            </ul>
          </div>
        </section>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <img src={poster} alt="" class="center" />
      <section className="image-container-2">
        <img src={flyer} alt="desert" class="center" />
      </section>
      {/* //////////////////////////////////////////////////////////// */}
      <section className="image-container">
        <img src={wallposter2} alt="poster" />
        <img src={lockerposter} alt="poster" />
      </section>
      <section className="image-container-2">
        <img src={smores2} alt="flyers" class="center" />
      </section>
      <section className="image-container-2">
        <img src={tvslides} alt="tv slides" class="center" />
      </section>
      <section className="image-container-2">
        <img src={events} alt="flyers" class="center" />
      </section>
    </>
  );
}
