"use client"
import { useRouter } from "next/navigation";
import React, { ComponentType, useEffect } from "react"

export default function withAuth<T>(Component:ComponentType<T>) {
    return function auth(props:T){
        const router = useRouter()


        useEffect(()=>{

          const isauthenticated = localStorage.getItem('name')
          if(!isauthenticated){
            router.push('/login')
          }
        },[router])


        return <Component {...props}/>

    };
}

