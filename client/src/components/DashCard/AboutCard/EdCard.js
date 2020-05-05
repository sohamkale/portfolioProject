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
    const [count, setCount] = useState(0);
    const [array, setArray] = useState([]);
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

    // useLayoutEffect (() => {
    //     refEducation.on("value", function(userSnapshot) {
    //         userSnapshot.forEach(function(snapshot) {
    //             if(snapshot.key === "collegeName"){
    //                 setCollege(snapshot.val());
    //             }else if(snapshot.key === "degree"){
    //                 setDegree(snapshot.val());
    //             }else if(snapshot.key === "gpa"){
    //                 setGpa(snapshot.val());
    //             }else if(snapshot.key === "major"){
    //                 setMajor(snapshot.val());
    //             }else if(snapshot.key === "universityName"){
    //                 setUniversity(snapshot.val());
    //             }
    //         });
    //     });
    // }, [userUid])

    useLayoutEffect (() => {
        if(props.eduCardsArraynew != ""){
            setCount(count+1);
            setArray(array.concat(props.eduCardsArraynew[props.eduCardsArraynew.length - 1]));
        }
       
    }, [props.eduCardsArraynew])

    useLayoutEffect (() => {
    //    console.log(array);
    }, [array])

    const onUniversityChange = (e) => {
        let items = [...array];
        items.map((singleObj) => {
            if(singleObj.id === e.target.id){
                singleObj.university = e.target.value;
            }
        })
        setArray(items);
        setUniversity(e.target.value);
    }

    const onCollegeChange = (e) => {
        let items = [...array];
        items.map((singleObj) => {
            if(singleObj.id === e.target.id){
                singleObj.college = e.target.value;
            }
        })
        setArray(items);
        setCollege(e.target.value);
    }

    const onDegreeChange = (e) => {
        let items = [...array];
        items.map((singleObj) => {
            if(singleObj.id === e.target.id){
                singleObj.degree = e.target.value;
            }
        })
        setArray(items);
        setDegree(e.target.value);
    }

    const onMajorChange = (e) => {
        let items = [...array];
        items.map((singleObj) => {
            if(singleObj.id === e.target.id){
                singleObj.major = e.target.value;
            }
        })
        setArray(items);
        setMajor(e.target.value);
    }

    const onGpaChange = (e) => {
        let items = [...array];
        items.map((singleObj) => {
            if(singleObj.id === e.target.id){
                singleObj.gpa = e.target.value;
            }
        })
        setArray(items);
        setGpa(e.target.value);
    }

    const onClickSave = (e) => {
        // refEducation.child()
        refEducation.update({'universityName': university,
        'collegeName': college,
        'degree': degree,
        'major': major,
        'gpa': gpa});
    }

    const onClickUpdate = (e) => {
        let uni ="null", col="null", deg="null", maj="null", GPA="null";
        array.map((element) => {
            if(element.id === e.target.id){
                if(element.university != null && element.university != ""){
                    uni = element.university;
                }
                if(element.gpa != null && element.gpa != ""){
                    GPA = element.gpa;
                }
                if(element.major != null && element.major != ""){
                    maj = element.major;
                }
                if(element.degree != null && element.degree != ""){
                    deg = element.degree;
                }
                if(element.college != null && element.college != ""){
                    col = element.college;
                }
            }
        })
        refEducation.child(e.target.id).update(
        {'universityName': uni,
        'collegeName': col,
        'degree': deg,
        'major': maj,
        'gpa': GPA});
    }
    let Array = [];
    props.eduCardsArraynew.map((element) => {
       Array.push(
        <Card id={element.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" />
        <Card.Body>
            <Card.Title>Education Background</Card.Title>

            <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">University:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control id={element.id} onChange={onUniversityChange} type="text" placeholder={element.university} />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">College:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control id={element.id} onChange={onCollegeChange} type="text" placeholder={element.college} />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Degree:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control id={element.id} onChange={onDegreeChange} type="text" placeholder={element.degree} />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Major:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control id={element.id} onChange={onMajorChange} type="text" placeholder={element.major} />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">GPA:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control id={element.id} onChange={onGpaChange}  type="text" placeholder={element.gpa} />
        </InputGroup>
        <Button id={element.id} onClick={onClickSave} variant="primary">Save</Button>
        <Button id={element.id} onClick={onClickUpdate} variant="primary">Update</Button>
        </Card.Body>
        </Card>   
       )
    });
    // let Array = props.eduCardsArray.map((element) => {
    //     alert(element.id);
    //     alert(element.university);
    // }
    return (Array);
    // Array = props.eduCardsArray.map((element) => {
    //     <Card id={element.id} style={{ width: '18rem' }}>
    //     <Card.Img variant="top" />
    //     <Card.Body>
    //         <Card.Title>Education Background</Card.Title>

    //         <InputGroup className="mb-3">
    //         <InputGroup.Prepend>
    //         <InputGroup.Text id="basic-addon1">University:</InputGroup.Text>
    //         </InputGroup.Prepend>
    //         <Form.Control id={element.id} onChange={onUniversityChange} type="text" placeholder={element.university} />
    //     </InputGroup>

    //     <InputGroup className="mb-3">
    //         <InputGroup.Prepend>
    //         <InputGroup.Text id="basic-addon1">College:</InputGroup.Text>
    //         </InputGroup.Prepend>
    //         <Form.Control id={element.id} onChange={onCollegeChange} type="text" placeholder={element.college} />
    //     </InputGroup>

    //     <InputGroup className="mb-3">
    //         <InputGroup.Prepend>
    //         <InputGroup.Text id="basic-addon1">Degree:</InputGroup.Text>
    //         </InputGroup.Prepend>
    //         <Form.Control id={element.id} onChange={onDegreeChange} type="text" placeholder={element.degree} />
    //     </InputGroup>

    //     <InputGroup className="mb-3">
    //         <InputGroup.Prepend>
    //         <InputGroup.Text id="basic-addon1">Major:</InputGroup.Text>
    //         </InputGroup.Prepend>
    //         <Form.Control id={element.id} onChange={onMajorChange} type="text" placeholder={element.major} />
    //     </InputGroup>

    //     <InputGroup className="mb-3">
    //         <InputGroup.Prepend>
    //         <InputGroup.Text id="basic-addon1">GPA:</InputGroup.Text>
    //         </InputGroup.Prepend>
    //         <Form.Control id={element.id} onChange={onGpaChange}  type="text" placeholder={element.gpa} />
    //     </InputGroup>
    //     <Button id={element.id} onClick={onClickSave} variant="primary">Save</Button>
    //     </Card.Body>
    //     </Card>
    //     });
    
}

export default EdCard;