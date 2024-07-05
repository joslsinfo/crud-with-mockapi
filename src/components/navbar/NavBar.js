import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/users/read" className="navbar-logo">
          CRUD App
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="navbar-link">
              Create
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/users/read" className="navbar-link">
              Read
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/update" className="navbar-link">
              Update
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
