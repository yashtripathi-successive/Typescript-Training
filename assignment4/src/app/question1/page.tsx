"use client"

import React, { useState } from "react";


function Page() {

    const [input,setInput] = useState<string>('')
    const [submitted,setSubmitted] = useState<string | null>(null)
    function handleclick():void{
      setSubmitted(input)
      setInput('')
    }
    
    return ( 
        <div className="q1">
          
        <input type="text" value={input} placeholder="write something" onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleclick}>submit </button>
       
        {submitted && <h2> hello {submitted}</h2>}
        </div>
     );
}

export default Page;