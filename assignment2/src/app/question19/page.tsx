"use client"

import React from "react";
import UseTimer from "@/components/UseTimer";


function UseTimerChecking() {

    const {timeLeft , start,pause,reset} = UseTimer(10)
    return ( 
        <div>
         <p>Timer duration is : {timeLeft}</p>
         <button onClick={start}>start</button>
         <button onClick={pause}>pause</button>
         <button onClick={reset}>reset</button>
        </div>
     );
}

export default UseTimerChecking;