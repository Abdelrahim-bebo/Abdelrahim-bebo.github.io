import React from "react";
import {techStack} from "../../portfolio";
import "./SkillProgress.scss";

export default function SkillProgress() {
  const isFullWidth = techStack.fullWidth === true;

  return (
    <div className={["skill-progress", isFullWidth ? "full-width" : ""].join(" ")}>
      <h2>{techStack.title}</h2>
      <div className="skill-progress-bars">
        {techStack.experience.map((skill, index) => (
          <div className="skill-bar" key={index}>
            <div
              className="skill-percentage"
              style={{width: skill.progressPercentage}}
            >
              <span className="skill-name">{skill.Stack}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}