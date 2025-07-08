"use client"
import React, { ComponentType, useEffect, useState } from "react"


interface Post{
    id:number;
    title:string;
}

interface WithDataFetchingProps {
  data: Post[]
}

export default function withDataFetching(Component:ComponentType<WithDataFetchingProps>,url:string){
    return function dataFetchingFunction(props:Omit<WithDataFetchingProps,"data">){
        const [data,setData] = useState<Post[]>([])
        
         async function fetchData(url:string){
         const response = await fetch(url)
         const result = await response.json()
         setData(result)
        }


        useEffect(()=>{
        fetchData(url)
        },[url])


        return <Component {...props} data={data}/>
    }
}