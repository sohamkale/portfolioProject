import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
// import "./DashCard.css";
const uuidv4 = require("uuid/v4");

const ProjectsCards = (props) => {

  const onNameChange = (e) => {
    props.skillsArray.map((skillObj) => {
      if(skillObj.id === e.target.id){
        skillObj.name = e.target.value;
      }
    })
  }

  const onDescChange = (e) => {
    props.skillsArray.map((skillObj) => {
      if(skillObj.id === e.target.id){
        skillObj.desc = e.target.value;
      }
    })
  }

  const onSave = (e) => {
    let nameToUpdate;
    let descToUpdate;
    props.skillsArray.map((skillObj) => {
      if(skillObj.id === e.target.id){
          nameToUpdate = skillObj.name;
          descToUpdate = skillObj.desc;
      }
    })
    props.refAbout.child('projects').child(e.target.id).update(
    {
        'name': nameToUpdate,
        'desc': descToUpdate
    });
  }

  let softSkillsArray = [];
  props.skillsArray.map((element, index) => {  //array is an object {id: num, skill: string}
    softSkillsArray.push(
      <Card id={element.id} style={{ width: '18rem' }} key={uuidv4()}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>Projects</Card.Title>
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Name:</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control id={element.id} onChange={onNameChange} type="text" placeholder={element.name} />
      </InputGroup>
      <Form.Control id={element.id} onChange={onDescChange} as="textarea" placeholder={element.desc} rows="3" />
    
      {/* <Button id={element.id} variant="primary">Add a skill</Button> */}
      <Button id={element.id} onClick={props.deleteSkill} variant="primary">Delete</Button>
      <Button id={element.id} onClick={onSave} variant="primary">Save</Button>
    </Card.Body>
    </Card>
    )
  })
  
    return(
      softSkillsArray
    );
    
}

export default ProjectsCards;