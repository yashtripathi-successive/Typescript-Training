"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {

  const questions = ["question1","question2","question3","question4","question5","question6",
    "question7","question8","question9","question10","question11","question12","question13","question14","question15","question16"  ]

  const router = useRouter()

  function handleSubmit(id){
    router.push(`/question${id}`)
  }
  return (
    <div className={styles.page}>
      <h1>Assignment 5</h1>
      {questions.map((question,id)=>(
        <div key={id}>
        <button  onClick={()=>handleSubmit(id+1)}>
          {question}
        </button>
        </div>
      ))}


    

    </div>
  );
}
