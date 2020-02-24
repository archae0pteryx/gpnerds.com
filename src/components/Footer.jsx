import React from 'react'
import { Link } from '@reach/router'

export default function Header() {
  return (
    <div className="nav-container-absolue">
      <div className="nav-container">
        <a href="https://github.com/archae0pteryx" className="nav-link-container animated fadeInUp">
          <span className="nav-link">
            Projects
          </span>
        </a>
        <a href="https://linkedin.com/in/archae0pteryx" className="nav-link-container animated fadeInUp delay-1s">
          <span className="nav-link">
            LinkedIn
          </span>
        </a>
        <a href="mailto:root@gpnerds.com" className="nav-link-container animated fadeInUp delay-2s">
          <span className="nav-link" >
            Contact
          </span>
        </a>
      </div>
    </div>
  )
}
