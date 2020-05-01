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

        <div className="project1">
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
            <br/>
            <div>
                <Card
                image={mixmasalaimage}
                image2={mixmasalaimage2}
                title="Miks masala Website"
                desc="A website for Miks masala, a family-owned food delivery service in Orlando, FL. 
                Used HTML, CSS, JS as the front-end for dynamically creating HTML elements and updating pages.
                Made use of PHP and firebase as the backend to keep track of customers and their orders. 
                Used PHP to send emails with customer orders to the owner and allowed him to either accept/deny the orders."/>
            </div>
            <br/>
            <div>
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
                desc="webapp"/>
            </div>
            <br/>
            <div>
                <Card
                image={image}
                image2={image2}
                title="Comp2 project"
                desc="comp2"/>
            </div>
        </div>
    );
}
export default Projects;