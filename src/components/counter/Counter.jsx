import React, {useState} from 'react'
import Controls from "./Controls"

function Counter() {
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

export default Counter