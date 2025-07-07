"use client"
import '@/app/generalstyle.css'
import { useRouter } from "next/navigation";


export default function Home() {

  const arr = ["question1","question2","question3","question4","question5","question6"]

  const router = useRouter()

  function handleClick(id:number):void{
        router.push(`/question${id}`)
  }
  return (
    <>
    <h1>Assignment 1 using TypeScript</h1>
    <div className="page">
      

     
      {arr.map((_,id)=>(
        <span key={id} className="questions" onClick={()=>handleClick(id+1)}> {`Question${id+1}`}</span>
      ))}
     
      
    </div>
    </>
  );
}
