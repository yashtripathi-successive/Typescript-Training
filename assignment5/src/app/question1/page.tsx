"use client"
import React, { useEffect, useState } from "react"
import '@/app/question1style.css'

interface posts{
  title:string;
  body:string;
}


function Page() {
    const [posts,setPosts] = useState<posts[]>([])
    
    async function getPosts(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setPosts(data)
    }
    useEffect(()=>{
        

    getPosts()

    },[])
    return ( 
        <div className="container">

          <h1 className="heading">Posts</h1>
          {posts.map((item,id)=>(
            <div className="postCard">
            <p key={id} className="title"><span className="titlespan">Title : </span>{item.title}</p>
            
            <p className="description"><span className="descriptionspan">Description : </span> : {item.body}</p>
           
            </div>
          ))}
        </div>
     );
}

export default Page;