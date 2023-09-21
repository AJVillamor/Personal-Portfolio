import React from "react";

const Contact = () =>{
    return(
        <div className="contact-container page" id="contact">
            <div className="main-title">
                <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
            </div>
            <div className="contact-content-con">
                <div className="left-contact">
                    <p>
                        Interested in exploring how my skills align with your team? Connect and 
                        <span className="mail"><a href="mailto:adrianjosephvillamor@gmail.com"> contact 
                        <span className="me"> me</span></a></span> to discuss potential 
                        contributions.
                    </p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="icon">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Naga City, Camarines Sur, Philippines</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <i className="fas fa-envelope"></i>
                                <span className="mail"><a href="mailto:adrianjosephvillamor@gmail.com">adrianjosephvillamor@gmail.com</a></span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <i className="fas fa-user-graduate"></i>
                                <span>Ateneo de Naga University</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <i className="fas fa-mobile"></i>
                                <span>+63 2 8284 8869</span>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <i className="fas fa-globe-africa"></i>
                                <span>English, Tagalog</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-icons">
                        <div className="contact-icon">
                            <a href="https://www.facebook.com/adrian.villamor.28/" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://github.com/AJVillamor" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;