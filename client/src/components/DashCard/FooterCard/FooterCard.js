import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
// import "./DashCard.css";
import fire from "./../../../config/Fire";
const FooterCard = (props) => {
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phoneNum, setPhoneNum] = useState(null);
    const [userUid, setUserUid] = useState(null);
    var db = fire.database();
    var refFooter = db.ref(`${userUid}/FooterPage`);

    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            } else {
            }
          }); 
    }, []);

    useLayoutEffect (() => {
        refFooter.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
                if(snapshot.key === "address"){
                    setAddress(snapshot.val());
                }else if(snapshot.key === "email"){
                    setEmail(snapshot.val());
                }else if(snapshot.key === "firstName"){
                    setFirstName(snapshot.val());
                }else if(snapshot.key === "lastName"){
                    setLastName(snapshot.val());
                }else if(snapshot.key === "phoneNum"){
                    setPhoneNum(snapshot.val());
                }
            });
        });
    }, [userUid]);

    const onAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const onLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const onPhoneNumChange = (e) => {
        setPhoneNum(e.target.value);
    }

    const onClickSave = (e) => {
        refFooter.update({'address': address,
        'email': email,
        'firstName': firstName,
        'lastName': lastName,
        'phoneNum': phoneNum}, function(error) {
          if (error) {
            alert("Error in Saving! Please try again with correct inputs");
          } else {
              alert("Data Saved!");// Data saved successfully!
          }
        } );
    }   

    return(
<Card style={{ width: '18rem' }} className="mt-2">
<Card.Img variant="top" />
<Card.Body>
    <Card.Title>Contact info and Links</Card.Title>

    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Address:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={onAddressChange} type="text" placeholder={address}  />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Email:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={onEmailChange} type="text" placeholder={email}  />
  </InputGroup>


  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">First Name:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={onFirstNameChange} type="text" placeholder={firstName}  />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Last Name:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={onLastNameChange} type="text" placeholder={lastName} />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Phone Number:</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={onPhoneNumChange} type="text" placeholder={phoneNum} />
  </InputGroup>


  <Button onClick={onClickSave} variant="primary">Save</Button>
</Card.Body>
</Card>
    );
    
}

export default FooterCard;