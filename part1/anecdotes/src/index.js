import React from 'react';
import ReactDOM from "react-dom";
const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const Anecdote = (props)=>{
      return (
          <div>
              <h2>{props.title}</h2>
              <p>{props.anecdote}</p>
              <h4>{`has ${props.votes} Votes`}</h4>
          </div>
      )
  }

  const RandomAnecdote = ()=>Math.floor(Math.random()*anecdotes.length)
  


 const App = ()=>{
    const [selected, setSelected] = React.useState(0);
    const[votes,setVotes] = React.useState({0:0,1:0,2:0,3:0,4:0,5:0})
    //Anecdote Handler
    const HandleNextAnecdote = ()=>{
        let x = RandomAnecdote();
        if(x === selected){
            x =RandomAnecdote()
        }
        setSelected(x)
    }

    //Vote Handler
    const VoteAdder = ()=>{
        setVotes({...votes,[selected]:votes[selected]+1})
    }

    //Votes
    const VotedMostly = Object.keys(votes).sort((a, b) => votes[b] - votes[a])[0];
     return (
         <div>
             <Anecdote title = 'Anecdote of the Day' anecdote = {anecdotes[selected]} votes = {votes[selected]}/>
             <button onClick = {(HandleNextAnecdote)}>Next anecdote</button>
             <button onClick = {(VoteAdder)}>Vote</button>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <Anecdote title = 'Anecdote with most Votes' anecdote = {anecdotes[VotedMostly]} votes = {votes[VotedMostly]}/>
         </div>
     )
 }
ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));