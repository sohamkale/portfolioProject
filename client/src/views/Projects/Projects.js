import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "./Projects.css";
import image from "./image.png";
const Projects = (props) => {
    return (
        // <div className="projectContainer">
        //     <div className="project1">
        //     Project 1
        //     </div>
        //     <div className="project2">
        //     Project 2 
        //     </div>
        //     <div className="project3">
        //     project 3
        //     </div>
        //     <div className="project4">
        //     project 4
        //     </div>
        // </div>
    //     <div className="container-fluid">
    //     <div className="row-sm-4">
    //         <div className="col-sm-12 bg-dark">Project 1</div>
    //     </div>
    //     <div className="row-sm-4">
    //         <div className="col-sm-12 bg-info">Project 2</div>
    //     </div>
    //     <div className="row-sm-4">
    //         <div className="col-sm-12 bg-blue">Project 3</div>
    //     </div>
    //     <div className="row-sm-4">
    //         <div className="col-sm-12 bg-yellow">Project 4</div>
    //     </div>
    // </div>
    <div class="card md-3 a">
    <div class="row no-gutters">
      <div class="col-md-3">
        <img src={image}class="card-img" alt="..."/>
      </div>
      <div class="col-md-3">
        <img src={image}class="card-img" alt="..."/>
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
    );
}
export default Projects;