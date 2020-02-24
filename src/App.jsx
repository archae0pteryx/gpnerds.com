import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import Landing from './components/Landing'
import Projects from './components/Projects'
import './assets/root.scss'
function App() {
  return (
    <Router>
      <Landing path='/' />
      <Projects path='/projects' />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
