import React, { useEffect, useState } from "react"
import "./Resume.css";
import ResumeCard from "./../../components/ResumeCard/ResumeCard"
import { useMediaPredicate } from "react-media-hook";
import {Button, Container, Row, Col, ResponsiveEmbed} from 'react-bootstrap';
import Footer from "./../../components/Footer/Footer.js";
import ResumePic from "./Resume.png";
import fire from "../../config/Fire";
const Resume = () => {
    const [cardWidth, setCardWidth] = useState('50vw');
    const [image, setImage] = useState();
    const isMobile = useMediaPredicate("(max-width: 680px)");
    const [userUid, setUserUid] = useState(null);
    var db = fire.database(); //reference to database
    var refProjectsPage = db.ref(`${userUid}/ProjectsPage/`); //reference to about

    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            }
          }); 
    }, []);

    useEffect (() => {
        refProjectsPage.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
    
                if(snapshot.key === "resume"){
                    setImage(snapshot.val());
                }
            });
        });
    }, [userUid]);
    return(
        <div>
            <Container fluid className="bg-dark centeredDivParent">
                <div className="squareShape">
                    <img src={image} class="img-fluid" alt="Responsive image"/>  
                </div>
            </Container>
            <Container fluid className="bg-white text-center">
                <Footer/>
            </Container>
        </div>
        
    );
}

export default Resume;