"use client"

import React, { useMemo, useState } from "react";

function StudentList() {

    const [student,setStudent] = useState<string[]>(["yash","aryan","anany"])
    const [input,setInput] = useState<string>("")

    const memoizedStudent = useMemo(()=>student,[student])


    function addstudent(){
        setStudent((p)=>[...p,input.trim()])
        setInput("")
    }
    return ( 


        <div>
  
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="type student name to add in the array"/>
        <button onClick={addstudent}>add student</button>
        <ul>
          { memoizedStudent.map((student,id)=>(
               <li key={id} >{student}</li>
          ))}

        </ul>
        </div>
     );
}

export default StudentList;
