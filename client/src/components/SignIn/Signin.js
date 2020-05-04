import React , { Component, useState, useEffect } from "react";

import "./Signin.css";
const Signin = (props) => {
   
    return(
        <div>
        <div id="logb">
            <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-app.js"/>
            {/* <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-analytics.js"/> */}
       
        <div class = "container1">
            <div className="script" align = "center">Sign In</div>
            <div className="formFont">
            <div class="Email">
                <input name="email" id="email" type="email" onChange={props.handleEmailChange} value={props.email} placeholder="Email" class="input" />
            </div>
            <div class="password">
                <input name="password" id="password" type="password" onChange={props.handlePasswordChange} value={props.password} placeholder="Password" class="input"/>
            </div>
            </div>
            <div className="button">
                <form onClick={props.login} className="buf">
                    <button  class="medium ui pink button" >
                        Login
                    </button>
                </form>
                <form action='Signup' className="buf">
                    <button  class="medium ui pink button" >
                        Sign Up
                    </button>
                </form>
                <form className="buf">
                    <button onClick={props.logout} class="medium ui pink button" >
                        Logout
                    </button>
                </form>
            </div>
        </div>
  </div>
  {/* <Footer/> */}
  </div>
    )

}

export default Signin;