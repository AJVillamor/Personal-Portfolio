import React, {useState} from "react";

import Introduction from './Introduction/introduction_view';
import Information from './Information/information_view';
import Contact from './Contact/contact_view';
import MainControl from './Controls/main_controls';
// import Portfolio from './Components/Portfolio/portfolio_view'

const Content = () => {
    const pages = [Introduction, Information, Contact]
    const [buttonValue, setButtonValue] = useState(0);

    const handleButtonClick = (value) =>{
        setButtonValue(value);
    }

    const ActivePage = pages[buttonValue];

    return (
        <div className="main-container">
            <ActivePage />
            <MainControl handleButtonClick={handleButtonClick} />
        </div>
    );
};

export default Content;