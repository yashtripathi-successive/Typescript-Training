"use client"
import React from "react"
import withDataFetching from "../question16/page";


interface Post{
    id:number;
    title:string;
}

interface WithDataFetchingProps {
  data: Post[]
}


const url = 'https://jsonplaceholder.typicode.com/posts'
function displayData({data}:WithDataFetchingProps) {
    
    return ( 
    <div>
        <h2>Fetched Posts:</h2>
        <ul>
            {data && data.map((post) => (
            <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
     );
}

export default withDataFetching(displayData,url);