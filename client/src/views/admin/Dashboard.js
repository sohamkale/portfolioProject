import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import DashCard from "../../components/DashCard/DashCard";
import AboutCard from "../../components/DashCard/AboutCard/AboutCard";
import FooterCard from "../../components/DashCard/FooterCard/FooterCard";
import FooterLinks from "../../components/DashCard/FooterCard/FooterLinks";
import EducationCard from "../../components/DashCard/AboutCard/EducationCard";
import EducationCards from "../../components/DashCard/AboutCard/EducationCards";
import fire from "./../../config/Fire";
import { useId } from "react-id-generator";
import "./Dashboard.css";
const Dashboard = (props) => {
    let id = useId();
    const [uniCount, setUniCount] = useState(1);
    const [userUid, setUserUid] = useState(null);
    var db = fire.database();
    var refEducation = db.ref(`${userUid}/About/Education`);
    const [uniqueIDs, setUniqueIDs] = useState([]);
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
                    <Col mb={6}>
                        <EducationCard/>
                    </Col>
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

export default Dashboard;