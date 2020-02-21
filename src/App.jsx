import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { Home, Navigation, Login, Resume, Projects } from './components'

function App() {
  return (
    <React.StrictMode>
      <div id="wrapper">
        <Navigation />
        <Router>
          <Home path="/" />
          <Login path="/login" />
          <Resume path="/resume" />
          <Projects path="/projects" />
        </Router>
        <footer>
          <a href="mailto:root@gpnerds.com" id="cw">
            @archae0pteryx
          </a>
        </footer>
      </div>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
