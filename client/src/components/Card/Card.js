import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import image from "./../../views/Projects/image.png";
import image2 from "./../../views/Projects/image2.png";
import image3 from "./../../views/Projects/image3.png";
import gif1 from "./gif1.gif";
import "./Card.css";
const Card = (props) => {
    return (
    <div class="card xl-3 back bg-custom-1">
    <div class="row no-gutters">
      <div class="col-xl-3">
        <img src={props.image} class="card-img" alt="..."/>
        {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GnvW1X5f3Zk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
      <br/>
      <div class="col-xl-3">
        <img src={props.image2}class="card-img" alt="..."/>
      </div>
      <div class="col-xl-6 bg-custom-1">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.desc}</p>
        </div>
      </div>
    </div>
  </div>
    );
}
export default Card;