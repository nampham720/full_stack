import React, { useState } from 'react'



const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Statistic = (props) => {
  const { good, bad, neutral } = props
  
  const allCount = () => {
    return good + bad + neutral
  }

  if (allCount() != 0) {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{allCount()}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{(good-bad)/allCount()}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{good/allCount()*100}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>No feedback given</div>
  )
}

const Button = (props) => {
  const { handles, texts } = props
  return (
    <div>
      <button onClick={handles[0]}>{texts[0]}</button>
      <button onClick={handles[1]}>{texts[1]}</button>
      <button onClick={handles[2]}>{texts[2]}</button>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }



  return (
    <div>
      <h1>give feedback</h1>
      <Button handles={[handleGoodClick, handleNeutralClick, handleBadClick]} texts={["good", "neutral", "bad"]}/>

      <h1>statistics</h1>
      <Statistic good={good} bad={bad} neutral={neutral}/>


    </div>
  )
}

export default App