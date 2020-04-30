import React, { useEffect, useState } from "react"
import "./About.css";
import Card from 'react-bootstrap/Card';
import ResumeCard from "./../../components/ResumeCard/ResumeCard";
import image from "../../components/image/backImage2.jpg"
const About = (props) => {
    return (
        <div className="mainContainer">
            About
            
            <div className="imageContainer">
                <div className="square">
                    <div className="container-fluid bg-danger" >
                    <img className="squareChild" src={image}></img>
                    </div>
                   
                    {/* <div className="squareChild">Square</div> */}
                </div>
            </div>
            <div className="descriptionContainer">
                {/* <div className="pStyle">
                    <h3>About Me!</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                </div> */}
                <Card style={{width: "100%"}} bg={'dark'} text={'white'}>
                <Card.Title>About Me</Card.Title>
                <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Body>
                </Card>
            </div>
            <div className="skillsContainer">skillsContainer</div>

        </div>
    );
}
export default About;