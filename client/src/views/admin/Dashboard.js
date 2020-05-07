import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import DashCard from "../../components/DashCard/DashCard";
import AboutCard from "../../components/DashCard/AboutCard/AboutCard";
import FooterCard from "../../components/DashCard/FooterCard/FooterCard";
import FooterLinks from "../../components/DashCard/FooterCard/FooterLinks";
import EdCard from "../../components/DashCard/AboutCard/EdCard";
import SoftSkillsCard from "../../components/DashCard/AboutCard/SoftSkillsCard";
// import EduCard from "../../components/DashCard/AboutCard/EduCard";
import fire from "../../config/Fire";
import { useId } from "react-id-generator";
import "./Dashboard.css";
const Dashboard = (props) => {
    const [numOfCards, setNumOfCards] = useState(0);
    const [uniqueIdCount, setUniqueIdCount] = useState(0);
    const [userUid, setUserUid] = useState(null);
    const [uniCardsArray, setUniCardsArray] = useState([]); //array to hold universityNames

    var db = fire.database();
    var refEducation = db.ref(`${userUid}/About/Education`);
    var refAbout = db.ref(`${userUid}/About`);

    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            }
          }); 
    }, []);

    useEffect (() => {
        refEducation.on("value", function(userSnapshot) {
            setUniCardsArray([]);
            setNumOfCards(0);
            setUniqueIdCount(0);
            userSnapshot.forEach(function(snapshot) {
                // setSingleSkill({
                //     'id': snapshot.key,
                //     'skill': snapshot.child('skill').val(),
                // })
                let newObject = {
                    'id': snapshot.key,
                    'collegeName': snapshot.child('collegeName').val(),
                    'universityName': snapshot.child('universityName').val(),
                    'major': snapshot.child('major').val(),
                    'gpa': snapshot.child('gpa').val(),
                    'degree': snapshot.child('degree').val()
                }
                setNumOfCards(numOfCards+1);
                setUniqueIdCount(parseInt(newObject.id));
                setUniCardsArray(uniCardsArray => uniCardsArray.concat(newObject));
            });
        });
    }, [userUid]);

    const addUniversity = (e) => {
        let newAddArray = [...uniCardsArray]; //made a copy of the university array
        let uniObj = {
            'id': (uniqueIdCount + 1).toString(),
            'collegeName': "college",
            'universityName': "university",
            'major': "major",
            'gpa': "0.00",
            'degree': "degree"
        } //new obj created to be inserted into the existing array
        newAddArray.push(uniObj);
        setNumOfCards(numOfCards+1); //increase the number of cards
        setUniqueIdCount(uniqueIdCount + 1); //increae the uniqueIdCount
        setUniCardsArray(newAddArray); //Set the university array equal to the newly created array with added object
        refAbout.child('Education').child(uniqueIdCount + 1).update(
            {
                'collegeName': "college",
                'universityName': "university",
                'major': "major",
                'gpa': "0.00",
                'degree': "degree"
            } 
        );
    }
//----------------------------------------------------------------------------------------------------------------------------
    const deleteUniversity = (e) => {
        let newDeleteArray = [...uniCardsArray]; //made a copy of the university array
        newDeleteArray.map((delUni, index) => {
            if(delUni.id === e.target.id){
                newDeleteArray.splice(index, 1);
            }
        })
        setNumOfCards(numOfCards+1); //Decrease the number of cards
        setUniCardsArray(newDeleteArray); //Set the university array equal to the newly created array without deleted object
        refAbout.child('Education').child(e.target.id).remove(); //remove the child from the database
    }
//----------------------------------------------------------------------------------------------------------------------------
    


    return (
        <div className="fullWidthDiv">
            <Container fluid className="bg-dark">
                <Row className="bg-info">
                    <Col mb={12}>
                        <DashCard/>
                    </Col>
                </Row>
                <Row className="text-center text-white">Update About Page</Row>
                <Row className="text-center text-white"><Button onClick={addUniversity}>Add Previous University</Button></Row>
                <Row className="bg-danger">
                    <Col mb={6}>
                        <AboutCard/>
                    </Col>
                    <Col mb={6}>
                        <EdCard
                        userUid={userUid}
                        refAbout={refAbout}
                        refEducation={refEducation}
                        deleteUniversity={deleteUniversity}
                        eduCardsArray={uniCardsArray}/>
                    </Col>
                </Row>
                <Row className="bg-dark">
                    <Col mb={6}>
                        <FooterCard/>
                    </Col>
                    <Col mb={6}>
                        <FooterLinks/>
                    </Col>
                </Row>                
            </Container>
        </div>
    );

}

export default Dashboard;