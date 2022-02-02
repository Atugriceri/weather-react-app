import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"

const Footer = ({theme}) => {
  return (
    <footer>
      <p className={`text-${theme}`}>
        Coded by
        <a 
          className={`text-${theme} link`} 
          href="https://github.com/Atugriceri"
          target="_blank"
        >
          Alper Tugriçeri
        </a>
      </p>
      <ul>
        <li>
          <a 
            href="https://www.linkedin.com/in/alpertugriceri/"
            target="_blank"
          >
            <i className={`bi bi-linkedin text-${theme}`}></i>
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/Atugriceri"
            target="_blank"
          >
            <i className={`bi bi-github text-${theme}`}></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
