"use client"
import { useAuthContext } from '@/components/context/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {

  const [name,setName] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const [isDetailsWrong,setIsDetailsWrong]=useState<boolean>(false);
  const router = useRouter()
  const {login} = useAuthContext()

  function handleSubmit(e){
    setIsDetailsWrong(false);
    e.preventDefault()
    let success = login(name,password)
    console.log(success)
    if(success){
      
        router.push('/about')
    }
    else{
      setIsDetailsWrong(true);
      return;
    }
  }
  return (
    <div>
     

      <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter name"/>
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter password"/>
      {isDetailsWrong && <p>email or password is wrong</p>}
      <input type="submit"/>
     </form>



    </div>
  )
}

export default Page
