import React, { useState } from 'react'
import './sample.css'; // testing whether the .css files are being loaded 

const Sample = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      Count: {counter}
      <button className="btn-style" onClick={() => setCounter(counter + 1)}>Add</button>
    </div>
  )
}

export default Sample
