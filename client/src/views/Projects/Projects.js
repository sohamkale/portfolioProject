import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "./Projects.css";
import image from "./image.png";
import image2 from "./home.png";
import mixmasalaimage from "./mixmasalaImage.png";
import mixmasalaimage2 from "./mixmasalaimage2.png";
import gif1 from "./gif1.gif";
import gif2 from "./gif2.gif";
import Card from "./../../components/Card/Card.js";
const Projects = (props) => {
    return (

        <div>
            <div class="md-3">
                <div class="row no-gutters">
                <div class="col-md-12">
                    <div class="card-body">
                    <h5 class="text-center">My Work</h5>

                    </div>
                </div>
                </div>
            </div>
            <div className="project1"> 
                <Card 
                image={image2}
                image2={gif2}
                title="Attractions Salon"
                desc="A web app for the Attractions Salon in Gainesville, FL. It aims for users to be able to find the salon, make an account, see the services offered, make payments, and make appointments in an easy to use fashion.
                I handled the backend of the web app using firebase database and fire storage and also implemented the Admin Dashboard which allows the admin to make changes to the website like add/delete services, change images and handle appointments made by customers."/> 
            </div>
        
            <div className="project2">
                <Card
                image={mixmasalaimage}
                image2={mixmasalaimage2}
                title="Miks masala Website"
                desc="A website for Miks masala, a family-owned food delivery service in Orlando, FL. 
                Used HTML, CSS, JS as the front-end for dynamically creating HTML elements and updating pages.
                Made use of PHP and firebase as the backend to keep track of customers and their orders. 
                Used PHP to send emails with customer orders to the owner and allowed him to either accept/deny the orders."/>
            </div>
      
            <div className="project3">
                <Card
                image={image2}
                image2={gif2}
                title="Attractions Salon"
                desc="Attractions"/>
            </div>
            <br/>
            <div>
                <Card
                image={image}
                image2={image2}
                title="Portfolio webapp"
                desc="An application for computer science students to build their own website in a quick and easy way using a pre-loaded template. 
                The users can edit all of the information on the website and upload their own images to make sure that the website looks like their personal portfolio website. 
                The users also get an opportunity to choose between a single page or a multi-page portfolio website.
                Used reactjs for the frontend and firebase for the backend to authenticate users and to store all of their information which is then reflected on the website."/>
            </div>
            <br/>
            <div>
                <Card
                image={image}
                image2={image2}
                title="Gator Raider"
                desc="Lead a group of 4 students, monitored and tracked their progress as part of one of my classes to implement an algorithm in Java which controlled the movement of a software robot team which competed against the other teams. 
                Created 4 virtual robots each with unique strategies and defense techniques. The robots could change their tactics depending on the opponent robot's position and attacking mechanism.
                We used external libraries, and also worked with already existing code to modify/add code to improve the performance of the robots."/>
            </div>
        </div>
    );
}
export default Projects;