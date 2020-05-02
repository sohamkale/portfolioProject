import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap';
import "./ContactMe.css";
import image from "./../Projects/image.png";
import image2 from "./../Projects/home.png";
import gif1 from "./../Projects/gif1.gif";
import gif2 from "./../Projects/gif2.gif";
const ContactMe = (props) => {
    return(
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
            <div class="row no-gutters dropDivAlign">
            
            <DropdownButton id="dropdown-item-button" title="Attraction Salon">
                <Dropdown.Item as="button">Portfolio web app</Dropdown.Item>
                <Dropdown.Item as="button">Miks Masala Website</Dropdown.Item>
                <Dropdown.Item as="button">Gator Raider</Dropdown.Item>
            </DropdownButton>
            
            </div>
            <div class="row no-gutters fullWebpage">
            <Container className="bg-danger">
                <Row>
                    <Col>
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
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
            </div>

        </div>
    );
}

export default ContactMe;