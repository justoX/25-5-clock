import { useState } from 'react';
import { useEffect } from 'react';


import './App.css'

function App() {

  const [breakLength, setBreakLength] = useState(5);

  const [sessionLength, setSessionLength] = useState(1500);

  const [startStop, setStartStop] = useState('Start');

  const [isDisabled, setDisabled] = useState(false);
  
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  const [intervalId, setIntervalId] = useState(null);


  //TODO - make session length update only when session length is incremented while the timer is paused, when the timer is stopped 
  // it does not retain the time on stop but updates to current session length this behavior is not desired. When useEffect() is 
  // uncommented the timer correctly retains the time-on-stop but session length incrementation does not change session length while timer
  // is stopped.
  useEffect(() => {
    if (!intervalId) setTimeLeft(sessionLength);
  });


  // const timer = (seconds) => {
  //   if (!intervalId) intervalId = setInterval(() => {
  //     setTimeLeft(prevState => prevState - 1);
  //   }, 1000);
  // }

  const handleStart = (e) => {
    if (e.target.textContent === 'Start') {
      const id = setInterval(() => {
        setTimeLeft(prevState => prevState === 0 ? prevState : prevState - 1);
      }, 1000);

      setIntervalId(id);
      setDisabled(true);
      console.log(intervalId);
    } else if (e.target.textContent === 'Stop') {
      console.log(intervalId);
      clearInterval(intervalId);
      setIntervalId(null);
      setDisabled(false);
    }
    
    setStartStop(prevState => {
      return prevState === 'Start' ? 'Stop' : 'Start';
    })
    
    
  }

  const handleIncrement = (e) => {
    switch (e.target.id) {
      case ("session-increment"):
        setSessionLength(prevState => {
          console.log(`${e.target.id}: increment  prevState: ${prevState}`)
          return prevState + 60 > 1500 ? prevState : prevState + 60; 
          });
        // setTimeLeft(sessionLength);
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
          console.log(`${e.target.id}: decrement  prevState: ${prevState}`);
          return prevState - 60 <= 0 ? prevState : prevState - 60; 
          });
          // setTimeLeft(sessionLength);
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
          <button id='break-increment' disabled={isDisabled} onClick={handleIncrement}>+</button>
          <p id='break-length'>{breakLength}</p>
          <button id='break-decrement' disabled={isDisabled} onClick={handleDecrement}>-</button>
        </div>
        <div>
          <p id='session-label'>Session Length</p>
          <button id='session-increment' disabled={isDisabled} onClick={handleIncrement}>+</button>
          <p id='session-length'>{sessionLength/60}</p>
          <button id='session-decrement' disabled={isDisabled} onClick={handleDecrement}>-</button>
        </div>
      </div>
      <div>
          <div id="timer-label">Session</div>
          <div id="time-left">{`${Math.floor(timeLeft/60).toString().padStart(2, '0')}:${(timeLeft%60).toString().padStart(2, '0')}`}</div>
      </div>
      <button id="start_stop" onClick={handleStart}>{startStop}</button>
      <button id="reset">Reset</button>
    </>
  )
}

export default App
