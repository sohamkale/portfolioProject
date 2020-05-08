import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Card, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import {storage} from "./../../../config/Fire";
import fire from "./../../../config/Fire";

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

    // useLayoutEffect (() => {
    //     refAbout.on("value", function(userSnapshot) {
    //         userSnapshot.forEach(function(snapshot) {
    //             if(snapshot.key === "description"){
    //                 setDescription(snapshot.val());
    //             }
    //         });
    //     });
    // }, [userUid])

    const onImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const onClickUpload = (e) => {
        // var fireRef = fire.database().ref("images");
        const uploadTask = storage.ref(`images/About/AboutImage`).put(image);
        uploadTask.on("state_changed", snapshot => {
            // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            // setProgressBar(progress);
        }, error => {
            console.log(error);
        }, () => {
            storage.ref(`images/About/`).child(`AboutImage`).getDownloadURL().then(url => {
                setUrl(url);
                // writing to database prob: Duplicate entries!
                refAbout.child("aboutImage").set(url)
            })
        });
    }

    return(
    <Card style={{ width: '15rem' }}>
        <div className="text-center">
        <Card.Img style={{ width: '10rem', height: '10rem' }} variant="top" src={url}/>
        </div>
    <Card.Body>
    <Card.Title>About page Image</Card.Title>  
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

export default AboutCard;