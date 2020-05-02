import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import "./PCard.css";
import image from "./../Projects/image.png";
import image2 from "./../Projects/home.png";
import gif1 from "./../Projects/gif1.gif";
import gif2 from "./../Projects/gif2.gif";
const PCard = (props) => {
    return(
    <Container className="containerDivison">
        <div className="boxCenter text-white">
            <img src={props.image} class="img-fluid"/>
            <br/><br/>
            <h4 className="card-title">{props.title}</h4>
            
            <div className="card-text">
                <p>{props.desc}</p>
            </div>
            
        </div>               
    </Container>
    );
}

export default PCard;