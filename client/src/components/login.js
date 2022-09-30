import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";

function Login() {
  return (
    <div class="full-screen-container">
      <div class="login-box">
        {/*<div class="h1 text-center"> ContrastAI</div> replace with logo */}
          <img class="logo" src={require('../images/ContrastLogo.png')} alt="ContrastLogo"/>
          <form class= "form">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" id="username" aria-describedby="usernameHelp" placeholder="Enter Username"/>
              
            </div>
            
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="Enter Password"/>
            </div>
            <button type="submit" class="login-button">Submit</button>
          </form>
        </div>
  
    </div>
  );
}

export default Login;
