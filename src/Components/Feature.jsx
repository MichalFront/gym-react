import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Feature(){
    return(
        <div id="features">
            <h1>FEATURES</h1>
            <div className="a-container">
                <Featurebox image={fimage1} title="Weightlifting" description="Discipline of heavy athletics in which the athlete lifts."/>
                <Featurebox image={fimage2} title="Specific Muscle" description="The training is tailored to you. Come to us and check yourself."/>
                <Featurebox image={fimage3} title="Flex Your Muscle" description="Your friends will notice your transformation after a month. "/>
                <Featurebox image={fimage4} title="Cardio Exercise" description="Which are the most common cardiovascular exercises? "/>
            </div>
        </div>
    );
}

export default Feature;