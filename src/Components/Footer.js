import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"

const Footer = ({theme}) => {
  return (
    <footer>
      <p className={`text-${theme}`}>
        Copyright &copy; 2022 - Now,
        <a 
          className={`text-${theme} link`} 
          href="https://github.com/Atugriceri"
        >
          Alper Tugriçeri
        </a>
      </p>
      <ul>
        <li>
          <a 
            href="https://www.linkedin.com/in/alpertugriceri/"
          >
            <i className={`bi bi-linkedin text-${theme}`}></i>
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/Atugriceri"
          >
            <i className={`bi bi-github text-${theme}`}></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
