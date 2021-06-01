import React from 'react'
const Total = (props) => {
    const reducer = (s, p) => {
      return s + p.exercises
    }
    const total = props.parts.reduce(reducer, 0)
  
    return (
      <div>
        <b>{`Total  ${total}`}</b>
      </div>
    )
  }
  export default Total