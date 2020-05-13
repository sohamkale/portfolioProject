import React, { useEffect, useLayoutEffect, useState } from "react"
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import fire from "./../../config/Fire";
import {Button} from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";
const Navbarcomp = () => {
    const [initials, setInitials] = useState("");
    const [userUid, setUserUid] = useState(null);
    const [isUser, setIsUser] = useState(false);

    useEffect (() => {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserUid(user.uid);
                setIsUser(true);
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
                   
                    setInitials(snapshot.val());
                }
            });
        });
    }
    }, [userUid])

    const logout = () => {
        fire.auth().signOut();
    }
    return (
<ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
<ReactBootStrap.Navbar.Brand href="/home">{initials}</ReactBootStrap.Navbar.Brand>
<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
<ReactBootStrap.Nav className="mr-auto"> 
            <Nav.Link href="/true/home">Home</Nav.Link>
             <Nav.Link href="/true/about">About</Nav.Link>
             <Nav.Link href="/true/projects">Projects</Nav.Link>
            <Nav.Link href="/true/resume">Resume</Nav.Link>
            {isUser ? <Nav.Link href="/true/Login">Dashboard</Nav.Link> : <Nav.Link href="/true/Login">Login</Nav.Link>}
            {isUser ? null : <Nav.Link href="/true/Signup">Signup</Nav.Link>}
            
</ReactBootStrap.Nav>
</ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    );
}

export default Navbarcomp;