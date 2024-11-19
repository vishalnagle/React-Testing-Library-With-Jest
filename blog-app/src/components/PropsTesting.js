import React from 'react'

const PropsTesting = ({ testFunction }) => {
  return (
    <div>
        <h1>Functional props testing and mocking</h1>
        <button onClick={testFunction}>Click</button>
    </div>
  )
}

export default PropsTesting