"use client"
import { useRouter } from "next/navigation";
import React from "react"

function Page() {

    const router = useRouter()
    function handlelogout(){
        localStorage.removeItem('name')
        router.push('/login')
    }
    return ( 
        <div>
            <button onClick={handlelogout}>logout</button>
        </div>
     );
}

export default Page;