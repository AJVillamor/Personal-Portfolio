import React from 'react';

import Profile from './Introduction Components/profile';
import About from './Introduction Components/about';
import MainControls from '../Controls/main_controls';

const Introduction = () => {
    return (
        <div className= "introduction-container main-introduction main-content" id= "home">
            <Profile />
            <About />
            <MainControls />
        </div>
    );
};

export default Introduction;