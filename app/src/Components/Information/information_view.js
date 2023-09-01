import React from "react";

import LeftAbout from "./Introduction Components/left-about";
import RightAbout from "./Introduction Components/right-about";
import MySkills from "./Introduction Components/skills-section";
import Timeline from "./Introduction Components/timeline-section";


const Information = () =>{
    return (
        <div className="information-container active-page page" id="about">
            <div className="main-title">
                <h2>About <span>Me</span><span className="bg-text">Stats</span></h2>
            </div>
            <div className="about-container">
                <LeftAbout />
                <RightAbout />
            </div>
            <div className="about-stats">
                <h4 className="stat-title divider">My Skills</h4>
                <MySkills />
            </div>
            <div className="about-timeline">
                <h4 className="stat-title divider">My Timeline</h4>
                <Timeline />
            </div>
        </div>
    );
};

export default Information;