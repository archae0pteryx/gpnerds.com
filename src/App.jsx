import React from 'react'
import ReactDOM from 'react-dom'
import './assets/glitch.scss'
import './assets/style.css'
import './assets/animate.css'
import Background from './components/Background'
import Footer from './components/Footer'

function App() {
  return (
    <div className='animated fadeIn slower'>
      <div className="container">
        <Background />
      </div>
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
