import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import image from "./../../views/Projects/image.png";
import image2 from "./../../views/Projects/image2.png";
import image3 from "./../../views/Projects/image3.png";
import gif1 from "./gif1.gif";
import "./Card.css";
const Card = (props) => {
    return (
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
export default Card;