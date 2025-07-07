"use client"
import React, { useEffect, useState,useRef } from "react";


function UseTimer(initialduration:number) {
const [timeLeft,setTimeLeft] = useState(initialduration)
const [isRunning,setIsRunning] = useState(false)
const timeRef = useRef<NodeJS.Timeout | null>(null)
    function start(){
        if(!isRunning){
             setIsRunning(true)
        }
    }

    function pause(){
        setIsRunning(false)
    }

    function reset(){
        setIsRunning(false)
        setTimeLeft(initialduration)
    }


    useEffect(()=>{
    if(isRunning){
        timeRef.current = setInterval(()=>{
         setTimeLeft((p)=>{
            if(p<1){
            if (timeRef.current) clearInterval(timeRef.current);
            
            setIsRunning(false);
            return 0;
        }else
            return p-1
        
         })
        },1000)
    }

    return () => {
        if (timeRef.current){
        clearInterval(timeRef.current);
    }
    }

    },[isRunning])

    return {timeLeft, start,pause,reset}
}

export default UseTimer;
