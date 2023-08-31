import React from "react";

const ViewControls = () => {
    return (
        <div className="view-controls-container">
            <div className="btn-con">
                <a href="https://docs.google.com/document/d/1V0LCzbsaFMYbZa2BngBQb6Id0HEwyDtX8ryhAwfsLC0/edit?usp=drive_link" target="_blank" className="main-btn">
                    <span className="btn-text">Download CV</span>
                    <span className="btn-icon"><i className="fas fa-download"></i></span>
                </a>
            </div>
            <div className="btn-con">
                <a href="https://docs.google.com/document/d/1eQuUlMmphrIO4E6BL5NSIJx2J_8Asoo8OlWbhkHZmcI/edit?usp=sharing" target="_blank" className="main-btn">
                    <span className="btn-text">Cover Letter</span>
                    <span className="btn-icon"><i className="fas fa-eye"></i></span>
                </a>
            </div>
        </div>
    );
};

export default ViewControls;