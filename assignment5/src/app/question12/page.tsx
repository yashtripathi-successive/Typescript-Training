"use client"
import Button from "@/components/Button";
import React from "react"

function Page() {
    return ( 

       <div > 
        <Button variant="primary" onClick={()=>alert('primary button clicked')}>primary button</Button>
        <br></br>
        <Button variant="secondary" onClick={()=>alert('secondary button clicked')}>secondary button</Button>
        <br></br>
        <Button variant="danger" onClick={()=>alert('danger button clicked')}>danger button</Button>
       </div>
     );
}

export default Page;