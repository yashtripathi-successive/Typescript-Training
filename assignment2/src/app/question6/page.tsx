"use client"

import React, { useState, useEffect, useContext } from "react";
import { useTheme } from "@/context/ThemeContext";



function Clock() {

   const {theme} =  useTheme()

    const [time,setTime] = useState<Date>(new Date())
    useEffect(()=>{
         const intervalID = setInterval(()=> {
            setTime(new Date())
         },1000)

         return () => clearInterval(intervalID)
    },[])
    return (  

        <div className="clock"  style={{
        backgroundColor: theme === "light" ? "red" : "white",
        height:"10vh",
       
        padding:"2.5rem",
        textAlign:"center"
          
        }}>
        
        
        <div style={{color: theme=='light'?"white":"red" }}>{time.toLocaleTimeString()}</div>
         

        
        </div>
    );
}

export default Clock;