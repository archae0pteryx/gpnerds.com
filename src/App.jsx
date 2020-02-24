import React from 'react'
import ReactDOM from 'react-dom'
import './assets/glitch.scss'
import './assets/style.css'
import Background from './Background'
import Header from './Header'

function App() {
  return (
    <div className='container'>
      <Header />
      <Background />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
