import "../styles/skill.css";
import { nanoid } from "@reduxjs/toolkit";

import Html from "../Images/Logos/Html.png";
import Css from "../Images/Logos/Css.png";
import Javascript from "../Images/Logos/Javascript.png";
import React from "../Images/Logos/React.png";
import ReactNative from "../Images/Logos/reactNative.png";
import CSharp from "../Images/Logos/Csharp.png";
import Photoshop from "../Images/Logos/Photoshop.png";
import Redux from "../Images/Logos/Redux.png";
import Unity from "../Images/Logos/Unity.png";
import Vite from "../Images/Logos/Vite.png";
import Router from "../Images/Logos/Router.png";
import Zustand from "../Images/Logos/Vite.png";
import Bootstrap from "../Images/Logos/Bootstrap.png";
import Sass from "../Images/Logos/Sass.png";
import Git from "../Images/Logos/Git.png";
import Next from "../Images/Logos/NextJS.png";
import NodeJs from "../Images/Logos/NodeJS.png";
import Express from "../Images/Logos/Express.png";
import TypeScript from "../Images/Logos/TypeScript.png";
import Mongo from "../Images/Logos/MongoDB.png"

const Skills = [
  ["HTML", Html, 95],
  ["CSS", Css, 90],
  ["Javascript", Javascript, 85],
  ["React", React, 80],
  /* ["Redux", Redux, 65], */
  /* ["Vite", Vite, 95], */
 /*  ["Page Router", Router, 75], */
  ["TypeScript", TypeScript, 85],
  /* ["CSharp", CSharp, 70], */
  ["Bootstrap", Bootstrap, 70],
  /* ["Git & Github", Git, 60], */
  ["SASS / LESS", Sass, 70],
  /* ["Next Js", Next, 41], */
  /* ["Node.Js", NodeJs, 50], */
  ["Express.Js", Express, 75],
  ["React Native (Expo)", ReactNative, 70],
  ["Mongo DB", Mongo, 80],
  ["Photoshop", Photoshop, 85],
  ["Unity (2d)", Unity, 80],
];

export default function SkillSet() {
  const SkillElements = Skills.map((skill) => MakeSkill(skill));
  return SkillElements;
}

function MakeSkill(skill) {
  return (
    <div className={`skill ${skill[2] < 30 ? "noSkill" : ""}`} key={nanoid()}>
      <h2 className="skillName">{skill[0]}</h2>
      <img className="skillIcon" src={skill[1]} alt="" />

      <div
        class={`progress skillBar`}
        style={{ width: "80%", placeSelf: "center" }}
      >
        <div
          class="progress-bar gauge fw-bold fs-6 text-dark"
          role="progressbar"
          style={{ width: `${skill[2]}%`, color: "rgba(146, 0, 0, 1)" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {skill[2]}%
        </div>
      </div>
    </div>
  );
}
