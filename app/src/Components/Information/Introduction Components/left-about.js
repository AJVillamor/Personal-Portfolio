import React from "react";

import ViewControls from '../../Controls/view_controls';

const LeftAbout = () => {
    return (
        <div className="left-about">
            {/* <h4>Information About <span>me</span></h4> */}
            <p>
                In the realm of code, I'm a recent computer science graduate driven by problem solving. 
                Outside the classroom, I immerse myself in programming challenges, unraveling complexities 
                to hone my skills. Attention to detail is my mantra, ensuring software aligns with top-tier standards.
                <br></br>
                Adaptability defines me as I embrace the rapid tech evolution, avidly learning to stay relevant. 
                Beyond the screen, I'm a cycling and fitness enthusiast. Pedaling through challenges parallels my coding 
                journey, while workouts fuel not only my body, but also my determination. My world fuses coding prowess, 
                precision, adaptability, and holistic growth. This graduate is ready to contribute, learn, and pedal towards 
                innovation.
            </p>
            <ViewControls />
        </div>
    );
};

export default LeftAbout;