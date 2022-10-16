import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";

function Login() {
  return (
    <div className="container-fluid overflow-auto">
      <div className="row">
        <div className="col-4">
          <div className="login-box">
              <img className="logo" src={require("../images/ContrastLogo.png")} alt="ContrastLogo"/>
              <form className="form">
                <div className="form-group">
                  <input type="text" id="username" placeholder="Username"/>
                </div>
                <div className="form-group">
                  <input type="password" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="login-button">SIGN IN</button>
              </form>
            <div className='register'>
              <a href="https://www.linkedin.com/feed/" className="link-secondary">Forgot password?</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Login;
