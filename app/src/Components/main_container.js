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

    const handleModeButon = () => {
        const activeMode = document.querySelector('.active-mode');
        const reserveMode = document.querySelector('.reserve-mode');

        activeMode.classList.remove('active-mode');
        activeMode.classList.add('reserve-mode');

        reserveMode.classList.remove('reserve-mode');
        reserveMode.classList.add('active-mode');
        document.body.classList.toggle("light-mode");
    }

    const ActivePage = pages[buttonValue];

    return (
        <>
            <div className="main-container">
                <ActivePage className="active-page"/>
            </div>
            <MainControl handleButtonClick={handleButtonClick} handleModeButon={handleModeButon}/>
            <MobileControl handleButtonClick={handleButtonClick} handleModeButon={handleModeButon} />
        </>
    );
};

export default Content;