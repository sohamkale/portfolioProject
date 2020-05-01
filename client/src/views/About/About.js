import React, { useEffect, useState } from "react"
import "./About.css";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import { Progress } from 'semantic-ui-react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ResumeCard from "./../../components/ResumeCard/ResumeCard";
import image from "../../components/image/backImage2.jpg"
import myImage from "./pic.png"
import { useMediaPredicate } from "react-media-hook";
const About = (props) => {
    let react = 90;
    const [labelCol, setLabelCol] = useState(2);
    const [progressBarCol, setProgressBarCol] = useState(10);
    const isMobile = useMediaPredicate("(max-width: 768px)");
    useEffect(() => {
        if(isMobile){
            setLabelCol(3);
            setProgressBarCol(9);
        }else{
            setLabelCol(2);
            setProgressBarCol(10); 
        }
      }, [isMobile]);

    return (
        <div className="mainContainer">
            
            <div className="imageContainer bg-dark">
                <div className="square">
                    <div className="container-fluid" >
                    <img className="squareChild" src={myImage}></img>
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
                <br/>
                <Card.Title>About Me</Card.Title>
                <Card.Body>I am Soham Kale. I am currently a Senior at University of Florida. 
                   I plan on graduating in Fall 2020. I am looking for a full-time job opportunity starting from Spring 2021. 
                   I am very passionate about computer science. 
                </Card.Body>
                </Card>
            </div>
            <div className="skillsContainer">skillsContainer
            
            {/* <div class="row no-gutters">
            <label className="col-sm-1 bg-dark text-white labelHeight">React</label>
            <ProgressBar className="col-sm-11" variant="success" label={`${react}%`} now={40} />
            </div> */}

            <Container fluid>
            <Row>
                <Col xs={labelCol} className="labelHeight">React</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">CSS</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">HTML</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">JavaScript</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Node.js</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Java</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">C++/C</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">C#</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Unity</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Arm Assembly</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Android Studio</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">PHP</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">.Net</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">MongoDB</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Restful API's</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Firebase</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Git</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Various IDE's</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            </Container>
            
            
            </div>
           
        </div>
    );
}
export default About;