"use client"
import { Container, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from "@mui/material";
import React, {  ChangeEvent, useEffect, useState } from "react"



interface Post{
    id:number;
    title:string;
    body:String;
}

function Page() {
    const [page,setPage] = useState<number>(0)
    const [rowsPerPage,setRowsPerPage] = useState<number>(5)
    const [posts,setPosts] = useState<Post[]>([])
    const [error,setError] = useState<string>('')
    

    async function getPosts(){
        try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setPosts(data)

        }catch(error){
            if (error instanceof Error) {
            setError(error.message);
            } else {
            setError("An unknown error occurred.");
          }
        }
    }


    useEffect(()=>{
        getPosts()
    },[])

    function handleRowsPerPage(e:ChangeEvent<HTMLInputElement>){
        setRowsPerPage(parseInt(e.target.value,10))
        setPage(0)
    }

    const paginatedPosts = posts.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage)
    return ( 
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>TITLE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   {paginatedPosts.map((post)=>(
                     <TableRow key={post.id}>
                        <TableCell>{post.id}</TableCell>
                        <TableCell>{post.title}</TableCell>
                    </TableRow>
                   ))}
                </TableBody>


                <TablePagination
                count={posts.length}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={(_,value:number)=>setPage(value)}
                onRowsPerPageChange={handleRowsPerPage}/>
            </Table>
        </Container>
     );
}

export default Page;