import React, {useRef, useEffect, useState} from "react";

const Skills = () =>{
    const SkillSet = [
        {
            topic: "Programming Languages",
            skills:
                [       
                    {title: "c#", prof: 50}, 
                    {title: "c++", prof: 70},
                    {title: "java", prof: 45}, 
                    {title: "python", prof: 75}
                ],
        },
        {
            topic: "Web Development",
            skills:
                [
                    {title: "css", prof: 85}, 
                    {title: "html", prof: 90},
                    {title: "javascript", prof: 75}, 
                    {title: "reactJS", prof: 40},
                    {title: "typescript", prof: 20}
                ]    
        },
        {
            topic: "Software Development",
            skills:
                [
                    {title: "agile methodologies", prof: 55}, 
                    {title: "git version control", prof: 70}
                ]    
        },
        {
            topic: "Operating System",
            skills:
                [
                    {title: "windows", prof: 85}, 
                    {title: "Linux", prof: 45}
                ]    
        },
        {
            topic: "Tools",
            skills:
                [
                    {title: "github desktop", prof: 80}, 
                    {title: "visual studio code", prof: 90}
                ]    
        },
        {
            topic: "Problem Solving",
            skills:
                [
                    {title: "analytical thingking", prof: 75}, 
                    {title: "logical reasoning", prof: 55}
                ]    
        },
        {
            topic: "Database",
            skills:
                [
                    {title: "sql", prof: 60}
                ]    
        },
    ];

    const middleOfViewport = window.innerHeight / 2;
    const [focus, setFocus] = useState(null);
    const previousFocus = useRef(0);

    useEffect(() => {
        previousFocus.current = focus; 
    }, [focus]);

    useEffect(() => { 
        const handleScroll = () => {        
            const topElement = document.querySelector(`#skill-item-${0}`).getBoundingClientRect();
            const botElement = document.querySelector(`#skill-item-${SkillSet.length-1}`).getBoundingClientRect();

            const isNoFocus = topElement.top > middleOfViewport || botElement.bottom < middleOfViewport;
            
            // console.log(isNoFocus)
            SkillSet.forEach((category, index) => {
                const element = document.querySelector(`#skill-item-${index}`);

                if (element) {
                    const elementRect = element.getBoundingClientRect();
                    const isElementInMiddle =
                        elementRect.top < middleOfViewport &&
                        elementRect.bottom > middleOfViewport;

                    if (isElementInMiddle && index !== previousFocus.current) {
                        setFocus(index);
                        element.classList.add('skill-focus');
                        if(previousFocus.current != null){
                            const prevElement = document.querySelector(`#skill-item-${previousFocus.current}`);
                            prevElement.classList.remove('skill-focus');
                        }
                    }
                    if(isNoFocus === true){
                        setFocus(null);
                        if(previousFocus.current === 0){
                            document.querySelector(`#skill-item-${0}`).classList.remove('skill-focus');
                        }
                        if(previousFocus.current === SkillSet.length-1){
                            document.querySelector(`#skill-item-${SkillSet.length-1}`).classList.remove('skill-focus');     
                        }
                    } 
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="skills-container">
        {SkillSet.map((category, index) => (
            <div key={index} className="skill-item" id={`skill-item-${index}`}>
            <h4 className="stat-title">{category.topic}</h4>
            {category.skills.map((skill, item) => (
                <div key={item} className="progress-bars">
                <div className="progress-bar">
                    <p className="prog-title">{skill.title}</p>
                    <div className="progress-con">
                    <div className="progress">
                        <p className="prog-text">{skill.prof}%</p>
                        <span
                        className={`prog-${index}`}
                        style={{ width: `${skill.prof}%` }}
                        ></span>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        ))}
        </div>
    );
    };

export default Skills;