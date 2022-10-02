import React from 'react'
import logo from './assets/svg/logo.svg'
import './assets/css/App.css'

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
