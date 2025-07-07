"use client"
import React, { useEffect, useState } from "react";


interface localStorageInterface{
    key:number;
    initialvalue:string;
}
export function UseLocalStorage(key:string,initialvalue:string) {
      const[value,setValue] = useState<string>(()=>{
     
    try {
      const stored = localStorage.getItem(key);

    
      if (stored === null || stored === "undefined") return initialvalue;

      return JSON.parse(stored);
    } catch (err) {
      console.error("Error parsing localStorage value:", err);
     
    }
      })

      useEffect(()=>{
     
         localStorage.setItem(key,JSON.stringify(value))
      },[key,value])


      const remove = () =>{
      
        localStorage.removeItem(key)
        setValue(initialvalue)
      }

      return {value,setValue,remove}
}