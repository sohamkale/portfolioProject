import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import "./ContactMe.css";
import image from "./../Projects/image.png";
import image2 from "./../Projects/home.png";
import gif1 from "./../Projects/gif1.gif";
import mixmasalaimage from "./../Projects/mixmasalaImage.png";
import mixmasalaimage2 from "./../Projects/mixmasalaimage2.png";
import gif2 from "./../Projects/gif2.gif";
import portfolioApp from "./../Projects/portfoliowebapp.png";
import PCard from "./PCard.js";
const ContactMe = (props) => {
    return(
        <div className="bg-dark fullWebpage">
            
            <div class="row bg-info no-gutters">
                <div class="col-sm-12">
                    <div class="card-body">
                        <h5 class="text-center">My Work</h5>
                    </div>
                </div>
            </div>
            <Container fluid>

            <Row fluid className="bg-danger">
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
                 {/* <Button  onClick={event =>  window.location.href='/home'}>View this website</Button> */}
            </Row>

            <Row fluid className="bg-dark">
            <PCard
                image={image}
                title="Gator Raider"
                desc="Lead a group of 4 students, monitored and tracked their progress as part of one of my classes to implement an algorithm in Java which controlled the movement of a software robot team which competed against the other teams. 
                Created 4 virtual robots each with unique strategies and defense techniques. The robots could change their tactics depending on the opponent robot's position and attacking mechanism.
                We used external libraries, and also worked with already existing code to modify/add code to improve the performance of the robots."/>
            </Row>
            </Container>
           
            {/* <Container fluid className="bg-danger fullWebpage">
                <Row>
                    <Container className="containerDivison">
                        <div className="boxCenter text-white">
                            <img src={image2} class="img-fluid"/>
                            <h4>Mix Masala</h4>
                            <p>A website for Miks masala, a family-owned food delivery service in Orlando, FL. 
                Used HTML, CSS, JS as the front-end for dynamically creating HTML elements and updating pages.
                Made use of PHP and firebase as the backend to keep track of customers and their orders. 
                Used PHP to send emails with customer orders to the owner and allowed him to either accept/deny the orders.                                
                            </p>
                        </div>
                    </Container>
                   
                </Row>
               
            </Container> */}
          
    

        </div>
    );
}

export default ContactMe;