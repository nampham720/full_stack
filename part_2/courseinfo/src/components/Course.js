import React from 'react'

const Part = (props) => {
    return(
      <div>
        <p>{props.part} {props.exercise}</p>
      </div>
    )
  }
  
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

const Course = (props) => {

    return(
      props.course.map(element => 
        <div key={element.id}>
          <Header course={element.name}/>
          <Content parts={element.parts.map(x => x.name)} exercises={element.parts.map(x => x.exercises)}/>
          <Total total={element.parts.map(x => x.exercises).reduce((a, b) => a+b, 0)}/>
        </div>
      )
    )
  }

export default Course