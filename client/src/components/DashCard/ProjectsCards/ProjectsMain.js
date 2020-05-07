import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import fire from "./../../../config/Fire";
import ProjectsCards from "./ProjectsCards.js";
import "./ProjectsMain.css";
const ProjectsMain = (props) => {
    const [skillsArray, setSkillsArray] = useState([]);
    const [uniqueId, setUniqueId] = useState(0);
    const [numOfCards, setNumOfCards] = useState(0);
    const [userUid, setUserUid] = useState(null);
//------------------------------------------------------------------------------------------------------------------------------
    var db = fire.database(); //reference to database
    var refAbout = db.ref(`${userUid}/ProjectsPage/`); //reference to about
    var refSoftSkills = db.ref(`${userUid}/ProjectsPage/projects`); //reference to the softSkills child of about
//------------------------------------------------------------------------------------------------------------------------------
    const addSkill = () => {
        let skillObj = {
            'id': (uniqueId + 1).toString(),
            'name': "ProjectName",
            'desc': "Description"
        }
        let copySkillsArray = [...skillsArray];
        copySkillsArray.push(skillObj); //Add the newly created obj at the end of the array
        setNumOfCards(numOfCards+1); //Increase num of cards
        setUniqueId(uniqueId+1); //increase the unique Id. I think we should increase this unique Id when we save it in the database or when we add it we can save in the database itself
        setSkillsArray(copySkillsArray); //set the skills array equal to the copied array with added skillsObj
        refAbout.child('projects').child(uniqueId + 1).update(
            {
                'name': "ProjectName",
                'desc': "Description"
            }
        );
           
    }
//------------------------------------------------------------------------------------------------------------------------------
    const deleteSkill = (e) => {
        console.log(e.target.id);
        
       //e is the button pressed so to get the id we need e.target.id
        let copyDeleteSkillsArray = [...skillsArray]; //copy the existing array
        refAbout.child('projects').child(e.target.id).remove(); //remove the correct id from the database
        copyDeleteSkillsArray.map((skillElement, index) => {
            if(skillElement.id === e.target.id){
                copyDeleteSkillsArray.splice(index, 1); //delete the required element from the array
            }
        })
        setNumOfCards(numOfCards-1); //Decrease num of cards but don't decrease uniqueId because it has to be the same so that new one can have a new uniqueId
        setSkillsArray(copyDeleteSkillsArray); //set the skills array equal to the copied array with deleted skillsObj
    }
//------------------------------------------------------------------------------------------------------------------------------
    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            }
          }); 
    }, []); //When the page first loads get the user UID and save it in the respective variable
//------------------------------------------------------------------------------------------------------------------------------
    useEffect (() => {
        refSoftSkills.on("value", function(userSnapshot) {
            setSkillsArray([]);
            setNumOfCards(0);
            setUniqueId(0);
            userSnapshot.forEach(function(snapshot) {
                let obj = {
                    'id': snapshot.key,
                    'name': snapshot.child('name').val(),
                    'desc': snapshot.child('desc').val()
                }
                setNumOfCards(numOfCards+1);
                setUniqueId(parseInt(obj.id));
                setSkillsArray(skillsArray => skillsArray.concat(obj));
            });
        });
    }, [userUid]); //When userUid changes, this method is called which will search the database and fill the skills array
//------------------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={12} className="text-center">
                    <Button onClick={addSkill}>Add a new project</Button>
                    </Col>
                    <Col md={12} className="text-center">
                    <br/>
                    </Col>                
                </Row>
            </Container>

            <Container fluid className="bg-danger">
            <Container fluid className="bg-dark ProjectsMainDiv">
            <ProjectsCards
                deleteSkill={deleteSkill}
                useUid = {userUid}
                refAbout = {refAbout}
                skillsArray = {skillsArray}
            />
            </Container>
            </Container>
        </div>
    )
}

export default ProjectsMain;