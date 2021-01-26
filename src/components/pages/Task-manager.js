import React from "react";

import taskboard from "../../images/task/task-board.jpg";
import task1 from "../../images/task/task-ipad-final.jpg";
import task2 from "../../images/task/task2.jpg";
import taskadd from "../../images/task/task-add2.jpg";
import taskdrag from "../../images/task/task-drag.jpg";
import complete2 from "../../images/task/complete2.jpg";

import github from "../../icons/github2.png";
import website from "../../icons/global2.png";
import Back from "../Back";
import "../Back.css";

export default function taskWork() {
  return (
    <>
      <Back />
      <div className="headline">
        <h1>Task Manager - JavaScript, HTML & CSS</h1>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <div className="main-text-container">
        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Overview</h3>
            <div className="rectangle"> </div>

            <p>
              This Task Manager was built with Javascript. Functionality
              includes drag and drop tasks in different categories, create a new
              task, edit and delete tasks.
            </p>
          </div>
        </section>
        <div className="text-details">
          <h3 class="title">Deployment</h3>
          <div className="rectangle"> </div>

          <a
            href="https://github.com/isaacsantiago24/isaacsantiago24.github.io"
            target="_blank"
            title="Repository"
          >
            <img src={github} alt="github" class="project-icons" /> Repo
          </a>
          <br />
          <a
            href="https://isaacsantiago24.github.io/task-manager/"
            target="_blank"
            title="Website"
          >
            <img src={website} alt="website" class="project-icons" /> View Task
            Manager
          </a>
        </div>

        <section className="text-container">
          <div className="text-details">
            <h3 class="title">Technologies</h3>
            <div className="rectangle"> </div>
            {/* <p>Adobe Photoshop, Illustrator, Lightroom.</p> */}
            <ul>
              <li className="list">JavaScript</li>
              <li className="list">HTML</li>
              <li className="list">CSS</li>
            </ul>
          </div>
        </section>
      </div>
      {/* //////////////////////////////////////////////////////////// */}

      <img src={taskboard} alt="" class="center" />
      <section className="image-container-2">
        <img src={taskadd} alt="desert" class="center" />
      </section>
      {/* //////////////////////////////////////////////////////////// */}
      <section className="image-container-2">
        <img src={taskdrag} alt="task drag items" class="center" />
      </section>
      <section className="image-container">
        <img src={task1} alt="ipad" />
        <img src={task2} alt="iphone" />
      </section>
      <section className="image-container-2">
        <img src={complete2} alt="complete tasks" class="center" />
      </section>
    </>
  );
}
