"use client"
import { useRouter } from "next/navigation";
import React from "react"

function Page() {
    const router = useRouter()

    function handlelogin(){
        localStorage.setItem('name','yash')
        router.push('/dashboard')

    }
    return ( 
        <div>
            <button onClick={handlelogin}>login</button>
        </div>
     );
}

export default Page;