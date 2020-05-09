import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
// import "./DashCard.css";
import fire from "./../../../config/Fire";

const AboutCard = (props) => {
    const [description, setDescription] = useState(null);
    const [userUid, setUserUid] = useState(null);
    var db = fire.database();
    var refAbout = db.ref(`${userUid}/About`);
    var refNavbar = db.ref(`${userUid}/Navbar`);

    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            } else {
            }
          }); 
    }, [])

    useLayoutEffect (() => {
        refAbout.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
                if(snapshot.key === "description"){
                    setDescription(snapshot.val());
                }
            });
        });
    }, [userUid])

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const onClickSave = (e) => {
        refAbout.update({'description': description}, function(error) {
            if (error) {
              alert("Error in Saving! Please try again with correct inputs");
            } else {
                alert("Data Saved!");// Data saved successfully!
            }
          } );
    }

    return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" />
    <Card.Body>
    <Card.Title>About page</Card.Title>  
        <Form.Label>About You</Form.Label>
        <Form.Text className="text-muted">
            Brief description about yourself.
        </Form.Text>
        {/* <Form.Control onChange={onDescriptionChange} as="textarea" placeholder={description} rows="3" /> */}
        {(function() {
            if (description != "null") {
                return <Form.Control onChange={onDescriptionChange} as="textarea" placeholder={description} rows="3" />
            } else {
                return <Form.Control onChange={onDescriptionChange} as="textarea" placeholder="Provide a description" rows="3" />
            }
            })()
        }
    <Button className="mt-2" onClick={onClickSave} variant="primary">Save/Update</Button>
    </Card.Body>
    </Card>
    );
    
}

export default AboutCard;