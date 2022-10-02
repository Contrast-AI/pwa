import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import "./style.css"
import Login from "./components/login"
import Home from "./components/home"

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
          ContrastAI PWA
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/restaurants" className="nav-link">
              Backend Data Demo
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

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<RestaurantsList />} />
          <Route
            path="/restaurants/:id"
            element={<Restaurant />}

          />
          <Route
            path="/login"
            element={<Login />}

          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
