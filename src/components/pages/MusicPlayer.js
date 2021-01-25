import React from "react";

import musicpic1 from "../../images/musicpics/song1.jpg";
import ipad from "../../images/musicpics/ipad-mockup.jpg";

import github from "../../icons/github2.png";
import website from "../../icons/global2.png";
import process from "../../images/musicpics/player-process.jpg";
import musicpic2 from "../../images/musicpics/player2.jpg";
import musiciphone from "../../images/musicpics/musicplayer-iphone.jpg";
import Back from "../Back";
import "../Back.css";

export default function MusicPlayer() {
  return (
    <>
      <Back />
      <div className="headline">
        <h1>Music Player - React</h1>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <div className="main-text-container">
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Overview</h3>
            <div className="rectangle"> </div>

            <p>
              This is a full functional app built with React and fetching data
              from Jamendo Music API. Functionality includes pause, play, skip
              songs forward and backwards. As well as a Library section to view
              all of your favorite songs.
            </p>
          </div>
        </section>
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Deployment</h3>
            <div className="rectangle"> </div>

            <a
              href="https://github.com/isaacsantiago24/Music-Player-PortfolioProject"
              target="_blank"
              title="Repository"
            >
              <img
                src={github}
                alt="github"
                class="project-icons"
                title="Repository"
              />{" "}
              View Repo
            </a>
            <br />
            <a
              href="https://isaacs-playlist.firebaseapp.com/"
              target="_blank"
              title="Website"
            >
              <img src={website} alt="website" class="project-icons" /> View
              Music Player
            </a>
          </div>
        </section>

        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Technologies</h3>
            <div className="rectangle"> </div>
            {/* <p>Adobe Photoshop, Illustrator, Lightroom.</p> */}
            <ul>
              <li className="list">React</li>
              <li className="list">Javascript</li>
              <li className="list">HTML</li>
              <li className="list">Sass: Syntactically Awesome Style Sheets</li>

              <li className="list">CSS</li>
            </ul>
          </div>
        </section>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <img src={process} alt="design-process" class="center" />
      <img src={musicpic1} alt="music player" class="center" />

      <section className="image-container">
        <img src={musiciphone} alt="iphone" />
        <img src={ipad} alt="ipad" />
      </section>
      <img src={musicpic2} alt="music player" class="center" />
    </>
  );
}
