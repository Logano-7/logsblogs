import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form >
        <input required type="text" placeholder="username" />
        <input required type="text" placeholder="password" />
        <button>Login</button>
        <p>This is an error!</p>
        <span><Link to='/register'>Creat an Account</Link></span>
      </form>
    </div>
  )
}

export default Login