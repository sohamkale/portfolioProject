import React, { useEffect, useState, useLayoutEffect } from "react"
import {Container, Row, Col} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
const AboutRelevantSkills = (props) => {
     let AboutRelevantSkills = [];
     props.Array.map((element, index) => {
        AboutRelevantSkills.push(  
            <div>
            <Row>
                <Col xs={props.labelCol} className="labelHeight">{element.relevantSkill}</Col>
                <Col xs={props.progressBarCol}><ProgressBar variant="success" label={`${parseInt(element.percent)}%`} now={parseInt(element.percent)} /></Col>
            </Row>  
            <div className="smallDivision"></div>
            </div>
        )
     })
    return (AboutRelevantSkills);
}

export default AboutRelevantSkills;