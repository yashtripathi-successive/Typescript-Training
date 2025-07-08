"use client"
import React, { useEffect } from "react"

export default function withLogger<T>(Component:import("react").ComponentType<T>) {

    return function logger(props:T){
        useEffect(()=>{

        console.log('component mounted')

        return ()=>console.log('component unmounted')

        },[])

        useEffect(()=>{

        console.log('component updated')

        },[props])
    
        return <Component {...props}/>

    }
    
}

