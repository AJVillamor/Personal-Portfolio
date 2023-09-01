import React from "react";

const MobileControl = ({ handleButtonClick }) => {
    return (
        <div className="mobile-controls-container">
            <div className="control active-section btn-home"
            onClick={() => handleButtonClick(0, 'btn-home')}>
                <i className="fas fa-home"></i>
            </div>
            <div className="control btn-about"
            onClick={() => handleButtonClick(1, 'btn-about')}>
                <i className="fas fa-info"></i>
            </div>
            <div className="control btn-contact"
            onClick={() => handleButtonClick(2, 'btn-contact')}>
                <i className="fas fa-address-book"></i>
            </div>
            <div className="control btn-portfolio"
            onClick={() => handleButtonClick(0, 'btn-portfolio')}>
                <i className="fas fa-briefcase"></i>
            </div>
        </div>
    );
};

export default MobileControl;
