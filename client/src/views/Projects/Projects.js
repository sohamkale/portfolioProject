import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "./Projects.css";
const Projects = (props) => {
    return (
        <div className="projectContainer">
            <div className="project1">
            Project 1
            </div>
            <div className="project2">
            Project 2 
            </div>
            <div className="project3">
            project 3
            </div>
        </div>
        
    );
}
export default Projects;