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
const About = (props) => {
    let react = 75, CSS = 65, HTML = 75, C = 80, Java = 80, JS = 75, Node = 60, Git = 75, Firebase = 70, AS = 40;
    let CSharp = 60, Unity = 60, PHP = 40, Net = 50, MongoDB = 50; 
    const [labelCol, setLabelCol] = useState(2);
    const [progressBarCol, setProgressBarCol] = useState(10);
    const isMobile = useMediaPredicate("(max-width: 768px)");

    const [description, setDescription] = useState(null);
    const [userUid, setUserUid] = useState(null);
    var db = fire.database();
    var refAbout = db.ref(`${userUid}/About`);

    var refEducation = db.ref(`${userUid}/About/Education`);
    const [university, setUniversity] = useState(null);
    const [college, setCollege] = useState(null);
    const [degree, setDegree] = useState(null);
    const [major, setMajor] = useState(null);
    const [gpa, setGpa] = useState(null);

    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            } else {
            }
          }); 
    }, [])

    useLayoutEffect (() => {
        refAbout.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
                if(snapshot.key === "description"){
                    setDescription(snapshot.val());
                }
            });
        });

        refEducation.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
                if(snapshot.key === "collegeName"){
                    setCollege(snapshot.val());
                }else if(snapshot.key === "degree"){
                    setDegree(snapshot.val());
                }else if(snapshot.key === "gpa"){
                    setGpa(snapshot.val());
                }else if(snapshot.key === "major"){
                    setMajor(snapshot.val());
                }else if(snapshot.key === "universityName"){
                    setUniversity(snapshot.val());
                }
            });
        });
    }, [userUid])

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
                    {/* <div className="container-fluid" > */}
                    <img className="img-fluid" src={myImage}></img>
                    {/* </div> */}
                   
                    {/* <div className="squareChild">Square</div> */}
                </div>
            </div>
            <div className="descriptionContainer text-lg-center border-bottom">
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
                <h4 className="headStyle">About Me</h4>
                <Card.Body className="pStyle">{description} 
                </Card.Body>
                </Card>
            </div>
            <div className="gpaContainer bg-dark eduFont border-bottom">
                
                <h4>Education</h4>
                {/* <u>University of Florida, Gainesville, FL</u> */}
                <ul><b><u>{university}</u></b>
                    {/* <li>Bachelor's Degree (December 2020)</li> */}
                    <li>{degree} Degree</li>
                    {/* <li>Computer Science - Herbert Wertheim College of Engineering</li> */}
                    <li>{major} - {college}</li>
                    <li>{gpa}</li>
                </ul>
                <ul><b><u>Valencia Community College, Orlando, FL</u></b>
                    <li>Associates in Arts Degree (August 2018)</li>
                    <li>Computer Science</li>
                    <li>GPA: 4.0</li>
                </ul>
            </div>
            <div className="softSkillsContainer bg-dark eduFont border-bottom">
                
                <h4>Soft Skills</h4>
                <Icon name='university' size='large' />
                <ul>
                    <li>Focused and attentive</li>
                    <li>Hardworking and energetic</li>
                    <li>Friendly</li>
                    <li>Team player</li>
                    <li>Positive and helpful</li>
                    <li>Detail and goal-oriented</li>
                </ul>
            </div>
            {/* vision, professional approach, hobbies */}
            <div className="skillsContainer bg-dark">
                <h4 className="headStyle">Relevant skills</h4>
            
            {/* <div class="row no-gutters">
            <label className="col-sm-1 bg-dark text-white labelHeight">React</label>
            <ProgressBar className="col-sm-11" variant="success" label={`${react}%`} now={40} />
            </div> */}

            <Container fluid className="pStyle">
            <Row>
                <Col xs={labelCol} className="labelHeight">React</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={react} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">CSS</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${CSS}%`} now={CSS} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">HTML</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${HTML}%`} now={HTML} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">JavaScript</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${JS}%`} now={JS} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Node.js</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${Node}%`} now={Node} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Java</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${Java}%`} now={Java} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">C++/C</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${C}%`} now={C} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">C#</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${CSharp}%`} now={CSharp} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Unity</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${Unity}%`} now={Unity} /></Col>
            </Row>
            <div className="smallDivision"></div>
            {/* <Row>
                <Col xs={labelCol} className="labelHeight">Arm Assembly</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div> */}
            {/* <Row>
                <Col xs={labelCol} className="labelHeight">Android Studio</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${AS}%`} now={AS} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">PHP</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${PHP}%`} now={PHP} /></Col>
            </Row>
            <div className="smallDivision"></div> */}
            <Row>
                <Col xs={labelCol} className="labelHeight">.Net</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${Net}%`} now={Net} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">MongoDB</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${MongoDB}%`} now={MongoDB} /></Col>
            </Row>
            <div className="smallDivision"></div>
            {/* <Row>
                <Col xs={labelCol} className="labelHeight">Restful API's</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row>
            <div className="smallDivision"></div> */}
            <Row>
                <Col xs={labelCol} className="labelHeight">Firebase</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${Firebase}%`} now={Firebase} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Git</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${Git}%`} now={Git} /></Col>
            </Row>
            {/* <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Various IDE's</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${react}%`} now={40} /></Col>
            </Row> */}
            <Row>
            <div className="bigDivision"></div>
            </Row>
            </Container>
            </div>
            <Container fluid className="bg-white lastfoot text-center">
                <Row>
                    <Col sm={12}>
                    <Footer/>
                    </Col>
                </Row>
               
            </Container>
        </div>
    );
}
export default About;