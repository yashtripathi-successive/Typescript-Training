
'use client'
import { useAuthContext } from '@/components/context/AuthContext'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  
    const router = useRouter()

    function handlepage(){
        router.push('/about')
    }
  return (
    <div>
      <p>this is a home Page</p>
     
      <button onClick={handlepage}>back to about page</button>
    </div>
  )
}

export default Page
