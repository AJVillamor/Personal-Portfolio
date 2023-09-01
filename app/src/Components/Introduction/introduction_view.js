import React from 'react';

import Profile from './Introduction Components/profile';
import About from './Introduction Components/about';

const Introduction = () => {
    return (
        <div className= "introduction-container page" id= "home">
            <Profile />
            <About />
        </div>
    );
};

export default Introduction;