import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";

function Login() {
  return (
    <div class="container">
      <div class="row login-box justify-content-center text-bg-lightblue">
        {/*<div class="h1 text-center"> ContrastAI</div> replace with logo */}
        <img class="img logo" src={require('../images/ContrastLogo.png')} alt="ContrastLogo"/>
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="email" aria-describedby="usernameHelp" placeholder="Username"/>
            <small id="usernameHelp" class="form-text text-muted">Enter User ID as in EHR</small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password"/>
          </div>
          <button type="submit" class="btn btn-primary mt-5">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
