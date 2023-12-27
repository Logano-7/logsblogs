import React from 'react'
import FooterLogo from '../img/logsLogoFooter.png'

function Footer() {
  return (
    <footer>
      <img src={FooterLogo} alt=".mylogs Logo" />
      <span>
        Made by Martians👽 with <b>React.js</b>
        <ul>
          <li>
            <a href="www.linkedin.com/in/logan-martin-7-js">About Me</a>
          </li>
          <li>|</li>
          <li>
            <a href="https://github.com/Logano-7">GitHub</a>
          </li>
          <li>|</li>
          <li>
            <a href="https://www.codewars.com/dashboard">CodeWars</a>
          </li>

        </ul>
      </span>
    </footer>
  )
}

export default Footer