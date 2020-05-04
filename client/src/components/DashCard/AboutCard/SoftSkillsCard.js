import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
// import "./DashCard.css";

const SoftSkillsCard = (props) => {
    return(
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" />
<Card.Body>
    <Card.Title>Soft Skills</Card.Title>

    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">University:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control type="text" placeholder="University Name" />
  </InputGroup>

  <Button variant="primary">Add a skill</Button>
  <Button variant="primary">Delete a skill</Button>
  <Button variant="primary">Save</Button>
</Card.Body>
</Card>
    );
    
}

export default SoftSkillsCard;