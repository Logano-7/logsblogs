import React from 'react'
import Logo from '../img/logslogo.png'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt=".mylogs Logo" />
      <span>
        Made by Martians👽 with <b>React.js</b>
      </span>
    </footer>
  )
}

export default Footer