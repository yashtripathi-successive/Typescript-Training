"use client"

import React, {useState} from "react";




function Page() {
const [count,setCount] = useState<number>(0)

function handleIncrement():void{
    setCount((prev)=>prev+1)
}

function handleDecrement():void{
    setCount((prev)=>prev-1)
}
   


    return (  
        <div>
          <p>count is : {count}</p>
          <button onClick={handleIncrement}>increase count</button>
          <button onClick={handleDecrement}>increase count</button>
        </div>
    );
}

export default Page;