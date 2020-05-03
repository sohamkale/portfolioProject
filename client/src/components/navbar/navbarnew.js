import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import * as ReactBootStrap from "react-bootstrap";
const Navbarcomp = () => {
    return (
//     <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="mr-auto">
//             <Nav.Link href="/home">Home</Nav.Link>
//             <Nav.Link href="/about">About</Nav.Link>
//             <Nav.Link href="/projects">Projects</Nav.Link>
//             <Nav.Link href="/resume">Resume</Nav.Link>
//             <Nav.Link href="/contactMe">Contact Me</Nav.Link>
//         </Nav>
//   </Navbar>
  


<ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
<ReactBootStrap.Navbar.Brand href="/home">SK</ReactBootStrap.Navbar.Brand>
<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
<ReactBootStrap.Nav className="mr-auto"> 
            <Nav.Link href="/home">Home</Nav.Link>
             <Nav.Link href="/about">About</Nav.Link>
             <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
             {/* <Nav.Link href="/contact">Contact Me</Nav.Link> */}
</ReactBootStrap.Nav>
</ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    );
}

export default Navbarcomp;