import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import fire, {storage} from "./../../../config/Fire";

const ResumeCard = (props) => {
    const [image, setImage] = useState(null);
    const [userUid, setUserUid] = useState(null);
    const [url, setUrl] = useState(null);
    var db = fire.database();
    var refResume = db.ref(`${userUid}/ProjectsPage`);
   

    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            } else {
            }
          }); 
    }, [])

    useEffect (() => {
        refResume.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
                if(snapshot.key === "resume"){
                    setUrl(snapshot.val());
                }
            });
        });
    }, [userUid])

    const onImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const onClickUpload = (e) => {
        const uploadTask = storage.ref(`images/${userUid}/Resume/Resume`).put(image);
        uploadTask.on("state_changed", snapshot => {
        }, error => {
            console.log(error);
        }, () => {
            storage.ref(`images/${userUid}/Resume/`).child(`Resume`).getDownloadURL().then(url => {
                setUrl(url);
                // writing to database prob: Duplicate entries!
                refResume.child("resume").set(url);
            })
        });
    }

    return(
    <Card style={{ width: '15rem' }}>
        <div className="text-center">
        <Card.Img style={{ width: '10rem', height: '10rem' }} variant="top" src={url}/>
        </div>
    <Card.Body>
    <Card.Title>Upload Resume</Card.Title>  
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
    <Button onClick={onClickUpload} variant="primary">Upload</Button>
    </Card.Body>
    </Card>
    );
    
}

export default ResumeCard;