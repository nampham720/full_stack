import React from 'react'

const Part = (props) => <p>{props.part} {props.exercise}</p>

const Header = (props) => <h1>{props.course}</h1>
const Content = (props) => {
  const { parts, exercises } = props
  return(
    <div>
      <Part part={parts[0]} exercise={exercises[0]}/>
      <Part part={parts[1]} exercise={exercises[1]}/>
      <Part part={parts[2]} exercise={exercises[2]}/>
    </div>
    
  )
}
const Total = (props) => <p>Number of exercises {props.total}</p>


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const parts = course.parts

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={[parts[0].name, parts[1].name, parts[2].name]} exercises={[parts[0].exercises, parts[1].exercises, parts[2].exercises]}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App