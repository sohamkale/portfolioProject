import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import "./SoftSkills.css";
const uuidv4 = require("uuid/v4");
const SoftSkillsCard = (props) => {
  const onSkillChange = (e) => {
    props.skillsArray.map((skillObj) => {
      if(skillObj.id === e.target.id){
        skillObj.skill = e.target.value;
      }
    })
  }

  const onSave = (e) => {
    let skillToUpdate;
    props.skillsArray.map((skillObj) => {
      if(skillObj.id === e.target.id){
          skillToUpdate = skillObj.skill
      }
    })
    props.refAbout.child('softSkills').child(e.target.id).update(
    {'skill': skillToUpdate}, function(error) {
      if (error) {
        alert("Error in Saving! Please try again with correct inputs");
      } else {
          alert("Data Saved!");// Data saved successfully!
      }
    } );
  }

  let softSkillsArray = [];
  props.skillsArray.map((element, index) => {  //array is an object {id: num, skill: string}
    softSkillsArray.push(
      <Card id={element.id} style={{ width: '18rem' }} key={uuidv4()} className="columnMarginsCards">
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>Soft Skills</Card.Title>
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Skill:</InputGroup.Text>
        </InputGroup.Prepend>
        {(function() {
            if (element.skill != "null") {
                return <Form.Control id={element.id} onChange={onSkillChange} type="text" placeholder={element.skill} />
            } else {
                return <Form.Control id={element.id} onChange={onSkillChange} type="text" placeholder="add a soft skill" />
            }
        })()}
        
        {/* {console.log("element id: " + element.id + " and skill: " + element.skill)} */}
      </InputGroup>
    
      {/* <Button id={element.id} variant="primary">Add a skill</Button> */}
      <Button id={element.id} className="mr-2" onClick={props.deleteSkill} variant="primary">Delete</Button>
      <Button id={element.id} onClick={onSave} variant="primary">Save</Button>
    </Card.Body>
    </Card>
    
    )
  })
  
    return(
      softSkillsArray
    );
    
}

export default SoftSkillsCard;