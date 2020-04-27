import React, { useEffect, useState } from "react"
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import image from "./mainimage.jpg";
import "./image.css";

const Image = () => {
    return(
        <img className ="image"src = {image}/>
    );
    

}

export default Image;