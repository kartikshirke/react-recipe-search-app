import React from 'react';

const Counter_1 = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payLoad;
    case 'DECREMENT':
      return state - action.payLoad;
    default:
      return state;
  }
}

export default Counter_1;
