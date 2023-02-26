import React from 'react'

function Controls() {
    const [value, setter] = useState(0)
  return (
    <div>{value}
    <div>
        <button onClick={() => setter(value -1 )}>-</button>
        <button onClick={() => setter(value -1 )}>+</button>
    </div>
    </div>
  )
}

export default Controls