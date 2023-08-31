import React from "react";

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

    return (
        <div className="skills-container">
            {SkillSet.map((category, index) => (
                <div key={index} className="skill-item">
                    <h4 className="stat-title">{category.topic}</h4>
                    {category.skills.map((skill, item) => (
                        <div key={item} className="progress-bars">
                            <div className="progress-bar">
                                <p className="prog-title">{skill.title}</p>
                                <div className="progress-con">
                                    <div className="progress">
                                        <p className="prog-text">{skill.prof}%</p>
                                        <span className={`prog-${index}`} style={{width: `${skill.prof}%`}} ></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                // ));
                // <div key={index} className="skill-item">
                //     <h4 className="stat-title">{element.topic}</h4>
                // </div>
            ))}
            {/* <div className="prog-languages skill-item">
                <h4 className="stat-title">Programming Languages</h4>
                    <div className="progress-bars">
                        {ProgLang.map((element, index) => (
                            <div key={index} className="progress-bar">
                                <p className="prog-title">{element.title}</p>
                                <div className="progress-con">
                                    <div className="progress">
                                        <p className="prog-text">{element.prof}%</p>
                                        <span className="c prog-lang" style={{width: `${element.prof}%`}} ></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            </div> */}
        </div>
    );
};

export default Skills;