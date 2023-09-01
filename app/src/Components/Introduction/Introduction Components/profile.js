import React, { useState, useEffect } from 'react';

import TogaImg from "../../../Images/toga.jpg";
import CreativeImg from "../../../Images/creative.jpg";

const Profile = () => {
    const images = [TogaImg, CreativeImg];

    // Initialize state to keep track of the currently displayed image
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to cycle through the images
    const cycleImages = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    
    };
    useEffect(() => {
        // Set up an interval to change the image every 3 seconds
        const intervalId = setInterval(cycleImages, 3000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="left-introduction">
            <div className="h-shape"></div>
            <div className="image-container">
                <img src={images[currentImageIndex]} alt="Not Found" />
            </div>
            
        </div>
    );
};

export default Profile;