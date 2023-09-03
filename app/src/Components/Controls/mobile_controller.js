import React from "react";

const MobileControl = ({ handleButtonClick }) => {
    return (
        <div className="mobile-controls-container">
            <div className="control active-section btn-home"
            onClick={() => handleButtonClick(0, 'btn-home')}>
                <div className="icon-holder ">
                    <i className="fas fa-home"></i></div>
                </div>
            <div className="control btn-about"
            onClick={() => handleButtonClick(1, 'btn-about')}>
                <div className="icon-holder holder-active">
                    <i className="fas fa-info"></i>
                </div>
            </div>
            <div className="control btn-contact"
            onClick={() => handleButtonClick(2, 'btn-contact')}>
                <div className="icon-holder">
                    <i className="fas fa-address-book"></i></div>
                </div>
            <div className="control btn-portfolio"
            onClick={() => handleButtonClick(0, 'btn-portfolio')}>
                <div className="icon-holder">
                    <i className="fas fa-briefcase"></i></div>
                </div>
        </div>
    );
};

export default MobileControl;
