import './SignupComp.css';
import React , { Component, useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import Footer from "../Footer/Footer";

const SignupComp = (props) => {
    return(     
        <div>
            <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-app.js"/>
            <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-analytics.js"/>
        <div class = "container2">
            <div className="script" align = "center">Sign Up</div>
            <div className="formFont">
            <div class="names">
                <input name="firstName" onChange={props.handleFirstNameChange} value={props.firstName} id="firstName" type="text" placeholder="First Name" class="input"/>
                <input name="lastName" onChange={props.handleLastNameChange} value={props.lastName} id="lastName" type="text" placeholder="Last Name" class="input"/>
            </div>
            <div>
               
            </div>
            <div class="phone">
                <input name="phoneNum" onChange={(e) => props.validatePhone(e)} value={props.phoneNum} id="phoneNum" type="text" placeholder="Phone Number" class="input"/>
            </div>
            <div class="Email">
                <input name="email" id="email" type="email" onChange={props.handleEmailChange} value={props.email} placeholder="Email" class="input" />
            </div>
            <div class="password">
                <input name="password" id="password" type="password" onChange={props.handlePasswordChange} value={props.password} placeholder="Password" class="input"/>
            </div>
             <div className="button">
                <button class="medium ui pink button" onClick={props.signup} variant="contained" color="primary" name="submit">Sign Up</button>
                <button class="medium ui pink button" onClick={event =>  window.location.href='/Login'} variant="contained" color="primary" name="submit">Login</button>
            </div>
            </div>
            </div>
            <Footer/>
            </div>
    );
}
export default SignupComp;