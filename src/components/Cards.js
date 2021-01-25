import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

import arc from "../images/arc/arc_cover.jpg";
import bredcover from "../images/bred/bred-cover-smaller.jpg";
import envisual from "../images/envisual/envisualcover2.jpg";
import chococover from "../images/choco/choco.jpg";
import cover from "../images/fresheats/cover2.jpg";
import amber from "../images/amber/acover.jpg";
import musicplayer2 from "../images/musicplayer.jpg";
import covidCover from "../images/covid/covid19-cover.jpg";
import taskcover from "../images/task/task-cover5.jpg";
////////////
function Cards() {
  return (
    <div className="cards">
      <h1 id="software-section">Software Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={musicplayer2}
              text="Full functional Music Player built with React fetching data from an API."
              label="Music Player"
              path="/music-player"
            />
            <CardItem
              src={covidCover}
              text="Covid-19 stat tracker built with React fetching data from two API's."
              label="Covid-19 Tracker"
              path="/covid19-tracker"
            />
            <CardItem
              src={taskcover}
              text="A task manager built with JavaScript to help you stay organized with your daily tasks."
              label="Task Manager"
              path="/task-manager"
            />
          </ul>
          <h1 id="design-section">Design Projects</h1>
          <ul className="cards__items">
            <CardItem
              src={arc}
              text="Graphic Artist for Aztec Recreation Center located in San Diego, CA."
              label="Marketing Assets"
              path="/aztec-recreation-center"
            />
            <CardItem
              src={cover}
              text=" A full branding project for a fictitious restaurant called Fresh Eats."
              label="Branding Project"
              path="/fresh-eats"
            />

            <CardItem
              src={envisual}
              text="A branding project for Envisual Photography located in San Diego, CA."
              label="Photography Branding"
              path="/envisual"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={bredcover}
              text="Re-branding project focused on the book Bread Givers by Anzia Yezierska."
              label="Branding Campaign"
              path="/bread-givers"
            />
            <CardItem
              src={chococover}
              text="Choco is a package design project that focuses on fair trade products. "
              label="Package Design"
              path="/choco"
            />
            <CardItem
              src={amber}
              text="A portfolio to showcase photography of Amber Gray built with HTML, CSS."
              label="Photography Portfolio"
              path="/amber-gray-photography"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
