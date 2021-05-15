import React from "react";
import github from "../../img/github.png"
import style from "./about.module.css"


function About(){
    return (
        <div className={style.about}>
            <a href="https://github.com/dariovelazquez7?tab=projects" rel="noreferrer" target="_blank">
            <img src={github} alt="github" width="300" height="300"/>
            </a>
            
        </div>
    )
}
export default About;