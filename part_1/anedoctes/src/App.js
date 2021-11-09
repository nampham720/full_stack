import React, { useState } from 'react'

const Display = (props) =>{
  return(
    <div>has {props.point} vote</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, countPoints] = useState(new Array(anecdotes.length).fill(0))

  const Random = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const Total = () => {
    const count = [...points]
    count[selected] += 1
    countPoints(count)
  }
  
  const biggest = Math.max(...points)
  const index = points.indexOf(biggest)
 

  
  return (
    <div>
      <h1>Anedocte of the day</h1>
      {anecdotes[selected]}
      <div>has {points[selected]} vote</div>

      <br></br>
      <button onClick={Total}>vote</button>
      <button onClick={Random}>next anecdote</button>

      <h1>Anedocte with most votes</h1>
      {anecdotes[index]}
    </div>
  )
}

export default App