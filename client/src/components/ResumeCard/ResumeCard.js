import React, { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import "./ResumeCard.css";
const ResumeCard = (props) => {
    return(
        <Card style={{ width: props.cardWidth, height: '100vh' }}>
        <Card.Img variant="top" style={{height: '100vh' }} src="https://firebasestorage.googleapis.com/v0/b/portfolio-a2412.appspot.com/o/Screen%20Shot%202020-04-27%20at%203.47.34%20AM.png?alt=media&token=88e3465d-ecb5-4d7f-ac4c-d8a74ff8a1f1"/>
        <Card.Body>
        </Card.Body>
      </Card>
    );
}

export default ResumeCard;