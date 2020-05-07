import React, { useEffect, useState, useLayoutEffect } from "react"
import { MDBIcon } from "mdbreact";
import myImage from "./pic.png";
import Footer from "./../../components/Footer/Footer.js";
import { Icon } from 'semantic-ui-react';
import fire from "../../config/Fire";
import { useMediaPredicate } from "react-media-hook";

const AboutSoftSkills = (props) => {
     let AboutSoftSkillsArray = [];
     props.Array.map((element, index) => {
        AboutSoftSkillsArray.push(  
            <li>{element.skill}</li>      
        )
     })
    return (<ul>{AboutSoftSkillsArray}</ul>);
}

export default AboutSoftSkills;