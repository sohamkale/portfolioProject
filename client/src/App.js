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
import About from "./views/About/About";
import Resume from "./views/Resume/Resume.js";
import Projects from "./views/Projects/Projects.js";
import ContactMe from "./views/Contact Me/ContactMe.js";
import Navbar from "./components/navbar/navbarnew.js";
import LoginApp from "./views/Login/LoginApp";
import Signup from "./views/Signup/Signup";
import SoftSkills from "./components/DashCard/AboutCard/SoftSkills";
import RelevantSkills from "./components/DashCard/AboutCard/RelevantSkills";
import 'bootstrap/dist/css/bootstrap.min.css';
import SoftSkillsCard from './components/DashCard/AboutCard/SoftSkillsCard';
function App() {
  return (
    <div>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Sofia&family=Spartan:wght@400;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
      </head>
      <div class="app">
      <div className="header">
          <Navbar />
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Resume" component={Resume} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            {/* <Route exact path="/contact" component={ContactMe} /> */}
            <Route exact path="/Login" component={LoginApp} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/SoftSkills" component={SoftSkills} />
            <Route exact path="/RelevantSkills" component={RelevantSkills} />
            {/* <Route exact path="/delete" component={DeleteImage}/> */}
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

