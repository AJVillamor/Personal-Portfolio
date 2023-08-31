import React from "react";

import ViewControls from "../../Controls/view_controls";

const About = () => {
    const message = 
        "I'm a new computer science graduate, excited to dive into the " + 
        "world of coding. With a strong eagerness to learn and an easy-going "+ 
        "nature, I am ready to tackle challenges head-on.";
    const name = "Adrian";

    return (
        <div className="right-introduction">
            <h1 className="name">
                Hi, I'm <span className="highlight-text">{name}.</span>
            </h1>
            <p>{message}</p>
            <ViewControls />
        </div>
    );
};

export default About;