import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })

  const [err, setErr] = useState(null)
const navigate = useNavigate()
  const handleChange = (e) => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   await axios.post("http://localhost:3000/api/auth/login", inputs);
      console.log("logged in");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form >
        <input required type="text" placeholder="username" name="username" onChange={handleChange} />
        <input required type="text" placeholder="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit} >Login</button>
        {err &&<p>{err}</p>}
        <span><Link to='/register'>Creat an Account</Link></span>
      </form>
    </div>
  )
}

export default Login