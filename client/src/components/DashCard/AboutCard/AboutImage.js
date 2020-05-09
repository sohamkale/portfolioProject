import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import {storage} from "./../../../config/Fire";
import fire from "./../../../config/Fire";
import placeHolder from "../../image/placeholder.png";
const AboutCard = (props) => {
    const [image, setImage] = useState(null);
    const [userUid, setUserUid] = useState(null);
    const [url, setUrl] = useState(null);
    var db = fire.database();
    var refAbout = db.ref(`${userUid}/About`);
   

    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            } else {
            }
          }); 
    }, [])

    useEffect (() => {
        refAbout.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
                if(snapshot.key === "aboutImage"){
                    setUrl(snapshot.val());
                }
            });
        });
    }, [userUid])

    const onImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const onClickUpload = (e) => {
        const uploadTask = storage.ref(`images/${userUid}/About/AboutImage`).put(image);
        uploadTask.on("state_changed", snapshot => {
            // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            // setProgressBar(progress);
        }, error => {
            console.log(error);
        }, () => {
            storage.ref(`images/${userUid}/About/`).child(`AboutImage`).getDownloadURL().then(url => {
                setUrl(url);
                // writing to database prob: Duplicate entries!
                refAbout.child("aboutImage").set(url)
            })
        });
    }

    return(
    <Card style={{ width: '15rem' }} className="mt-2">
        <div className="text-center">
        {(function() {
            if (image != null) {
                return <Card.Img style={{ width: '10rem', height: '10rem' }} placeholder={placeHolder} variant="top" src={url}/>;
            } else {
                return <Card.Img style={{ width: '10rem', height: '10rem' }} placeholder={placeHolder} variant="top" src={placeHolder}/>;
            }
            })()}
        </div>
    <Card.Body>
    <Card.Title>About page Image</Card.Title>  
    <Form.Text className="text-muted">
        Upload your image.
    </Form.Text>
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

export default AboutCard;