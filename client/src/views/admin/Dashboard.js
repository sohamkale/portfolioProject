import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import DashCard from "../../components/DashCard/DashCard";
import AboutCard from "../../components/DashCard/AboutCard/AboutCard";
import FooterCard from "../../components/DashCard/FooterCard/FooterCard";
import FooterLinks from "../../components/DashCard/FooterCard/FooterLinks";
import EdCard from "../../components/DashCard/AboutCard/EdCard";
import SoftSkillsCard from "../../components/DashCard/AboutCard/SoftSkillsCard";
import ProjectsMain from "../../components/DashCard/ProjectsCards/ProjectsMain";
import SoftSkillsRow from "../../components/DashCard/AboutCard/SoftSkills";
import RelevantSkillsRow from "../../components/DashCard/AboutCard/RelevantSkills";
import AboutImage from "../../components/DashCard/AboutCard/AboutImage";
import HomeImageCard from "../../components/DashCard/Card/homeCard";
import ResumeCard from "../../components/DashCard/ResumeCard/ResumeCard";
import ProfilePic from "../../components/image/profilePic.png";
import DeleteConfirmation from "../../components/DelConfirmationBox/DeleteConfirmation";
// import EduCard from "../../components/DashCard/AboutCard/EduCard";
import fire, {storage} from "../../config/Fire";
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
    var refUserAccountDB = db.ref(`${userUid}`);
    var refUserAccountStorage = storage.ref(`images/${userUid}`);

    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            }
          }); 
    }, []);

    const logout = () => {
        fire.auth().signOut();
    }

    useEffect (() => {
        refEducation.on("value", function(userSnapshot) {
            setUniCardsArray([]);
            setNumOfCards(0);
            setUniqueIdCount(0);
            userSnapshot.forEach(function(snapshot) {
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
                    <Col className="bg-dark text-white RowDivFlex">
                    <Image fluid className="ProfilePicDiv" src={ProfilePic}></Image>
                    </Col>
                </Row>
                <Row className="border-bottom mb-2">
                    <Col xl={12} className="RowDivFlex">
                        <Container fluid className="text-center">
                            <button type="button" onClick={logout} class="LogoutDeleteButton btn btn-primary mt-2 mb-2">Logout</button>
                        </Container>
                    </Col>
                    <Col xl={12} className="RowDivFlex">
                        <Container fluid className="text-center">
                            <DeleteConfirmation></DeleteConfirmation>
                        </Container>
                    </Col>
                </Row>
                <Row className="bg-info">
                    <Col className="bg-dark text-white RowDivFlex">
                    <h2>Home Page</h2>
                    </Col>
                </Row>
                <Row className="bg-info">
                    <Col mb={6} className="RowDivFlex columnMargins">
                        <DashCard/>
                    </Col>
                    <Col mb={6} className="RowDivFlex columnMargins">
                        <HomeImageCard/>
                    </Col>
                </Row>
                
                <Row className="text-center RowDivFlex text-white"><h2>About Page</h2></Row>
                <Row className="bg-danger">
                    <Col mb={6} className="RowDivFlex columnMargins">
                        <AboutCard/>
                    </Col>
                    <Col mb={6} className="RowDivFlex columnMargins">
                        <AboutImage/>
                    </Col>                    
                </Row>
                
                <Row className="bg-danger RowBorder border-top border-left border-right border-dark">
                
                    <Col xl={12} className="text-center columnMargins">
                        <Button className="mt-2" onClick={addUniversity}>Add Previous University</Button>
                    </Col>
                    <Col mb={12} className="EduCardsDivFlex columnMargins">
                        <EdCard
                        userUid={userUid}
                        refAbout={refAbout}
                        refEducation={refEducation}
                        deleteUniversity={deleteUniversity}
                        eduCardsArray={uniCardsArray}/>
                    </Col>
                </Row>
                <Row className="bg-danger RowBorder border-top border-left border-right border-dark"> 
                    <Col sm={12}>
                        <SoftSkillsRow/>
                    </Col>
                </Row>
                <Row className="bg-danger RowBorder border-top border-left border-right border-dark"> 
                    <Col sm={12}>
                        <RelevantSkillsRow/>
                    </Col>
                </Row>
                <Row className="text-center RowDivFlex text-white"><h2>Projects Page</h2></Row>
                <Row className="bg-info RowBorder">
                    <Col sm={12}>
                        <ProjectsMain/>
                    </Col>
                </Row>
                <Row className="text-center RowDivFlex text-white"><h2>Resume Information</h2></Row>
                <Row className="bg-primary">
                    <Col mb={12} className="EduCardsDivFlex columnMargins">
                        <ResumeCard/>
                    </Col>
                </Row> 
                <Row className="text-center RowDivFlex text-white"><h2>Footer Information</h2></Row>
                <Row className="bg-dark">
                    <Col mb={12} className="EduCardsDivFlex columnMargins">
                        <FooterCard/>
                    </Col>
                </Row>                
            </Container>
        </div>
    );

}

export default Dashboard;