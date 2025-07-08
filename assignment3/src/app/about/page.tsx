'use client'
import { useAuthContext } from '@/components/context/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'





const Page = () => {
  const {auth,logout} = useAuthContext()
    const router = useRouter()

    function handlepage(){
        router.push('/home')
    }

    useEffect(()=>{
      if(auth.isloggedin === false){
        router.push('/login')
      }
    },[auth.isloggedin])
  return (
    <div>
       <p>this is a about Page</p>
      <p>welcome {auth.username}</p>
      <button onClick={handlepage}>back to home page</button>

      <button onClick={logout}>log out</button>
    </div>
  )
}

export default Page
