import React from 'react'
import { Link } from '@reach/router'

export default function Navigation() {
  return (
    <header>
      <a className='nav-item' href='mailto:root@gpnerds.com'>contact</a>
      <Link className='nav-item' to="/login">login</Link>
    </header>
  )
}
