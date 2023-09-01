import React, {useState} from "react";

import Introduction from './Introduction/introduction_view';
import Information from './Information/information_view';
import Contact from './Contact/contact_view';
import MainControl from './Controls/main_controls';
import MobileControl from "./Controls/mobile_controller";
// import Portfolio from './Components/Portfolio/portfolio_view'

const Content = () => {
    const pages = [Introduction, Information, Contact];
    const [buttonValue, setButtonValue] = useState(0);

    const handleButtonClick = (value, id) =>{
        setButtonValue(value);

        const currentActive = [...document.querySelectorAll('.active-section')];
        const setActive = [...document.querySelectorAll('.'+id)];

        currentActive.map((cA) => {
            cA.classList.remove('active-section');
        });
        setActive.map((sA) => {
            sA.classList.add('active-section');
        })
    }

    const ActivePage = pages[buttonValue];

    return (
        <>
            <div className="main-container">
                <ActivePage className="active-page"/>
            </div>
            <MainControl handleButtonClick={handleButtonClick} />
            <MobileControl handleButtonClick={handleButtonClick} />
        </>
    );
};

export default Content;