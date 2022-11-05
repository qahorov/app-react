import React from "react";
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br/> 
                    Aspernatur nihil maxime sapiente laboriosam!
                </span>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>

            {/* right side */}
            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"} 
                    />
                </div>
                {/* second card */}
                <div style={{top: "12rem", left: '-4rem'}}>
                    <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {"Html, Css, JavaScript, React"} 
                    />
                </div>
                {/* 3rd */}
                <div style={{top: "19rem", left: '12rem'}}>
                    <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {"Lorem ipsum dolor sit amet consectetur adipisicing elit."} 
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Services