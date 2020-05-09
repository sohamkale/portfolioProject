import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import "./DashCard.css";
import fire from "./../../config/Fire";

const DashCard = (props) => {
    const [fullName, setFullName] = useState(null);
    const [initials, setInitials] = useState(null);
    const [userUid, setUserUid] = useState(null);
    var db = fire.database();
    var refHome = db.ref(`${userUid}/Home`);
    var refNavbar = db.ref(`${userUid}/Navbar`);
    // var refHomeName = db.ref(`${userUid}/Home/typeWriterName`);
    // var refNavbarInitials = db.ref(`${userUid}/Navbar/initials`);
    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            } else {
            }
          }); 
    }, [])

    useLayoutEffect (() => {
        refHome.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
                if(snapshot.key === "typeWriterName"){
                    setFullName(snapshot.val());  
                }
            });
        });

        refNavbar.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
                if(snapshot.key === "initials"){
                    setInitials(snapshot.val());
                }
            });
        });
    }, [userUid != null])

    const onNameChange = (e) => {
        setFullName(e.target.value);
    }

    const onInitialsChange = (e) => {
        setInitials(e.target.value);
    }

    const onClickUpdate = (e) => {
        refHome.update({'typeWriterName': fullName});
        refNavbar.update({'initials': initials}, function(error) {
            if (error) {
              alert("Error in Saving! Please try again with correct inputs");
            } else {
                alert("Data Saved!");// Data saved successfully!
            }
          });
    }

    return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" />
    <Card.Body>
    <Card.Title>Home and Logo</Card.Title>

    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Full Name</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control value={fullName} onChange={onNameChange}type="text" placeholder={fullName} />
    </InputGroup>

    <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Initials</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control value={initials} onChange={onInitialsChange} type="text" placeholder="Initials for Logo" />

        
    </InputGroup>

    <Button variant="primary" onClick={onClickUpdate}>Update</Button>
    </Card.Body>
    </Card>
    );
    
}

export default DashCard;