import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'
function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Welcome to Redux store playground!</h1>
      <p>counter{counter}</p>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(decrement)}>-</button>
    </div>
  );
}

export default App;
