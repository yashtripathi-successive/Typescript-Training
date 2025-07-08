"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


interface product{
    id:number;
    name:string;
    price:number;
}

function Page() {

    const products : product[]= [
        {id:1,name:"pant",price:2000},
        {id:2,name:"shirt",price:3000},
        {id:3,name:"jeans",price:4000},
        {id:4,name:"jacket",price:5000},
    ]
    const router = useRouter()

    function handleclick(id:number){
        router.push(`/products/${id}`)
    }
    return (  
        <div>


           <ul>
             {products.map((item)=>(
             <li key={item.id} onClick={()=>handleclick(item.id)} >{item.name}</li> 
            ))}
           </ul>
        </div>
    );
}

export default Page;