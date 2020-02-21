import React from 'react'
import { Link } from '@reach/router'

export default function Navigation() {
  return (
    <header>
      <Link className='nav-item' to="/">home</Link>
      <Link className='nav-item' to="/projects">projects</Link>
      <Link className='nav-item' to="/resume">resume</Link>
      <Link className='nav-item' to="/login">login</Link>
    </header>
  )
}
