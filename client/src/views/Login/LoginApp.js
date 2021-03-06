import React, { Component, useEffect, useState } from 'react';
import fire from "./../../config/Fire";
import Login from './Login';
import Dashboard from "../admin/Dashboard";
// import Signup from '../Signup/Signup';
// import AdminDash from "../AdminDash/AdminDash";
// import Profile from "../UserProfile/profile.js";
// import LoginCard from '../../components/Cards/LoginCard';
import Home from "./../Home/Home";


class LoginApp extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
      count: 0,
    });
    this.authListener = this.authListener.bind(this);
    this.displayPage= this.displayPage.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      
      if (user) {
        this.state.count++;
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  displayPage() {
    if(this.state.user != null){
      if(this.state.user.email === "admin@gmail.com"){ //change this to attractionSalonweb@gmail.com
        // return <AdminDash/>
      }else {
        return <Dashboard/>
        // this.props.history.push('/home');
      }
    }else {
      return <Login/>
    }
  }

  render() {
    return (
      <div> {this.displayPage()}</div>
    // <div> {this.state.user ? ( <AdminDash/>) : (<Login/>)}</div>
    );
  }
}

 export default LoginApp;