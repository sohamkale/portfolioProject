import React, {useState, useLayoutEffect, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import DashCard from "../../components/DashCard/DashCard";
import AboutCard from "../../components/DashCard/AboutCard/AboutCard";
import FooterCard from "../../components/DashCard/FooterCard/FooterCard";
import FooterLinks from "../../components/DashCard/FooterCard/FooterLinks";
import EducationCard from "../../components/DashCard/AboutCard/EducationCard";
import EdCard from "../../components/DashCard/AboutCard/EdCard";
// import EduCard from "../../components/DashCard/AboutCard/EduCard";
import fire from "./../../config/Fire";
import { useId } from "react-id-generator";
import "./Dashboard.css";
const DashboardNew = (props) => {
    // let id = useId();
    // const [uniCount, setUniCount] = useState(1);
    const [university, setUniversity] = useState(null);
    const [college, setCollege] = useState(null);
    const [degree, setDegree] = useState(null);
    const [major, setMajor] = useState(null);
    const [gpa, setGpa] = useState(null);
    const [indexToDelete, setIndexToDelete] = useState("");
    const [toggleAdd, setToggleAdd] = useState(true);
    const [isDelete, setIsDelete] = useState(false);
    const [numOfCards, setNumOfCards] = useState(0);
    const [uniqueIdCount, setUniqueIdCount] = useState(0);
    const [userUid, setUserUid] = useState(null);
    const [eduCardsArray, setEduCardsArray] = useState([]); //array to hold universityNames
    const [actualEduCardsArray, setActualEduCardsArray] = useState([]);
    var db = fire.database();
    var refEducation = db.ref(`${userUid}/About/Education`);
    const [fieldsArray, setFieldsArray] = useState([{
    }]);
    const addUniversity = (e) => {
        alert("Inside add");
        let newArray = [...actualEduCardsArray];
        setNumOfCards(numOfCards + 1);              ///PROBLEM: NEEDS TO BE FIXED WITH UNIQUEIDNUM
        setToggleAdd(true);
        let newObj = {
            'id': (uniqueIdCount + 1).toString(),
            'university': "",
            'college': "",
            'degree': "",
            'major': "",
            'gpa': "",
        }
        console.log("Before concat: " + newArray);
        newArray = newArray.concat(newObj);

        console.log("After concat: " + newArray);
        setActualEduCardsArray(newArray);
        // setUniqueIDs(uniqueIDs.concat(id));
        // setUniCount(uniCount + 1);
    }

    const onClickDelete = (e) => {
        alert(e.target.id);
        setIsDelete(true);
        setIndexToDelete(e.target.id);
        setNumOfCards(numOfCards - 1);
        refEducation.child(e.target.id).remove();
        let newDeletedArray = [...actualEduCardsArray];
        console.log("Before Deleting: " + newDeletedArray);
        // newArray = newArray.concat(newObj);
        newDeletedArray.map((ele, index) => {
            if(ele.id === e.target.id){
                newDeletedArray.splice(index, 1);
            }
        })
        console.log("After Deletion: " + newDeletedArray);
        setActualEduCardsArray(newDeletedArray);
        
        // refEducation.update({'universityName': university,
        // 'collegeName': college,
        // 'degree': degree,
        // 'major': major,
        // 'gpa': gpa});
    }

    useEffect(() => {
        if(isDelete){
            console.log(numOfCards);
            console.log(eduCardsArray);
            console.log(actualEduCardsArray);
        }
    }, [isDelete])

useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            } else {
            }
          }); 
    }, []);

    useLayoutEffect (() => {
        // alert("in setEduCards");
        refEducation.on("value", function(userSnapshot) {
            let shouldSetToZero = true;
            userSnapshot.forEach(function(snapshot) {
                let a, b, c, d, e;
                shouldSetToZero = false;
                snapshot.forEach(function(snap) {
                    if(snap.key === "collegeName"){
                        a = snap.val();
                    }else if(snap.key === "degree"){
                        b = snap.val();
                    }else if(snap.key === "gpa"){
                        c = snap.val()
                    }else if(snap.key === "major"){
                        d = snap.val()
                    }else if(snap.key === "universityName"){
                        e = snap.val();
                    }
                })
                setEduCardsArray(eduCardsArray.concat({
                    'id': snapshot.key,
                    'university': e,
                    'college': a,
                    'degree': b,
                    'major': d,
                    'gpa': c,
                })) //NEED TO MAKE SURE THIS IS UPDATED BEFORE APPENDING IT TO THE ACTUAL ARRAY
                alert("snapshot.key: " + snapshot.key);
                setUniqueIdCount(parseInt(snapshot.key));
            });
            if(shouldSetToZero){
                setUniqueIdCount(0);
            }
        });
    }, [userUid])

    const toggleDelete = (e) => {
        // setIsDelete(!isDelete);
        setIsDelete(false);
    }

    const toggleAddFunc = (e) => {
        // setIsDelete(!isDelete);
        setToggleAdd(false);
    }

    const increaseUniqueID = (e) => {
        setUniqueIdCount(uniqueIdCount+1);
    }

    useLayoutEffect (() => {
        if(eduCardsArray != null && eduCardsArray != "" && eduCardsArray[eduCardsArray.length - 1].id != numOfCards && toggleAdd ){
            alert("INSIDE eduCARDSEFFECT " + toggleAdd)
             setUniqueIdCount(uniqueIdCount + 1);
             setNumOfCards(numOfCards + 1);
            //  alert(actualEduCardsArray);
            //  console.log(eduCardsArray)
             setActualEduCardsArray(actualEduCardsArray.concat(eduCardsArray))
        }else if (eduCardsArray != null && eduCardsArray != "" && eduCardsArray[eduCardsArray.length - 1].id == numOfCards){
            console.log(eduCardsArray);
        }
    }, [eduCardsArray])

    useEffect(() => {
        // if(actualEduCardsArray != null && actualEduCardsArray != undefined && actualEduCardsArray != ""){
            // setUniqueIdCount(uniqueIdCount + 1);
        //     alert(actualEduCardsArray);
        // }
        console.log(uniqueIdCount);
         console.log(actualEduCardsArray);
    }, [actualEduCardsArray])

    useEffect(() => {
         alert("uniqueID: " + uniqueIdCount);
    }, [uniqueIdCount])
    return (
        <div className="fullWidthDiv">
            <Container fluid className="bg-dark">
                <Row className="bg-info">
                    <Col mb={12}>
                        <DashCard/>
                    </Col>
                </Row>
                <Row className="text-center text-white">Update About Page</Row>
                <Row className="text-center text-white"><Button onClick={addUniversity}>Add Previous University</Button></Row>
                <Row className="bg-danger">
                    <Col mb={6}>
                        <AboutCard/>
                    </Col>
                    <Col mb={6}>
                        <EdCard
                        indexToDelete={indexToDelete}
                        toggleAddFunc={toggleAddFunc}
                        toggleAdd={toggleAdd}
                        increaseUniqueID={increaseUniqueID}
                        isDelete={isDelete}
                        toggleDelete={toggleDelete}
                        onClickDelete={onClickDelete}
                        eduCardsArraynew={actualEduCardsArray}/>
                    </Col>
                    {/* <Col mb={6}>
                        <EduCard/>
                    </Col> */}
                    {/* <Col mb={6}>
                        <EducationCards
                        uniqueIDs={uniqueIDs}
                        cardNum={uniCount}/>
                    </Col> */}
                </Row>
                <Row className="bg-dark">
                    <Col mb={6}>
                        <FooterCard/>
                    </Col>
                    <Col mb={6}>
                        <FooterLinks/>
                    </Col>
                </Row>
                {/* <Row className="bg-danger">
                    <Col mb={12}>
                        <AboutCard/>
                    </Col>
                </Row>
                <Row className="bg-danger">
                    <Col mb={12}>
                        <AboutCard/>
                    </Col>
                </Row> */}
                
            </Container>
        </div>
    );

}

export default DashboardNew;