import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  function initialCount() {
    return 1;
  }

  function initalMaxCount() {
    return 1000;
  }

  const [counter, setCounter] = useState(() => initialCount());
  const [maxCount, setMaxCount] = useState((() => initalMaxCount()))

  useEffect(() => {
    let count = parseInt(counter);
    let limit = parseInt(maxCount);

    if (limit <= 0) {
      setMaxCount(initalMaxCount())
      alert(`Max limit should be a positive number`);
      return;
    }

    if (count > maxCount) {
      setCounter(initialCount);
      alert(`${count} is greater than max limit ${limit}`);
    }
  }, [counter, maxCount]);

  function decrementCount() {
    setCounter(prevCount => parseInt(prevCount) - 1);
  }

  function incrementCount() {
    setCounter(prevCount => parseInt(prevCount) + 1);
  }

  function handleCountValue(val) {
    let number = val.target.value
    setCounter(parseInt(number));
  }

  function handleMaxCountValue(val) {
    let maxLimit = val.target.value
    setMaxCount(parseInt(maxLimit));
  }

  return (
    <div className="App">
      <div className="counter">
        <button className="decrementBtn" onClick={decrementCount}>-</button>
        <input type="number" style={{width: counter.toString().length * 14+"px"}} className="counterInput" value={counter} onChange={handleCountValue} />
        <button className="incrementBtn" onClick={incrementCount}>+</button>
      </div>

      <div className="maxLimit">
        <input type="number" value={maxCount} onChange={handleMaxCountValue} />
        <div className="maxCount">Max Limit is set to : {maxCount}</div>
      </div>
    </div>
  );
}


export default App;
