import React from 'react';
import Total from './Total'
const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => 
      <div key={part.id}> 
          <Part name={part.name} exercises={part.exercises}/> 
      </div>)}
      <Total parts={props.parts}/>
    </div>
  )
}

const Part= (props) => {
  return (
    <p>
      {props.name}  {props.exercises}
    </p>
  )
}
export default Content;