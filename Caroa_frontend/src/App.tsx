// import { useState } from 'react'
import './App.css'
import Button from './components/button/button.tsx'
function App() {

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Caroa</h1>
          <p>
            This is a simple React application.
          </p>
          <Button color='primary' label="Click Me" onClick={() => alert('Button clicked!')} />
        </header>
      </div>
    </>
  )

}

export default App
