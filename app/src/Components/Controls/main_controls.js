import React from "react";

const MainControl = ({ handleButtonClick }) => {
    return (
        <div className="controls-container">
            <button className="button control home"
                data-id="home" onClick={() => handleButtonClick(0)}>
                <i className="fas fa-home"></i>
            </button>
            <button className="control about"
                data-id="about" onClick={() => handleButtonClick(1)}>
                <i className="fas fa-info"></i>
            </button>
            <button className="control contact"
                data-id="contact" onClick={() => handleButtonClick(2)}>
                <i className="fas fa-address-book"></i>
            </button>
            <button className="control portfolio"
                data-id="portfolio" onClick={() => handleButtonClick(0)}>
                <i className="fas fa-briefcase"></i>
            </button>
        </div>
    );
};

export default MainControl;
