import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import DashCard from "../../components/DashCard/DashCard";
import AboutCard from "../../components/DashCard/AboutCard/AboutCard";
import FooterCard from "../../components/DashCard/FooterCard/FooterCard";
import FooterLinks from "../../components/DashCard/FooterCard/FooterLinks";
import EducationCard from "../../components/DashCard/AboutCard/EducationCard";
import EdCard from "../../components/DashCard/AboutCard/EdCard";
// import EduCard from "../../components/DashCard/AboutCard/EduCard";
import fire from "./../../config/Fire";
import { useId } from "react-id-generator";
import "./Dashboard.css";
const DashboardNew = (props) => {
    // let id = useId();
    // const [uniCount, setUniCount] = useState(1);
    const [university, setUniversity] = useState(null);
    const [college, setCollege] = useState(null);
    const [degree, setDegree] = useState(null);
    const [major, setMajor] = useState(null);
    const [gpa, setGpa] = useState(null);
    const [shouldPush, setShouldPush] = useState(false);
    const [uniqueIdCount, setUniqueIdCount] = useState(0);
    const [userUid, setUserUid] = useState(null);
    const [eduCardsArray, setEduCardsArray] = useState([]); //array to hold universityNames
    const [actualEduCardsArray, setActualEduCardsArray] = useState([]);
    var db = fire.database();
    var refEducation = db.ref(`${userUid}/About/Education`);
    const [fieldsArray, setFieldsArray] = useState([{
    }]);
    // const addUniversity = (e) => {
        
    //     setUniqueIDs(uniqueIDs.concat(id));
    //     setUniCount(uniCount + 1);
    // }
useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            } else {
            }
          }); 
    }, []);

    useLayoutEffect (() => {
        alert("in setEduCards");
        refEducation.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
                let a, b, c, d, e;
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
                })) //NEED TO MAKE SURE THIS IS UPDATED BEFORE APPENDING IT TO THE ACTUAL ARRAY
            });
        });
    }, [userUid])

    useLayoutEffect (() => {
        if(eduCardsArray != null && eduCardsArray != "" && eduCardsArray[eduCardsArray.length - 1].id != uniqueIdCount){
             setUniqueIdCount(uniqueIdCount + 1);
            //  alert(actualEduCardsArray);
            //  console.log(eduCardsArray)
             setActualEduCardsArray(actualEduCardsArray.concat(eduCardsArray))
        }
    }, [eduCardsArray])

    useEffect(() => {
        // if(actualEduCardsArray != null && actualEduCardsArray != undefined && actualEduCardsArray != ""){
            // setUniqueIdCount(uniqueIdCount + 1);
        //     alert(actualEduCardsArray);
        // }
        
        // console.log(actualEduCardsArray);
    }, [actualEduCardsArray])

    useEffect(() => {
        // alert(uniqueIdCount);
    }, [uniqueIdCount])
    return (
        <div className="fullWidthDiv">
            <Container fluid className="bg-dark">
                <Row className="bg-info">
                    <Col mb={12}>
                        <DashCard/>
                    </Col>
                </Row>
                <Row className="text-center text-white">Update About Page</Row>
                {/* <Row className="text-center text-white"><Button onClick={addUniversity}>Add Previous University</Button></Row> */}
                <Row className="bg-danger">
                    <Col mb={6}>
                        <AboutCard/>
                    </Col>
                    <Col mb={6}>
                        <EdCard
                        eduCardsArraynew={actualEduCardsArray}/>
                    </Col>
                    {/* <Col mb={6}>
                        <EduCard/>
                    </Col> */}
                    {/* <Col mb={6}>
                        <EducationCards
                        uniqueIDs={uniqueIDs}
                        cardNum={uniCount}/>
                    </Col> */}
                </Row>
                <Row className="bg-dark">
                    <Col mb={6}>
                        <FooterCard/>
                    </Col>
                    <Col mb={6}>
                        <FooterLinks/>
                    </Col>
                </Row>
                {/* <Row className="bg-danger">
                    <Col mb={12}>
                        <AboutCard/>
                    </Col>
                </Row>
                <Row className="bg-danger">
                    <Col mb={12}>
                        <AboutCard/>
                    </Col>
                </Row> */}
                
            </Container>
        </div>
    );

}

export default DashboardNew;