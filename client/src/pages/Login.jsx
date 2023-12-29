import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  // Check Cookies
  function listCookies() {
    let cookiesArray = document.cookie.split("; ");
    let cookiesList = {};

    cookiesArray.forEach(function (cookie) {
      let parts = cookie.split("=");
      cookiesList[parts[0]] = parts[1];
    });

    return cookiesList;
  }

 // Handle Change
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const results = await axios.post(
        "http://localhost:3000/api/auth/login",
        inputs
      );
      console.log(results);
      console.log(document.cookie);
    } catch (err) {
      setErr(err.response.data);
    }
  };


  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          <Link to="/register">Creat an Account</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
