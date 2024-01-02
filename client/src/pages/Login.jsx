import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle Change
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle Submit
  async function handleSubmit(e){
    preventDefault(e);
    await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    }).then(async (res) => {
      const data = await res.json();
      if (res.status === 200) {
        setCurrentUser(data.user);
        navigate("/");
      } else {
        setError(data.message);
      }
    });
  }


  

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
        {error && <p>{error}</p>}
        <span>
          <Link to="/register">Creat an Account</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
