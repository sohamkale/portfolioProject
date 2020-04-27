// import React from 'react';
// import { Route, Switch, Redirect  } from 'react-router-dom';
// import Home from "./views/home1/home";
// import NotFound from "./views/NotFound";
// import NavBar from "./components/Header/NavBar";

// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <Switch>
//         <Route exact path="/Home" component={Home} />
//         <Route exact path="/">
//           <Redirect to="/Home" />
//         </Route>
//         <Route component={NotFound}/>
//       </Switch>
//     </div>
//   );
// }

// export default App;
import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from "./views/Home/Home.js";
import Resume from "./views/Resume/Resume.js";
import Navbar from "./components/navbar/navbarnew.js";
 import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Sofia&family=Spartan:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>
      <div class="app">
      <div className="header">
          <Navbar />
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Resume" component={Resume} />
            {/* <Route exact path="/Projects" component={Services} />
            <Route exact path="/Login" component={LoginHome} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/delete" component={DeleteImage}/> */}
            {/* remove this above line */}
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            {/* <Route component={NotFound} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

