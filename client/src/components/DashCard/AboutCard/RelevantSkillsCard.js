import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
// import "./DashCard.css";
const uuidv4 = require("uuid/v4");
const RelevantSkillsCard = (props) => {
  const onSkillChange = (e) => {
    props.skillsArray.map((skillObj) => {
      if(skillObj.id === e.target.id){
        skillObj.relevantSkill = e.target.value;
      }
    })
  }

  const onPercentChange = (e) => {
    props.skillsArray.map((skillObj) => {
      if(skillObj.id === e.target.id){
        skillObj.percent = e.target.value;
      }
    })
  }

  const onSave = (e) => {
    let skillToUpdate;
    let percent;
    props.skillsArray.map((skillObj) => {
      if(skillObj.id === e.target.id){
          skillToUpdate = skillObj.relevantSkill;
          percent = skillObj.percent;
      }
    })
    props.refAbout.child('RelevantSkills').child(e.target.id).update(
    {
        'relevantSkill': skillToUpdate,
        'percent': percent
    });
  }

  let softSkillsArray = [];
  props.skillsArray.map((element, index) => {  //array is an object {id: num, skill: string}
    softSkillsArray.push(
      <Card id={element.id} style={{ width: '18rem' }} key={uuidv4()}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>Relevant Skills</Card.Title>
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Skill:</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control id={element.id} onChange={onSkillChange} type="text" placeholder={element.relevantSkill} />
      </InputGroup>
      <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Competence level (%):</InputGroup.Text>
        </InputGroup.Prepend>
      <Form.Control id={element.id} onChange={onPercentChange} type="text" placeholder={element.percent} />
      </InputGroup>
    
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

export default RelevantSkillsCard;