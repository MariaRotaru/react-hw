import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TimezoneSelect from 'react-timezone-select';

function Time() {

    const [selectedTimezone, setSelectedTimezone] = useState({})
    

  return (
    <div>
      <h1>Time Zones</h1>
      <blockquote>Please make a selection</blockquote>
      <div className="select-wrapper" style={{color:'#182747'}}>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
      </div>
      <h3>Show Details</h3>
      <div
        style={{
        color:'#182747',
          backgroundColor: '#D8D8D8',
          padding: '20px',
          margin: '20px auto',
          borderRadius: '5px',
          maxWidth: '600px',
        }}
      >
        <pre
          style={{
            margin: '0 20px',
            fontWeight: 500,
          }}
        >
          {JSON.stringify(selectedTimezone, null, 2)}
        </pre>
      </div>
      <a href="/"><h2>Back to Home</h2></a>
      <a href="/formhw"><h2>Form</h2></a>
    </div>
  )
}

export default Time