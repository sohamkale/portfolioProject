import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import "./ProjectsMain.css";
import {storage} from "./../../../config/Fire";
import placeHolder from "../../image/placeholder.png";
const uuidv4 = require("uuid/v4");

const ProjectsCards = (props) => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    const onImageChange = (e) => {
        setImage(e.target.files[0]);
        props.skillsArray.map((skillObj) => {
            if(skillObj.id === e.target.id){
              skillObj.imgName = e.target.files[0].name;
              skillObj.imgBool = true;
            }
        })
    }

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
    let imp = e.target.id;
    let shouldUpload = false;
    props.skillsArray.map((skillObj) => {
        if(skillObj.imgBool != false){
            shouldUpload = true;
        }
    })
    //upload image to firestorage and save imageURL and imageName to database
    if(shouldUpload){
        const uploadTask = storage.ref(`images/${props.userUid}/Projects/${imp+"image"}`).put(image);
        uploadTask.on("state_changed", snapshot => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        }, error => {
            console.log(error);
        }, () => {
            storage.ref(`images/${props.userUid}/Projects/`).child(`${imp+"image"}`).getDownloadURL().then(url => {
                setUrl(url);
                  props.refAbout.child('projects').child(imp).update(
                  {
                      'img': url,
                      'imgName': image.name
                  });
            })
        });
    }    
    //upload image to firestorage and save imageURL and imageName to database
    props.skillsArray.map((skillObj) => {
        if(skillObj.id === e.target.id){
            nameToUpdate = skillObj.name;
            descToUpdate = skillObj.desc;
        }
        })
        props.refAbout.child('projects').child(e.target.id.toString()).update(
        {
            'name': nameToUpdate,
            'desc': descToUpdate,
        }, function(error) {
            if (error) {
              alert("Error in Saving! Please try again with correct inputs");
            } else {
                alert("Data Saved!");// Data saved successfully!
            }
          });
  }

  let softSkillsArray = [];
  props.skillsArray.map((element, index) => {  //array is an object {id: num, skill: string}
    softSkillsArray.push(
      <Card id={element.id} className="ProjectsCardsDiv columnMarginsProjectsCards" style={{ width: '18rem' }} key={uuidv4()}>
        <div className="text-center">
        {(function() {
            if (url != null) {
                return  <Card.Img style={{ width: '10rem', height: '12rem'  }} variant="top" src={element.img} />
            } else {
                return  <Card.Img style={{ width: '10rem', height: '12rem'  }} variant="top" src={placeHolder} />
            }
            })()}
           
        </div>
      <Card.Body>
        <Card.Title>Projects</Card.Title>
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Name:</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control id={element.id} onChange={onNameChange} type="text" placeholder={element.name} />
      </InputGroup>
      <Form.Control id={element.id} onChange={onDescChange} as="textarea" placeholder={element.desc} rows="3" />
      <Row></Row>
      <Form.Text className="text-muted white-text">
        Please upload an image or gif of your project.
    </Form.Text>
      <div className="input-group">
        <div className="custom-file">
            <input
            type="file"
            className="custom-file-input"
            // id="inputGroupFile01"
            id={element.id}
            onChange={onImageChange}
            aria-describedby="inputGroupFileAddon01"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
            {(function() {
            if (element.imgBool != false) {
                return element.imgName;
            } else {
                return "Choose a file";
            }
            })()}
            </label>
        </div>
        </div>
      {/* <Button id={element.id} variant="primary">Add a skill</Button> */}
      <Button id={element.id} className="mr-2 mt-2" name={element.id + "image"} onClick={props.deleteSkill} variant="primary">Delete</Button>
      <Button id={element.id} className="mt-2" onClick={onSave} variant="primary">Save</Button>
    </Card.Body>
    </Card>
    )
  })
  
    return(
      softSkillsArray
    );
    
}

export default ProjectsCards;