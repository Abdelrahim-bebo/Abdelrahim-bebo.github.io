import React from "react";
import "./About.scss";
import { aboutSection } from "../../portfolio";

export default function About() {
  if (!aboutSection.display) {
    return null;
  }
  return (
    <div className="main" id="about">
      <div className="about-main">
        <div className="about-text-div">
          <h1 className="about-title">{aboutSection.title}</h1>
          <p className="about-text">{aboutSection.content}</p>
        </div>
      </div>
    </div>
  );
}
