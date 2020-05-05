import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
// import "./DashCard.css";
import fire from "./../../../config/Fire";
const EdCard = (props) => {
    const [university, setUniversity] = useState(null);
    const [college, setCollege] = useState(null);
    const [degree, setDegree] = useState(null);
    const [major, setMajor] = useState(null);
    const [gpa, setGpa] = useState(null);
    const [userUid, setUserUid] = useState(null);
    var db = fire.database();
    var refEducation = db.ref(`${userUid}/About/Education`);

    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            } else {
            }
          }); 
    }, []);

    useLayoutEffect (() => {
        refEducation.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
                if(snapshot.key === "collegeName"){
                    setCollege(snapshot.val());
                }else if(snapshot.key === "degree"){
                    setDegree(snapshot.val());
                }else if(snapshot.key === "gpa"){
                    setGpa(snapshot.val());
                }else if(snapshot.key === "major"){
                    setMajor(snapshot.val());
                }else if(snapshot.key === "universityName"){
                    setUniversity(snapshot.val());
                }
            });
        });
    }, [userUid])

    const onUniversityChange = (e) => {
        setUniversity(e.target.value);
    }

    const onCollegeChange = (e) => {
        setCollege(e.target.value);
    }

    const onDegreeChange = (e) => {
        setDegree(e.target.value);
    }

    const onMajorChange = (e) => {
        setMajor(e.target.value);
    }

    const onGpaChange = (e) => {
        setGpa(e.target.value);
    }

    const onClickSave = (e) => {
        refEducation.update({'universityName': university,
        'collegeName': college,
        'degree': degree,
        'major': major,
        'gpa': gpa});
    }

    return(
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" />
<Card.Body>
    <Card.Title>Education Background</Card.Title>

    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">University:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={onUniversityChange} type="text" placeholder={university} />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">College:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={onCollegeChange} type="text" placeholder={college} />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Degree:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={onDegreeChange} type="text" placeholder={degree} />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Major:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={onMajorChange} type="text" placeholder={major} />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">GPA:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={onGpaChange}  type="text" placeholder={gpa} />
  </InputGroup>
  <Button onClick={onClickSave} variant="primary">Save</Button>
</Card.Body>
</Card>
    );
    
}

export default EdCard;