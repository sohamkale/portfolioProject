import React, { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';

const ResumeCard = () => {
    return(
        <Card style={{ width: '50vw' }}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-a2412.appspot.com/o/Screen%20Shot%202020-04-27%20at%203.47.34%20AM.png?alt=media&token=88e3465d-ecb5-4d7f-ac4c-d8a74ff8a1f1"/>
        <Card.Body>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text> */}
        </Card.Body>
      </Card>
    //   <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/portfolio-a2412.appspot.com/o/Screen%20Shot%202020-04-27%20at%203.47.34%20AM.png?alt=media&token=88e3465d-ecb5-4d7f-ac4c-d8a74ff8a1f1" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the bulk of
    //       the card's content.
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    );
}

export default ResumeCard;