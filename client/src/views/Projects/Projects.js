import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "./Projects.css";
import image from "./image.png";
import Card from "./../../components/Card/Card.js";
const Projects = (props) => {
    return (

        <div>
            <div class="card md-3 a">
                <div class="row no-gutters">
                <div class="col-md-6">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                    </div>
                </div>
                </div>
            </div>
            <div> 
                <Card 
                
                title="Unity Project"/> 
            </div>
            <br/>
            <div>
                <Card
                title="Restaurant Website"/>
            </div>
        </div>
    );
}
export default Projects;