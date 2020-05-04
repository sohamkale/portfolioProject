import React, { useEffect, useLayoutEffect, useState } from "react"
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import fire from "./../../config/Fire";

import * as ReactBootStrap from "react-bootstrap";
const Navbarcomp = () => {
    const [initials, setInitials] = useState("");
    const [userUid, setUserUid] = useState(null);
    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
            } else {
            }
          }); 
    }, [])

    useLayoutEffect (() => {
        if(userUid != null){
        var db = fire.database();
        var ref = db.ref(`${userUid}/Navbar`);
        ref.on("value", function(userSnapshot) {
            userSnapshot.forEach(function(snapshot) {
                if(snapshot.key === "initials"){
                    // alert(snapshot.val());
                    setInitials(snapshot.val());
                }
            });
        });
    }
    }, [userUid])
    return (
<ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
<ReactBootStrap.Navbar.Brand href="/home">{initials}</ReactBootStrap.Navbar.Brand>
<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
<ReactBootStrap.Nav className="mr-auto"> 
            <Nav.Link href="/home">Home</Nav.Link>
             <Nav.Link href="/about">About</Nav.Link>
             <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Signup">Signup</Nav.Link>
             {/* <Nav.Link href="/contact">Contact Me</Nav.Link> */}
</ReactBootStrap.Nav>
</ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    );
}

export default Navbarcomp;