import React from "react";

import cover from "../../images/bred/coverprocess.jpg";
import logo from "../../images/bred/logoprocessfinal.jpg";
import bookcover from "../../images/bred/coverprocess2.jpg";
import bookdesign from "../../images/bred/bred-cover.jpg";
import Back from "../Back";
import "../Back.css";

export default function BredGiversWork() {
  return (
    <>
      <Back />
      <div className="headline">
        <h1>Bread Givers by Anzia Yezierska - Branding</h1>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <div className="main-text-container">
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Overview</h3>
            <div className="rectangle"> </div>

            <p>
              The objective was to redesign the cover of the book Bread Givers
              by Anzia Yezierska as well as create a campaign focused on a
              specific section of the book.
            </p>
          </div>
        </section>
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Solution</h3>
            <div className="rectangle"> </div>

            <p>
              The focus of my campaign was household gender equality. I created
              icons using Adobe Illustrator. My book cover was designed using
              Adobe Photoshop. It depicts the main character Sarah being on her
              own journey.
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

      <img src={cover} alt="Design process" class="center" />
      <section className="image-container-2">
        <img src={logo} alt="Logo exploration" class="center" />
      </section>
      {/* //////////////////////////////////////////////////////////// */}
      {/* <section className="image-container">
        <img src={wallposter2} alt="desert" />
        <img src={lockerposter} alt="desert" />
      </section> */}
      <section className="image-container-2">
        <img src={bookcover} alt="Cover design process" class="center" />
      </section>
      <section className="image-container-2">
        <img src={bookdesign} alt="Bread Givers book cover" class="center" />
      </section>
    </>
  );
}
