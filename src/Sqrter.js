import React from 'react';
import { connect } from 'react-redux';
import { CalculateSqrt } from './store';

function Sqrter({sqrtValue, CalculateSqrt}) {
  return (
    <div>
      <div>{sqrtValue}</div>
      <button onClick={CalculateSqrt}>sqrt</button>
    </div>
  );
}
  
export default connect(
  state => state,
  { CalculateSqrt }
)(Sqrter);
