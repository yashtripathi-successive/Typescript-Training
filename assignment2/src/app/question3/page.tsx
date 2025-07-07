"use client"
import {useState} from "react";

function ToDoList() {

    interface Todo{
        text:string;
        complete:boolean;
    }

    
    const [todos,setTodos] = useState<Todo[]>([]);
    
    const [input,setInput] = useState<string>("")


    
    function addTodo(){
         
        if(input.trim()!==''){
            setTodos([...todos,{ text: input.trim(), complete: false }])
            setInput("")
        }
    }

     function deleteTodo(index_to_delete:number){
        setTodos(todos.filter((_,idx)=> idx!==index_to_delete))
    }

    function toggleComplete(index:number) {
    setTodos(
    todos.map((todo, idx) =>
      idx === index ? { ...todo, complete: !todo.complete } : todo
      )
     );
    }


    return ( 

    <div className = "todolist">

     <input type = "text" 
      placeholder = "Enter Task that needs to be added"
      value={input}
      onChange={(e) => setInput(e.target.value)}></input>
     <button onClick={addTodo}> Add Todo </button>
     
     
     <ul>
     {todos.map((todo,idx)=>(
     <li key ={idx}> {todo.text} 
     <input
     type="checkbox"
     checked={todo.complete}
     onChange={() => toggleComplete(idx)}/>
     <p>Current State is : {todo.complete.toString()}</p>

     <button onClick={()=>deleteTodo(idx)}> Delete Todo </button>
     </li>

     ))}
     </ul>
    </div>

     );
}

export default ToDoList;