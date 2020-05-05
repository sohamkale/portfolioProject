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
const Dashboard = (props) => {
    // let id = useId();
    // const [uniCount, setUniCount] = useState(1);
    const [userUid, setUserUid] = useState(null);
    const [eduCardsArray, setEduCardsArray] = useState([{
        'id': 1,
        'university': "University of Florida",
        'college': "Herbert Wertheim College of Engineering",
        'degree': "Bachelor's",
        'major': "Computer Science",
        'gpa': "3.95",
    }, {
        'id': 2,
        'university': "University of Central Florida",
        'college': "College of Engineering",
        'degree': "Bachelor's",
        'major': "Computer Science",
        'gpa': "4.0",
        
    }, {
        'id': 3,
        'university': "University of South Florida",
        'college': "College of Engineering",
        'degree': "Bachelor's",
        'major': "Computer Science",
        'gpa': "4.0",
    }]);
    var db = fire.database();
    var refEducation = db.ref(`${userUid}/About/Education`);
    // const [uniqueIDs, setUniqueIDs] = useState([]);
    // const addUniversity = (e) => {
        
    //     setUniqueIDs(uniqueIDs.concat(id));
    //     setUniCount(uniCount + 1);
    // }
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
                    {/* <Col mb={6}>
                        <EdCard
                        eduCardsArray={eduCardsArray}/>
                    </Col> */}
                    {/* <Col mb={6}>
                        <EduCard/>
                    </Col> */}
                    <Col mb={6}>
                        <EducationCard/>
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

export default Dashboard;