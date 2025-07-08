"use client"
import React from 'react'
import { useState } from 'react'
import '@/app/globals.css'

function page (){

    const[task,setTask] = useState<string[]>([])
    const[input,setInput] = useState<string>('')


    function handlesubmit(){
        setTask((prev)=>[...prev,input.trim()])
        setInput('')
    }
    return (
    <div className='q6'>
      <input placeholder='enter something' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handlesubmit}>add to list</button>
      <div className='q6-list'>

      <ul >
      {task.map((item,id)=>(
      <li key={id}>{item}</li>
      ))}
      </ul>
      </div>
    </div>
  )
}

export default page
