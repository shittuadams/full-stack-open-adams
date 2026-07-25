import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticsLine = (props) => {
  return (
      <tr>
        <td>{props.emoji} {props.text}</td>
        <td>{props.stats}</td>
      </tr>
  )
}


const Statistics = (props) => {
  return (<>
    <StatisticsLine emoji="✔️" text="good" stats={props.good} />
    <StatisticsLine emoji="➖" text="neutral" stats={props.neutral} />
    <StatisticsLine emoji="❌" text="bad" stats={props.bad} />
    <StatisticsLine emoji="➕" text="all" stats={props.totalFeedback} />
    <StatisticsLine emoji="➗" text="average" stats={props.totalAverage.toFixed(1)} />
    <StatisticsLine emoji="💪" text="positive" stats={`${props.goodAverage.toFixed(1)}%`} />
  </> 
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const FeedbackValue = good*1 + neutral*0 + bad*-1
  const totalFeedback = good + neutral + bad

  const totalAverage = totalFeedback !== 0 ? FeedbackValue / totalFeedback : 0
  const goodAverage = totalFeedback !== 0 ? good / totalFeedback * 100 : 0
  // console.log('Before handler', good, neutral, bad)

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad)
  }

  // console.log('After handler', good, neutral, bad)
  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text='good' />
      {' '}
      <Button onClick={handleNeutral} text='neutral' />
      {' '}
      <Button onClick={handleBad} text='bad' />

      <h2>Statistics 👇</h2>

      {totalFeedback === 0
        ? <p>No feedback given</p>
        : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            totalAverage={totalAverage}
            goodAverage={goodAverage}
          />
          )
      }
      
    </>
  )
}

export default App
