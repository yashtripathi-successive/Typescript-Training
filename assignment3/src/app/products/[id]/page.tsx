"use client"
import { useParams, useRouter } from "next/navigation";
import React from "react";

function Page() {

    interface product{
        id:number;
        name:string;
        price:number;
    }

     const products : product[]= [
            {id:1,name:"pant",price:2000},
            {id:2,name:"shirt",price:3000},
            {id:3,name:"jeans",price:4000},
            {id:4,name:"jacket",price:5000},
        ]
        const params = useParams();

        const router = useRouter()
        const productId = params.id ? parseInt(Array.isArray(params.id) ? params.id[0] : params.id, 10) : NaN;


        const productfound= products.find((item)=>item.id===productId)

    return ( 
        <div>
            {productfound && (
                <div>
                    <p>{productfound.name}</p>
                    <p>{productfound.price}</p>
                </div>
                )}

            <button onClick={()=>router.back()}>go back</button>
        </div>
     );
}

export default Page;