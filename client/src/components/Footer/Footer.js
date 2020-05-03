import React from "react";
import { MDBCol, MDBBtn, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Soham Kale</h5>
            <p>
              Address: 1521 S. Kirkman Rd. Orlando, FL 32811
            </p>
          </MDBCol>
          <MDBCol md="6">
           <h5 className="title">Contact Me</h5>
            <ul>
              <li className="list-unstyled">
              Phone: (407) 956-7350
              </li>
              <li className="list-unstyled">
              Email Address 1: sohamkale@ufl.edu
              </li>
              <li className="list-unstyled">
              Email Address 2: soham.kale2412@gmail.com
              </li>
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