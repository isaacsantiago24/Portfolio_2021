import React from "react";

import chocoprocess from "../../images/choco/chocoprocess.jpg";
import chocos from "../../images/choco/chocolates.jpg";
import packages from "../../images/choco/packages.jpg";
import backdesign from "../../images/choco/backdesign.jpg";
import inhand from "../../images/choco/inhand.jpg";
import Back from "../Back";
import "../Back.css";

export default function ChocoWork() {
  return (
    <>
      <Back />
      <div className="headline">
        <h1>Choco - Package Design</h1>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <div className="main-text-container">
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Overview</h3>
            <div className="rectangle"> </div>

            <p>
              The objective was to create a packaging that resembles the culture
              of Ecuador with a use of patterns and traditional colors.
            </p>
          </div>
        </section>
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Solution</h3>
            <div className="rectangle"> </div>

            <p>
              I focused on creating a package that expresses a rich dark
              chocolate. The pattern used is commonly found on traditional
              clothing in Ecuador. The chocolate flavors of Cherry, Lemon Grass
              and Banana Chips are one of the most popular in Ecuador.
            </p>
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
            </ul>
          </div>
        </section>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <img src={chocoprocess} alt="Design process" class="center" />
      <section className="image-container-2">
        <img src={chocos} alt="Chocolates" />
      </section>
      {/* //////////////////////////////////////////////////////////// */}
      {/* <section className="image-container">
        <img src={office1} alt="desert" />
        <img src={office2} alt="desert" />
      </section> */}
      <section className="image-container-2">
        <img src={packages} alt="three packages design" />
      </section>
      <section className="image-container-2">
        <img src={inhand} alt="Cover design process" />
      </section>
      <section className="image-container-2">
        <img src={backdesign} alt="Back design" />
      </section>
    </>
  );
}
