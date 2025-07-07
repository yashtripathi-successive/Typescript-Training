"use client"

import { useRouter } from "next/navigation";

import '@/app/generalstyle.css'
export default function Home() {

  const arr = ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10","question11","question12","question13","question14"]

  const router = useRouter()

  function handleClick(id:number):void{
        router.push(`/question${id}`)
  }
  return (
    <>
    <h1>Assignment 2 using TypeScript</h1>
    <div className="page">
      

     
      {arr.map((_,id)=>(
        <li key={id} className="questions" onClick={()=>handleClick(id+1)}> {`Question${id+1}`}</li>
      ))}
     
      
    </div>
    </>
  );
}
