import React from "react";

import envisuallogo from "../../images/envisual/envisualprocess.jpg";
import logoprocess from "../../images/envisual/logoprocess.jpg";
import office1 from "../../images/envisual/office.jpg";
import office2 from "../../images/envisual/office2.jpg";
import stationary from "../../images/envisual/front.jpg";
import flyers from "../../images/envisual/flyers.jpg";
import envelope from "../../images/envisual/envelope.jpg";
import bizcard from "../../images/envisual/bizcard.jpg";
// import mood from "../../images/envisual/moodboard2.jpg";
import Back from "../Back";
import "../Back.css";

export default function EnvisualWork() {
  return (
    <>
      <Back />
      <div className="headline">
        <h1>Envisual Photography - Branding</h1>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <div className="main-text-container">
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Overview</h3>
            <div className="rectangle"> </div>

            <p>
              I met Charlie Hang who has his brand Envisual Photography based
              out of the Bay Area and currently located in San Diego, CA. We
              worked together to update his marketing assets.
            </p>
          </div>
        </section>
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Solution</h3>
            <div className="rectangle"> </div>

            <p>
              Charlie wanted to keep a minimal and elegant look to his brand. I
              created icons and patterns with high contrast. As well as
              incorporating his favorite photographs into his business cards and
              flyers.
            </p>
          </div>
        </section>
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Technologies</h3>
            <div className="rectangle"> </div>
            <ul>
              <li className="list">Adobe Illustrator</li>
              <li className="list">Adobe Photoshop</li>
              <li className="list">Adobe Lightroom</li>
            </ul>
          </div>
        </section>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <img src={envisuallogo} alt="Design process" class="center" />
      <section className="image-container-2">
        <img src={logoprocess} alt="Logo exploration" />
      </section>
      {/* <section className="image-container-2">
        <img src={mood} alt="Moodboard" />
      </section> */}
      {/* //////////////////////////////////////////////////////////// */}
      <section className="image-container">
        <img src={office1} alt="desert" />
        <img src={office2} alt="desert" />
      </section>
      <section className="image-container-2">
        <img src={stationary} alt="Cover design process" />
      </section>
      <section className="image-container-2">
        <img src={envelope} alt="Cover design process" />
      </section>
      <section className="image-container-2">
        <img src={bizcard} alt="Cover design process" />
      </section>
      <section className="image-container-2">
        <img src={flyers} alt="Bread Givers book cover" />
      </section>
    </>
  );
}
