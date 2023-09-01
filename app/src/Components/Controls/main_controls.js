import React from "react";

const MainControl = ({ handleButtonClick }) => {
    return (
        <div className="controls-container">
            <div className="control active-section btn-home"
            onClick={() => handleButtonClick(0, 'btn-home')}>
                <span>home</span>
                <div className="line"></div>
            </div>
            <div className="control btn-about"
            onClick={() => handleButtonClick(1, 'btn-about')}>
                <span>about</span>
                <div className="line"></div>
            </div>
            <div className="control btn-contact"
            onClick={() => handleButtonClick(2, 'btn-contact')}>
                <span>contact</span>
                <div className="line"></div>
            </div>
            <div className="control btn-portfolio"
            onClick={() => handleButtonClick(0, 'btn-portfolio')}>
                <span>portfolio</span>
                <div className="line"></div>
            </div>
        </div>
    );
};

export default MainControl;
