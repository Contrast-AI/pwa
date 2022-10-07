import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

function Login() {
  return (
    <div class="container-fluid overflow-auto">
      <div class="row-10">
        <div class="col-12">
          <div class="login-box">
            <div class="row-12">
              <img class="logo" src={require("../images/ContrastLogo.png")} alt="ContrastLogo"/>
              <form class="form">
                  <div class="form-group">
                    <input type="text" id="username" placeholder="Enter Username"/>
                  </div>
                  <div class="form-group">
                    <input type="password" id="password" placeholder="Enter Password" />
                  </div>
                  <button type="submit" class="login-button">SIGN IN</button>
                </form>
            </div>  
            <div class="row-12 register">
              <a href="https://www.linkedin.com/feed/" class="link-secondary">Forgot password?</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Login;
