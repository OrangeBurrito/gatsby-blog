import React from 'react';

const Dump = props => (
  <div
    style={{
      fontSize: 20,
			background: '#22252D',
      padding: 10,
    }}
  >
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <strong style={{ color: 'white', background: 'red' }}>
          {key} 💩
        </strong>
        {JSON.stringify(val, '', ' ')}
      </pre>
    ))}
  </div>
);

export default Dump;