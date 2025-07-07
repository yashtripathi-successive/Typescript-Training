"use client"
import React, { useReducer } from "react";


type State = {
  [key: string]: number;
};

type Action = {
  type: string;
};
const options = [ "yash","aryan","abhijeet","anany"]
function reducer(state:State,action:Action):State{
    if(action.type==="RESET"){
        const obj: State= {}
        options.map((item)=>{
            obj[item] = 0
        })
        return obj
    }

    if(options.includes(action.type)){
      return {
        ...state,[action.type]:state[action.type]+1
      }
    }
    return state
}

function VotingApp() {
    const initialvalue:State={}
    options.map((item)=>{
        initialvalue[item]=0
    })
    const [ value,dispatch] = useReducer(reducer,initialvalue)
    return ( 
        <div>
           {options.map((item)=>(
            <button onClick={()=>dispatch({type:item})}>vote for {item}</button>
           ))}

           <ul>

             {options.map((item)=>(
            <li>{item} : {value[item]}</li>
           ))}
           </ul>

           <button onClick={()=>dispatch({type:"RESET"})}>reset votes to zero</button>


        </div>
     );
}

export default VotingApp;