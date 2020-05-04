import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
// import "./DashCard.css";
import fire from "./../../../config/Fire";
const FooterLinks = (props) => {
    return(
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" />
<Card.Body>
    <Card.Title>Links</Card.Title>

  <InputGroup className="mb-3">
  <Form.Text className="text-muted">
        Please provide your facebook profile link.
    </Form.Text>
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">FB Link:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control type="text" placeholder=""  />
  </InputGroup>

  <InputGroup className="mb-3">
  <Form.Text className="text-muted">
        Please provide your Instagram profile link.
    </Form.Text>
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">IG Link:</InputGroup.Text>
    </InputGroup.Prepend>
   
    <Form.Control type="text" placeholder="" />
  </InputGroup>

  <InputGroup className="mb-3">
  <Form.Text className="text-muted">
        Please provide your LinkedIn profile link.
    </Form.Text>
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">LinkedIn Link:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control type="text" placeholder="" />
  </InputGroup>

  <InputGroup className="mb-3">
  <Form.Text className="text-muted">
        Please provide your Twitter profile link.
    </Form.Text>
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Twitter Link:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control type="text" placeholder="" />
  </InputGroup>

  <Button variant="primary">Save</Button>
</Card.Body>
</Card>
    );
    
}

export default FooterLinks;