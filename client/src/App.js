import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login"
import Home from "./components/home"
import Notebook from "./components/notebook"
import "./css/style.css"

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }
  async function logout() {
    setUser(null);
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Home
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/notebook" className="nav-link">
              Notebook
            </Link>
          </li>
          <li className="nav-item" >
            { user ? (
              <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.name}
              </a>
            ) : (
            <Link to="/login" className="nav-link">
              Login
            </Link>
            )}

          </li>
        </div> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route
          path="/notebook/:id"
          element={<Notebook />}

        />
        <Route
          path="/login"
          element={<Login />}

        />
      </Routes>
    </div>
  );
}

export default App;
