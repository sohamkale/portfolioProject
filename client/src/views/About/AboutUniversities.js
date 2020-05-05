import React, { useEffect, useState, useLayoutEffect } from "react"
import "./About.css";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import { Progress } from 'semantic-ui-react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ResumeCard from "./../../components/ResumeCard/ResumeCard";
import image from "../../components/image/backImage2.jpg"
import { MDBIcon } from "mdbreact";
import myImage from "./pic.png";
import Footer from "./../../components/Footer/Footer.js";
import { Icon } from 'semantic-ui-react';
import fire from "../../config/Fire";
import { useMediaPredicate } from "react-media-hook";

const AboutUniversities = (props) => {
     let arrayOfUniversities = [];
     props.actualEduCardsArray.map((element, index) => {
        arrayOfUniversities.push(
        <ul><b><u>{element.university}</u></b>
        {/* <li>Bachelor's Degree (December 2020)</li> */}
        <li>{element.degree} Degree</li>
        {/* <li>Computer Science - Herbert Wertheim College of Engineering</li> */}
        <li>{element.major} - {element.college}</li>
        <li>{element.gpa}</li>
        </ul>
        )
    
      
     })
    return (arrayOfUniversities);
}

export default AboutUniversities;