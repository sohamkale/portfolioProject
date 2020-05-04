import React, {useState, useEffect, useLayoutEffect} from "react";
import { MDBCol, MDBBtn, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import fire from "../../config/Fire";
const Footer = () => {
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

  return (
    
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">{firstName} {lastName}</h5>
            <p>
              {address}
            </p>
          </MDBCol>
          <MDBCol md="6">
           <h5 className="title">Contact Me</h5>
            <ul>
              <li className="list-unstyled">
              Phone: {phoneNum}
              </li>
              <li className="list-unstyled">
              Email Address: {email}
              </li>
              {/* <li className="list-unstyled">
              Email Address 2: soham.kale2412@gmail.com
              </li> */}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
          <MDBContainer>
              <MDBRow>
                  <MDBCol><MDBIcon onClick={event => window.open("https://www.instagram.com/soham.kale2412/")} fab icon="instagram" size="2x"/></MDBCol>
                  <MDBCol><MDBIcon onClick={event => window.open("https://www.facebook.com/soham.kale2")} fab icon="facebook" size="2x" /></MDBCol>
                  <MDBCol><MDBIcon onClick={event => window.open("https://www.linkedin.com/in/soham-kale-52492ab8")} fab icon="linkedin" size="2x" /></MDBCol>
                  <MDBCol><MDBIcon onClick={event => window.open("https://twitter.com/soham2412")} fab icon="twitter" size="2x" /></MDBCol>
              </MDBRow>
          </MDBContainer>
      <br/>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} <a href="https://portfolioappproject.herokuapp.com/"> Soham Kale.</a> All rights reserved.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;