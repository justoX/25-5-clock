import { useState } from 'react';



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>25+5 Clock</h1>
      <div id='titles'>
        <div>
          <p id='break-label'>Break Length</p>
          <p id ='break-length'><span id='break-increment'>+</span>1<span id='break-decrement'>-</span></p>
        </div>
        <div textAl>
          <p id='session-label'>Session Length</p>
          <p id='session-length'><span id='session-increment'>+</span>1<span id='session-decrement'>-</span></p>
        </div>
      </div>
    </>
  )
}

export default App
