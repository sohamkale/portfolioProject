import React, {useState, useEffect} from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import fire, {storage} from "../src/config/Fire";
function App() {
  const [userUid, setUserUid] = useState(null);
  const [uniCardsArray, setUniCardsArray] = useState([]); //array to hold universityNames
  const [webUrl, setWebUrl] = useState(null);
  var db = fire.database();
  var refUserAccountDB = db.ref(`${userUid}`);
  var refUserAccountStorage = storage.ref(`images/${userUid}`);

  useEffect (() => {
      fire.auth().onAuthStateChanged(function(user) {
          if (user) {
            alert(user.uid);
              setUserUid(user.uid);

          }
        }); 

  }, []);

  useEffect(() => {

    refUserAccountDB.on("value", function(userSnapshot) {
      alert("HUI" + userSnapshot.key);
      userSnapshot.forEach(function(snapshot) {
        alert(snapshot.key);
          if(snapshot.key === "publish"){
            alert("HUI" + snapshot.val())
              setWebUrl(snapshot.val());
          }
      });
    });
  }, [userUid])

  return (
    <div>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Sofia&family=Spartan:wght@400;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
      </head>
      {(function() {
            
            if ( webUrl != false) {
              alert(webUrl)
                return (
                  <div class="app">
                  <div className="header">
                      <Navbar />
                    </div>
                    <BrowserRouter>
                      <Switch>
                        <Route exact path={"/" + webUrl + "/Home" } component={Home} />
                        <Route exact path={"/" + webUrl + "/Resume" } component={Resume} />
                        <Route exact path={"/" + webUrl + "/about" } component={About} />
                        <Route exact path={"/" + webUrl + "/Projects" } component={Projects} />
                        {/* <Route exact path="/contact" component={ContactMe} /> */}
                        <Route exact path="/Login" component={LoginApp} />
                        <Route exact path="/Signup" component={Signup} />
                  
                        {/* <Route exact path="/delete" component={DeleteImage}/> */}
                        {/* remove this above line */}
                        <Route exact path="/">
                          <Redirect to={"/" + webUrl + "/Home" } />
                        </Route>
                        {/* <Route component={NotFound} /> */}
                      </Switch>
                    </BrowserRouter>
                  </div>
                )
            }else{
              return (

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
                
                      {/* <Route exact path="/delete" component={DeleteImage}/> */}
                      {/* remove this above line */}
                      <Route exact path="/">
                        <Redirect to="/Home" />
                      </Route>
                      {/* <Route component={NotFound} /> */}
                    </Switch>
                  </BrowserRouter>
                </div>
              )
            } 
            })()
      }
      
    </div>
  );
}

export default App;

