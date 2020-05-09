import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import fire, {storage} from "./../../../config/Fire";
import placeHolder from "../../image/placeholder.png"
const HomeCard = (props) => {
    const [image, setImage] = useState(null);
    const [userUid, setUserUid] = useState(null);
    const [url, setUrl] = useState(null);
    var db = fire.database();
    var refHome = db.ref(`${userUid}/Home`);
   

    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            } else {
            }
          }); 
    }, [])

    useEffect (() => {
        refHome.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
                if(snapshot.key === "homeImage"){
                    setUrl(snapshot.val());
                }
            });
        });
    }, [userUid])

    const onImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const onClickUpload = (e) => {
        const uploadTask = storage.ref(`images/${userUid}/Home/HomeImage`).put(image);
        uploadTask.on("state_changed", snapshot => {
        }, error => {
            console.log(error);
        }, () => {
            storage.ref(`images/${userUid}/Home/`).child(`HomeImage`).getDownloadURL().then(url => {
                setUrl(url);
                // writing to database prob: Duplicate entries!
                refHome.child("homeImage").set(url);
            })
        });
    }

    return(
    <Card style={{ width: '15rem' }} className="mt-2">
        <div className="text-center">
        {(function() {
            
            if (url != "null") {
                return <Card.Img style={{ width: '10rem', height: '10rem' }} placeholder={placeHolder} variant="top" src={url}/>;
            } else {
                return <Card.Img style={{ width: '10rem', height: '10rem' }} placeholder={placeHolder} variant="top" src={placeHolder}/>;
            }
            })()}
        </div>
    <Card.Body>
    <Card.Title>Home page background Image</Card.Title>  
    <div className="input-group">
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
    <Button className="mt-2" onClick={onClickUpload} variant="primary">Upload</Button>
    </Card.Body>
    </Card>
    );
    
}

export default HomeCard;