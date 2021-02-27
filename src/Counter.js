import React from 'react';
import { connect } from 'react-redux';
import { Increment, Decrement } from './store';

function Counter({n, Increment, Decrement}) {
  return (
    <div>
      <div>{n}</div>
      <button onClick={Decrement}>-</button>
      <button onClick={Increment}>+</button>
    </div>
  );
}
  
export default connect(
  state => state,
  { Increment, Decrement }
)(Counter);
