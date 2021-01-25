import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import AztecRecreationCenter from "./components/pages/AztecRecreationCenter";
import BredGiversWork from "./components/pages/BredGivers";
import EnvisualWork from "./components/pages/Envisual";
import ScrollToTop from "./components/ScrollToTop";
import MusicPlayer from "./components/pages/MusicPlayer";

import FreshEatsWork from "./components/pages/FreshEats";
import ChocoWork from "./components/pages/Choco";
import AmberWork from "./components/pages/Amber";
import covidWork from "./components/pages/Covid";
import taskWork from "./components/pages/Task-manager";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />

        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/music-player" exact component={MusicPlayer} />
          <Route path="/covid19-tracker" exact component={covidWork} />
          <Route path="/task-manager" exact component={taskWork} />
          <Route
            path="/aztec-recreation-center"
            exact
            component={AztecRecreationCenter}
          />
          <Route path="/bread-givers" exact component={BredGiversWork} />
          <Route path="/envisual" exact component={EnvisualWork} />
          <Route path="/fresh-eats" exact component={FreshEatsWork} />
          <Route path="/choco" exact component={ChocoWork} />

          <Route path="/amber-gray-photography" exact component={AmberWork} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
