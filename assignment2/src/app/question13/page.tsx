"use client"
import Child from "@/components/child/Child";
import React, { useCallback } from "react";
import { useState } from "react";


function Parent() {
    const[count,setCount]= useState<number>(0)
    const increment = useCallback(()=>{
       
        setCount((p)=>p+1);
 
    },[])


    function resetcount(){
        setCount(0);
    }
    return ( 


        <div>


         <Child count={count} increment={increment} resetcount={resetcount}/>
          
         

        </div>
     );
}


export default Parent;