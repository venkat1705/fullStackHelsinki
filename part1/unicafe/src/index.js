import React from 'react';
import ReactDOM from 'react-dom';

//stat part
const Stat = (props)=>{
  return(
    <div>
  <h4>{props.text}</h4>
  <h4>{props.value}</h4>
  </div>
  )
}

//Statstics part
const Statistics = ({good,bad,neutral,total})=>{
  if(total === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else{

return (
  <div>
    <Stat text = "good" value = {good}/>
    <Stat text = "neutral" value = {neutral}/>
    <Stat text = "bad" value = {bad}/>
    <Stat text = "total" value = {total}/>
    <Stat text = "average" value = {(good - bad)/total}/>
    <Stat text = "positive" value = {(good/total*100) + ' %'}/>
  </div>
)
  }
}

const Button = ({onClick,text})=><button onClick = {onClick}>{text}</button>
//App part
const App = ()=>{
  const [good,setGood] = React.useState(0);
  const [neutral,setNeutral] = React.useState(0);
  const [bad,setBad] = React.useState(0);
  const handleGoodClick = ()=> {setGood(good+1)}
  const handleNeutralClick = ()=> {setNeutral(neutral+1)}
  const handleBadClick = ()=> {setBad(bad+1)}
  const total = good+neutral+bad;

  return (
  <div>
    <h1>give feedback</h1>
    <Button onClick={handleGoodClick} text="good"></Button>
    <Button onClick={handleNeutralClick} text="neutral"></Button>
    <Button onClick={handleBadClick} text="bad"></Button>
    <h2>Statistics</h2>
    <Statistics total = {total} good = {good} neutral = {neutral} bad = {bad}/>
  </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

