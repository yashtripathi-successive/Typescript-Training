"use client"

import Products from "@/components/shoppingart/Products";
import Shopping from "@/components/shoppingart/Shopping";
import ShoppingCartProvider from "@/context/ShoppingContext";
import React from "react"

function Page() {
    return ( 

        <div>

        <ShoppingCartProvider>
        <Products/>

        <Shopping/>
        </ShoppingCartProvider> 
        </div>
     );
}

export default Page;