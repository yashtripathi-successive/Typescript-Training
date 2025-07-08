"use client"
import { blue, green, red } from "@mui/material/colors"
import axios from "axios"
import React, { FormEvent, useState } from "react"

function Page() {
    const [title,setTitle] = useState<string>('')
    const [content,setContent] = useState<string>('')
    const [error,setError] = useState<string>('')
    const [submit,setSubmit] = useState<boolean>(false)
    const [status,setStatus] = useState<boolean>(false)
    


    async function handleSubmit(e:FormEvent<HTMLFormElement>){
        
        e.preventDefault()
        setSubmit(true)
        setError('')
        try{
          const res = await axios.post('https://jsonplaceholder.typicode.com/posts',{
            title,content
          })
          console.log(res.data)
          setStatus(true)
          setTitle('')
          setContent('')
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
        

    }
    return (

        <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" name="content" placeholder="Content" value={content} onChange={(e)=>setContent(e.target.value)}/>
                <button type="submit">submit</button>
            </form>

        {submit && (
        <p style={{ color: status ? 'green' : 'red' }}>
          {status ? 'Post submitted successfully' : 'Post not submitted'}
        </p>
        )}

        {error && (
        <p style={{ color: 'red' }}>{error}</p>
        )}
        </div>
      );
}

export default Page;