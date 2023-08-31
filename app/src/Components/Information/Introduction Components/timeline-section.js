import React from "react";


const Timeline = () => {
    return (
            <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-school"></i>
                    </div>
                    <p className="tl-duration">6/2017 - 4/2019</p>
                    <h5>Programming student<span> - Camarines Sur National High School</span></h5>
                    <p>
                        Developed 2 educational games as school project.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-user-graduate"></i>
                    </div>
                    <p className="tl-duration">7/2019 - 6/2023</p>
                    <h5>BS Computer Science<span> - Ateneo de Naga University</span></h5>
                    <p>
                        Developed 2 games, 1 scheduler mobile application, and a query-based chatbot(thesis).
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">7/2022 - 8/2022</p>
                    <h5>Intern - Web developer<span> - Ateneo de Naga University - College of Computer Studies</span></h5>
                    <p>
                        Successfully migrated a major component of the website, contributing to the project's efficiency.
                    </p>
                </div>
            </div>
    );
};

export default Timeline;