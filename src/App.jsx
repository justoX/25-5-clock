import { useState } from 'react';



import './App.css'

function App() {
  const [breakLength, setBreakLength] = useState(5);

  const [sessionLength, setSessionLength] = useState(25);

  const [startStop, setStartStop] = useState('Start');

  const handleIncrement = (e) => {
    switch (e.target.id) {
      case ("session-increment"):
        setSessionLength(prevState => {
          return prevState + 1 > 60 ? prevState : prevState + 1; 
          });
        break;
      case ("break-increment"): 
        setBreakLength (prevState => {
          return prevState + 1 > 60 ? prevState : prevState + 1;
          });
        break;
      default:
        break;
    }
  }

  const handleDecrement = (e) => {
    switch (e.target.id) {
      case ("session-decrement"):
        setSessionLength(prevState => {
          return prevState - 1 <= 0 ? prevState : prevState - 1; 
          });
        break;
      case ("break-decrement"): 
        setBreakLength (prevState => {
          return prevState - 1 <= 0 ? prevState : prevState - 1;
          });
        break;
      default:
        break;
    }
  }

  return (
    <>
      <h1>25+5 Clock</h1>
      <div id='titles'>
        <div>
        <p id='break-label'>Break Length</p>
          <button id='break-increment' onClick={handleIncrement}>+</button>
          <p id='break-length'>{breakLength}</p>
          <button id='break-decrement' onClick={handleDecrement}>-</button>
        </div>
        <div>
          <p id='session-label'>Session Length</p>
          <button id='session-increment' onClick={handleIncrement}>+</button>
          <p id='session-length'>{sessionLength}</p>
          <button id='session-decrement' onClick={handleDecrement}>-</button>
        </div>
      </div>
      <div>
          <div id="timer-label">Session</div>
          <div id="time-left">25:00</div>
      </div>
      <button id="start_stop">{startStop}</button>
      <button id="reset">Reset</button>
    </>
  )
}

export default App
