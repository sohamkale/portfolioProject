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
import AboutUniversities from "./AboutUniversities";
import AboutSoftSkills from "./AboutSoftSkills";
import AboutRelevantSkills from "./AboutRelevantSkills";
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
    var refSoftSkills = db.ref(`${userUid}/About/softSkills`);
    var refRelevantSkills = db.ref(`${userUid}/About/RelevantSkills`);

    const [eduCardsArray, setEduCardsArray] = useState([]);
    const [actualEduCardsArray, setActualEduCardsArray] = useState([]);

    const [AboutSoftSkillsArray, setAboutSoftSkillsArray] = useState([]);
    const [AboutRelevantSkillsArray, setAboutRelevantSkillsArray] = useState([]);
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
    }, [userUid])


    useLayoutEffect (() => {
        // alert("in setEduCards");
        refEducation.on("value", function(userSnapshot) {
            let shouldSetToZero = true;
            userSnapshot.forEach(function(snapshot) {
                let a, b, c, d, e;
                shouldSetToZero = false;
                snapshot.forEach(function(snap) {
                    if(snap.key === "collegeName"){
                        a = snap.val();
                    }else if(snap.key === "degree"){
                        b = snap.val();
                    }else if(snap.key === "gpa"){
                        c = snap.val()
                    }else if(snap.key === "major"){
                        d = snap.val()
                    }else if(snap.key === "universityName"){
                        e = snap.val();
                    }
                })
                setEduCardsArray(eduCardsArray.concat({
                    'id': snapshot.key,
                    'university': e,
                    'college': a,
                    'degree': b,
                    'major': d,
                    'gpa': c,
                }))
            });
        });

        refSoftSkills.on("value", function(userSnapshot) {
            setAboutSoftSkillsArray([]);
            userSnapshot.forEach(function(snapshot) {
                let obj = {
                    'id': snapshot.key,
                    'skill': snapshot.child('skill').val(),
                }
                setAboutSoftSkillsArray(AboutSoftSkillsArray => AboutSoftSkillsArray.concat(obj));
            });
        });

        refRelevantSkills.on("value", function(userSnapshot) {
            setAboutRelevantSkillsArray([]);
            userSnapshot.forEach(function(snapshot) {
                let obj = {
                    'id': snapshot.key,
                    'relevantSkill': snapshot.child('relevantSkill').val(),
                    'percent': snapshot.child('percent').val()
                }
                setAboutRelevantSkillsArray(AboutRelevantSkillsArray => AboutRelevantSkillsArray.concat(obj));
            });
        });

    }, [userUid])


    useLayoutEffect (() => {
        if(eduCardsArray != null && eduCardsArray != "" && eduCardsArray.length != 0){
             setActualEduCardsArray(actualEduCardsArray.concat(eduCardsArray))
        }else if (eduCardsArray != null && eduCardsArray != ""){
            console.log(eduCardsArray);
        }
    }, [eduCardsArray])


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
                    <img className="img-fluid" src={myImage}></img>
                </div>
            </div>
            <div className="descriptionContainer text-lg-center border-bottom">
                <Card style={{width: "100%"}} bg={'dark'} text={'white'}>
                <br/>
                <h4 className="headStyle">About Me</h4>
                <Card.Body className="pStyle">{description} 
                </Card.Body>
                </Card>
            </div>
            <div className="gpaContainer bg-dark eduFont border-bottom">
                
                <h4>Education</h4>
                <AboutUniversities actualEduCardsArray={actualEduCardsArray}/>
            </div>
            <div className="softSkillsContainer bg-dark eduFont border-bottom">
                
                <h4>Soft Skills</h4>
                <Icon name='university' size='large' />
                <AboutSoftSkills Array={AboutSoftSkillsArray}/>
            </div>
            {/* vision, professional approach, hobbies */}
            <div className="skillsContainer bg-dark">
                <h4 className="headStyle">Relevant skills</h4>
            
            <Container fluid className="pStyle">
            {/* <Row>
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
            
            <Row>
                <Col xs={labelCol} className="labelHeight">Firebase</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${Firebase}%`} now={Firebase} /></Col>
            </Row>
            <div className="smallDivision"></div>
            <Row>
                <Col xs={labelCol} className="labelHeight">Git</Col>
                <Col xs={progressBarCol}><ProgressBar variant="success" label={`${Git}%`} now={Git} /></Col>
            </Row> */}
            <AboutRelevantSkills 
            labelCol={labelCol}
            progressBarCol={progressBarCol}
            Array={AboutRelevantSkillsArray}/>
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