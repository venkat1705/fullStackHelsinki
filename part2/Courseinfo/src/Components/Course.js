import React from 'react'
import Header from './Header'
import Content from './Parts'
const Course = (props) => {
    return (
      <div>
        <Header name={props.course.name}/>
        <Content parts={props.course.parts}/>
      </div>
    )
  }
  export default Course