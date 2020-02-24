import React from 'react'
import Background from './Background'
import Footer from './Footer'
import '../assets/glitch.scss'
import '../assets/landing.scss'
import '../assets/animate.css'

export default function Landing() {
  return (
    <div className="animated fadeIn slower">
      <div className="glitch">
        <div className="container">
          <Background />
        </div>
      </div>
      <Footer />
    </div>
  )
}
