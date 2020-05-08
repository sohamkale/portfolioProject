import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import "./SoftSkills.css";

import fire from "./../../../config/Fire";
const uuidv4 = require("uuid/v4");
const EdCard = (props) => {

    const onUniversityChange = (e) => {
        props.eduCardsArray.map((uniObj) => {
            if(uniObj.id === e.target.id){
            uniObj.universityName = e.target.value;
            }
        })
    }

    const onCollegeChange = (e) => {
        props.eduCardsArray.map((uniObj) => {
            if(uniObj.id === e.target.id){
            uniObj.collegeName = e.target.value;
            }
        })
    }

    const onDegreeChange = (e) => {
        props.eduCardsArray.map((uniObj) => {
            if(uniObj.id === e.target.id){
            uniObj.degree = e.target.value;
            }
        })
    }

    const onMajorChange = (e) => {
        props.eduCardsArray.map((uniObj) => {
            if(uniObj.id === e.target.id){
            uniObj.major = e.target.value;
            }
        })
    }

    const onGpaChange = (e) => {
        props.eduCardsArray.map((uniObj) => {
            if(uniObj.id === e.target.id){
            uniObj.gpa = e.target.value;
            }
        })
    }

    const onClickUpdate = (e) => {
        let universityObject = {
            'collegeName': "college",
            'universityName': "university",
            'major': "major",
            'gpa': "0.00",
            'degree': "degree"
        };
        props.eduCardsArray.map((element) => {
            if(element.id === e.target.id){
                universityObject.universityName = element.universityName;
                universityObject.gpa = element.gpa;
                universityObject.major = element.major;
                universityObject.degree = element.degree;
                universityObject.collegeName = element.collegeName;
            }
        })
        props.refEducation.child(e.target.id).update(
        {
        'universityName': universityObject.universityName,
        'collegeName': universityObject.collegeName,
        'degree': universityObject.degree,
        'major': universityObject.major,
        'gpa': universityObject.gpa
        });
    }

    let Array = [];
    props.eduCardsArray.map((element) => {
        console.log("Full Array:");
    
        console.log(props.eduCardsArraynew);
        console.log(element.university);
       Array.push(
        
        <Card id={element.id} key={uuidv4()} style={{ width: '18rem' }} className="columnMarginsCards">
        <Card.Img variant="top" />
        <Card.Body>
            <Card.Title>Education Background</Card.Title>

            <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">University:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control id={element.id} onChange={onUniversityChange} type="text" placeholder={element.universityName} />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">College:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control id={element.id} onChange={onCollegeChange} type="text" placeholder={element.collegeName} />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Degree:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control id={element.id} onChange={onDegreeChange} type="text" placeholder={element.degree} />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Major:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control id={element.id} onChange={onMajorChange} type="text" placeholder={element.major} />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">GPA:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control id={element.id} onChange={onGpaChange}  type="text" placeholder={element.gpa} />
        </InputGroup>
        <Button id={element.id} onClick={props.deleteUniversity} variant="primary">Delete</Button>
        <Button id={element.id} onClick={onClickUpdate} variant="primary">Save/Update</Button>
        </Card.Body>
        </Card>   
       )
    });

    return (Array);
    
}

export default EdCard;