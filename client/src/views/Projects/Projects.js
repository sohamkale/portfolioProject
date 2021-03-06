import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "./Projects.css";
import image from "./image.png";
import image2 from "./home.png";
import mixmasalaimage from "./mixmasalaImage.png";
import mixmasalaimage2 from "./mixmasalaimage2.png";
import gif1 from "./gif1.gif";
import gif2 from "./gif2.gif";
import portfolioApp from "./../Projects/portfoliowebapp.png";
import PCard from "./../Contact Me/PCard.js";
import Card from "./../../components/Card/Card.js";
import Footer from "./../../components/Footer/Footer.js";
import ProjectsRow from "./ProjectsRow";
import fire from "../../config/Fire";
const Projects = (props) => {
    const [userUid, setUserUid] = useState(null);
    var db = fire.database(); //reference to database
    var refProjectsPage = db.ref(`${userUid}/ProjectsPage/`); //reference to about
    var refProjects = db.ref(`${userUid}/ProjectsPage/projects`); //reference to the softSkills child of about
    const [projectsArray, setProjectsArray] = useState([]);
    //ALSO NEED AN IMAGES ARRAY WHICH WILL COME LATER OR IF I PUT IT INSIDE PROJECTSARRAY THEN I NEED TO DO THAT

    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            }
          }); 
    }, []);

    useEffect (() => {
        refProjects.on("value", function(userSnapshot) {
            setProjectsArray([]);
            userSnapshot.forEach(function(snapshot) {
                let obj = {
                    'id': snapshot.key,
                    'name': snapshot.child('name').val(),
                    'desc': snapshot.child('desc').val(),
                    'img': snapshot.child('img').val(),
                    'imgName': snapshot.child('imgName').val()
                }
                setProjectsArray(projectsArray => projectsArray.concat(obj));
            });
        });
    }, [userUid]);
    return (
        <div className="bg-dark fullWebpage">
            <div class="row bg-info no-gutters">
                <div class="col-sm-12">
                    <div class="card-body">
                        <h5 class="text-center">My Projects</h5>
                    </div>
                </div>
            </div>
            <Container fluid>

            {/* <Row fluid className="bg-danger">
                <PCard
                image={image2}
                title="Attractions Salon"
                desc="A web app for the Attractions Salon in Gainesville, FL.
                It aims for users to be able to find the salon, make an account, see the services offered, make payments, and make appointments in an easy to use fashion.
                I handled the backend of the web app using firebase database and fire storage and also implemented the Admin Dashboard which allows the admin to make changes to the website like add/delete services, change images and handle appointments made by customers."/>
            </Row>
            
            <Row fluid className="bg-info">
                <PCard
                // image={mixmasalaimage}
                image={mixmasalaimage2}
                title="Miks masala Website"
                desc="A website for Miks masala, a family-owned food delivery service in Orlando, FL. 
                Used HTML, CSS, JS as the front-end for dynamically creating HTML elements and updating pages.
                Made use of PHP and firebase as the backend to keep track of customers and their orders. 
                Used PHP to send emails with customer orders to the owner and allowed him to either accept/deny the orders."/>
            </Row>

            <Row fluid className="coloe">
            <PCard
                image={portfolioApp}
                title="Portfolio webapp"
                desc="An application for computer science students to build their own website in a quick and easy way using a pre-loaded template. 
                The users can edit all of the information on the website and upload their own images to make sure that the website looks like their personal portfolio website. 
                The users also get an opportunity to choose between a single page or a multi-page portfolio website.
                Used reactjs for the frontend and firebase for the backend to authenticate users and to store all of their information which is then reflected on the website."/>
            
            </Row>

            <Row fluid className="bg-dark">
            <PCard
                image={image}
                title="Gator Raider"
                desc="Led a group of 4 students, monitored and tracked their progress as part of one of my classes to implement an algorithm in Java which controlled the movement of a software robot team which competed against the other teams. 
                Created 4 virtual robots each with unique strategies and defense techniques. The robots could change their tactics depending on the opponent robot's position and attacking mechanism.
                We used external libraries, and also worked with already existing code to modify/add code to improve the performance of the robots."/>
            </Row> */}
            <ProjectsRow projectsArray={projectsArray}/>
            </Container>
           
         <Container fluid className="bg-white text-center">
            <Footer/>
         </Container>
    

        </div>

    );
}
export default Projects;