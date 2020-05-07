import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PCard from "./../Contact Me/PCard.js";
import image2 from "./home.png";
const ProjectsRow = (props) => {
    let Rows = [];
    props.projectsArray.map((project, index) => {
        Rows.push(
        <Row fluid className="bg-danger">
            <PCard
            image={image2}
            title={project.name}
            desc={project.desc}/>
        </Row>
        )
    })
    return (Rows);
}

export default ProjectsRow