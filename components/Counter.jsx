import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)
  return (
    <div>
        <h3>Counter</h3>
        {counter}
        <br/>
        <button onClick={()=>{setCounter(counter + 1)}}>.   +   .</button>
        <button onClick={()=>{setCounter(counter - 1)}}>.   -   .</button>
    </div>
  )
}

export default Counter