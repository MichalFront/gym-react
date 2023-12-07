import React from "react";
import aboutimage from '../images/about1.jpg';

function About(){
    return(
        <div id="about">
            <div className="about-image">
                <img src={aboutimage} alt=""></img>
            </div>
            <div className="about-text">
                <h1>Learn more about us</h1>
                <p>Start training today</p>
                <button>Read more</button>
            </div>
        </div>
    );
}

export default About;