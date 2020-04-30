import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import image from "./../../views/Projects/image.png";
import image2 from "./../../views/Projects/image2.png";
import image3 from "./../../views/Projects/image3.png";
const Card = (props) => {
    return (
    <div class="card md-3 ">
    <div class="row no-gutters">
      <div class="col-md-3">
        <img src={image} class="card-img" alt="..."/>
        {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GnvW1X5f3Zk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
      
      <div class="col-md-3">
        <img src={image3}class="card-img" alt="..."/>
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div>
    );
}
export default Card;