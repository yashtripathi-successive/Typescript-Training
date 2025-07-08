"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import '@/app/question1style.css'

interface Post{
    id:number;
    title:string;
    body:string;
}

function Page() {
    const [posts,setPosts] = useState<Post[]>([])
    const [error,setError] = useState<string>('')
    const [loading,setLoading] = useState<boolean>(true)
    
    async function getPosts(){
        
        try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        
        setPosts(res.data)
        }catch(error){
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    
                    setError(`Server Error: ${error.response.status} - ${error.response.statusText}`)
                } else if (error.request) {
                   
                    setError("No response from server")
                } else {
                    setError(`Error: ${error.message}`)
                }
            } 
            
            else {
               
                setError("An unexpected error occurred.")
            }

        }
        finally{
            setLoading(false)
        }
       
    }
    useEffect(()=>{
        

    getPosts()
    

    },[])
    return ( 
        <div className="container">

          {loading ? (<div className="loader"></div>) : 
          (error ? (
            <div>
            <p>error found : {error}</p>
            <button onClick={getPosts}>retry</button>
            </div>
             ) : (
            <div>
            <h1 className="heading">Posts</h1>
            {posts.map((item,id)=>(
            <div className="postCard" key={id}>
            <p className="title"><span className="titlespan">Title : </span>{item.title}</p>
            
            <p className="description"><span className="descriptionspan">Description : </span> : {item.body}</p>
           
            </div>
          ))}
          </div>
          ))}
        </div>
     );
}

export default Page;