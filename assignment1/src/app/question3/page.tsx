"use client"

import Weather from "@/components/Weather";
import React, { useEffect, useState } from "react";




function Page() {



    const [temp,setTemp] = useState<number | null>(null)

    useEffect(()=>{
    let temp = prompt("enter temperature")
    if(temp===null || temp==='') {
        alert('enter temp please')
        return ;
    }
    
    const newtemp = Number(temp)
    if(!isNaN(newtemp)) {
     setTemp(newtemp)
    }
    else{
        alert('enter valid temp')
    }
    
    },[])
    return (  
        <div>
            <Weather temp={temp}/>

        </div>
    );
}

export default Page;