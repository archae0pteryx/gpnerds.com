import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { Home, Navigation } from './components'

function App() {
  return (
    <React.StrictMode>
      <div id='wrapper'>
        <Navigation />
        <Router>
          <Home path="/" />
        </Router>
        <footer><p id='cw'>© 2020 | r. lewis</p></footer>
      </div>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
