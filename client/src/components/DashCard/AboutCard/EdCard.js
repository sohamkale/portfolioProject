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

    useLayoutEffect (() => {  //PROBLEM: ARRAY IS CONCATTED EVEN WHEN A DELETE IS PERFORMED
        if(props.eduCardsArraynew != "" && !props.isDelete){
            //  alert("Inside concat: " + props.isDelete + " Add: " + props.toggleAdd) //Normal - delete: false, add: true
             console.log("Inside concat Array:");
             console.log(array);
             console.log(props.eduCardsArraynew);
            setCount(count+1);
            setArray(array.concat(props.eduCardsArraynew[props.eduCardsArraynew.length - 1]));
        }else if(props.isDelete){
            setCount(count-1);
            //  alert("outside concat: " + props.isDelete + " Add: " + props.toggleAdd)
            console.log("outside concat Array:");
            console.log(array);
            let newDeletedArray = [...array];
            console.log("Before Deleting: " + newDeletedArray);
            // newArray = newArray.concat(newObj);
            newDeletedArray.map((ele, index) => {
                if(ele.id === props.indexToDelete){
                    newDeletedArray.splice(index, 1);
                }
            })
            console.log("After Deletion: " + newDeletedArray);
            setArray(newDeletedArray);
                props.toggleDelete();
            }
       
       
    }, [props.eduCardsArraynew])

    useLayoutEffect (() => {
        console.log(array);
    }, [array])

    useLayoutEffect (() => {
        console.log("edCard count: " + count);
    }, [count])

    const onUniversityChange = (e) => {
        let items = [...array];
        items.map((singleObj) => {
            if(singleObj.id === e.target.id){
                
                singleObj.university = e.target.value;
                console.log(singleObj.university);
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
                console.log(singleObj.college);
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
                console.log(singleObj.degree);
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
                console.log(singleObj.major);
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

    

    const onClickUpdate = (e) => {
        let uni ="null", col="null", deg="null", maj="null", GPA="null";
        array.map((element) => {
            if(element.id === e.target.id){
                // alert("Inside onClickUpdate");
                // if(element.university != null && element.university != ""){
                //     uni = element.university;
                // }
                // if(element.gpa != null && element.gpa != ""){
                //     GPA = element.gpa;
                // }
                // if(element.major != null && element.major != ""){
                //     maj = element.major;
                // }
                // if(element.degree != null && element.degree != ""){
                //     deg = element.degree;
                // }
                // if(element.college != null && element.college != ""){
                //     col = element.college;
                // }
                uni = element.university;
                GPA = element.gpa;
                maj = element.major;
                deg = element.degree;
                col = element.college;
            }
        })
        refEducation.child(e.target.id).update(
        {'universityName': uni,
        'collegeName': col,
        'degree': deg,
        'major': maj,
        'gpa': GPA});
        if(props.toggleAdd){
            props.toggleAddFunc();
        }
        // props.increaseUniqueID();
    }
    let Array = [];
    props.eduCardsArraynew.map((element) => {
        console.log("Full Array:");
    
        console.log(props.eduCardsArraynew);
        console.log(element.university);
       Array.push(
        
        <Card id={element.id} style={{ width: '18rem' }}>
            <script>console.log(element.university)</script>
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
        <Button id={element.id} onClick={props.onClickDelete} variant="primary">Delete</Button>
        <Button id={element.id} onClick={onClickUpdate} variant="primary">Save/Update</Button>
        </Card.Body>
        </Card>   
       )
    });

    return (Array);
    
}

export default EdCard;