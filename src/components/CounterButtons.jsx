import React from 'react'

function CounterButtons() {
  const [value, setValue] = useState(0);
  return (
    <div>
        <p>{value}</p>
        <button onClick={() => setter(value - 1) }>-</button>
        <button onClick={() => setter(value + 1) }>+</button>
    </div>
  )
}

export default CounterButtons