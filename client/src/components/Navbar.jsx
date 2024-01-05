import React, { useContext } from "react";
import Logo from "../img/logslogo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/authContext.jsx";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt=".mylogs Logo" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=webDev">
            <h6>WEB DEV</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=sports">
            <h6>SPORTS</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <Link className="link" to="/?cat=movies">
            <h6>MOVIES</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span
            onClick={logout}
            >Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="log">
            <Link className="link" to="/log">
              Log
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
