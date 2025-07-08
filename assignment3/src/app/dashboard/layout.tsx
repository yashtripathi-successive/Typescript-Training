'use client'
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { ReactLoadableManifest } from "next/dist/server/load-components";


interface props{
  children:ReactNode
}

function Page({ children }:props) {
    const router = useRouter()
    return ( 


        <div>
            {children}
          <button onClick={()=>router.push('/dashboard')}>go to dashboard</button>
          <button onClick={()=>router.push('/dashboard/profile')}>go to profile</button>
          <button onClick={()=>router.push('/dashboard/settings')}>go to settings</button>
        </div>
     );
}

export default Page;