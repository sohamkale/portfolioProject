import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import "./ProjectsMain.css";
import {storage} from "./../../../config/Fire";
const uuidv4 = require("uuid/v4");

const ProjectsCards = (props) => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    const onImageChange = (e) => {
        setImage(e.target.files[0]);
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
            //   'img': ""
          });
  }

  const imageUpdateFunct = (a) => {
    let imp = a.target.id;
    console.log(a);
    const uploadTask = storage.ref(`images/${props.userUid}/Projects/${imp+image.name}`).put(image);
    uploadTask.on("state_changed", snapshot => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
       
    }, error => {
        console.log(error);
    }, () => {
        storage.ref(`images/${props.userUid}/Projects/`).child(`${imp+image.name}`).getDownloadURL().then(url => {
            setUrl(url);
           
              props.refAbout.child('projects').child(imp).update(
              {
                //   'name': nameToUpdate,
                //   'desc': descToUpdate,
                  'img': url
              });
        })
    });
  }

  let softSkillsArray = [];
  props.skillsArray.map((element, index) => {  //array is an object {id: num, skill: string}
    softSkillsArray.push(
      <Card id={element.id} className="ProjectsCardsDiv bg-info" style={{ width: '18rem' }} key={uuidv4()}>
        <div className="text-center">
            <Card.Img style={{ width: '10rem', height: '12rem'  }} variant="top" src={element.img} />
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
        {/* <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
            Upload
            </span>
        </div> */}
        <div className="custom-file">
            <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            onChange={onImageChange}
            aria-describedby="inputGroupFileAddon01"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
            {(function() {
            if (image != null) {
                return image.name;
            } else {
                return "Choose a file";
            }
            })()}
            </label>
        </div>
        </div>
      {/* <Button id={element.id} variant="primary">Add a skill</Button> */}
      <Button id={element.id} onClick={props.deleteSkill} variant="primary">Delete</Button>
      <Button id={element.id} onClick={onSave} variant="primary">Save</Button>
      <Button id={element.id} onClick={imageUpdateFunct} variant="primary">upload</Button>
    </Card.Body>
    </Card>
    )
  })
  
    return(
      softSkillsArray
    );
    
}

export default ProjectsCards;