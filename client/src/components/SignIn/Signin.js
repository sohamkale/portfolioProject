import React , { Component, useState, useEffect } from "react";

import "./Signin.css";
const Signin = (props) => {
   
    return(
//         <div>
//         <div id="logb">
//             <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-app.js"/>
//             {/* <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-analytics.js"/> */}
       
//         <div class = "container1">
//             <div className="script" align = "center">Sign In</div>
//             <div className="formFont">
//             <div class="Email">
//                 <input name="email" id="email" type="email" onChange={props.handleEmailChange} value={props.email} placeholder="Email" class="input" />
//             </div>
//             <div class="password">
//                 <input name="password" id="password" type="password" onChange={props.handlePasswordChange} value={props.password} placeholder="Password" class="input"/>
//             </div>
//             </div>
//             <div className="button">
//                 <form onClick={props.login} className="buf">
//                     <button  class="medium ui pink button" >
//                         Login
//                     </button>
//                 </form>
//                 <form action='Signup' className="buf">
//                     <button  class="medium ui pink button" >
//                         Sign Up
//                     </button>
//                 </form>
//                 <form className="buf">
//                     <button onClick={props.logout} class="medium ui pink button" >
//                         Logout
//                     </button>
//                 </form>
//             </div>
//         </div>
//   </div>
//   {/* <Footer/> */}
//   </div>

<body>
<div class="container">
  <div class="row">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card bg-dark text-white card-signin my-5">
        <div class="card-body">
          <h5 class="card-title text-center">Sign In</h5>
          <form class="form-signin">
            <div class="form-label-group">
              {/* <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/> */}
              <input name="email" id="email" type="email"  class="form-control" onChange={props.handleEmailChange} value={props.email}  placeholder="Email" required autofocus/>
              <label for="email">Email address</label>
            </div>

            <div class="form-label-group">
              {/* <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/> */}
              <input name="password" id="password" type="password" onChange={props.handlePasswordChange} value={props.password} placeholder="Password" class="input"/>
              <label for="password">Password</label>
            </div>

            <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={props.login} type="submit">Sign in</button>
            <form action='Signup' className="buf">
            <hr class="my-2"/>
            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign up</button>
            </form>
            
            <hr class="my-4"/>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</body>

    )

}

export default Signin;