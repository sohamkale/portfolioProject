import React, { useEffect, useState } from "react"
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import image from "./mainimage.jpg";
import image1 from "./backImage.jpg";
import image4 from './images.jpeg';
import image5 from './1.jpg';
import image2 from './backImage2.jpg';
import "./image.css";
import image3 from './potraitImage.jpg';
import { useMediaPredicate } from "react-media-hook";
const Image = (props) => {
    const isMobile = useMediaPredicate("(max-width: 768px)");
    return(
        <div>
            {isMobile ? <img className ="image" src = {image3}/> : <img className ="image"src = {props.imageSrc}/>}   
            {/* <img className ="image"src = {image2}/> */}
        </div>
        
       
    );
    

}

export default Image;