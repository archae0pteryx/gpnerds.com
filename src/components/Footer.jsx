import React from 'react'

export default function Header() {
  return (
    <div className="nav-container-absolue">
      <div className="nav-container">
        <div className="nav-link-container animated fadeInUp">
          <a className="nav-link" href="https://github.com/archae0pteryx">
            Projects
          </a>
        </div>
        <div className="nav-link-container animated fadeInUp delay-1s">
          <a className="nav-link" href="https://linkedin.com/in/archae0pteryx">
            LinkedIn
          </a>
        </div>
        <div className="nav-link-container animated fadeInUp delay-2s">
          <a className="nav-link" href="mailto:root@gpnerds.com">
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
