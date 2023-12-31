import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
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
   await axios.post("http://localhost:3000/api/auth/register", inputs);
      navigate('/login')
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form >
        <input required type="text" placeholder="username" name='username' onChange={handleChange} />
        <input required type="text" placeholder="email" name='email' onChange={handleChange} />
        <input required type="text" placeholder="password" name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        {err &&<p>{err}</p>}
        <span><Link to='/login'>I already have an account.</Link></span>
      </form>
    </div>
  )
}

export default Register