import { useShoppingContext } from "@/context/ShoppingContext";
import React from "react";



interface cartItem{
    id:number;
    name:string;
    price:number;
    quantity:number;
}


function Shopping() {
    const {cart,addToCart,deleteFromCart,getTotalPrice} = useShoppingContext()
    return (
        <div>
        <h1>shopping cart </h1>

     {cart.length===0?(<p>cart is empty</p>):
     (  
        cart.map((item:cartItem,id:number)=>(
          <div key={id}>

           <span>{item.name} : {item.price} x {item.quantity}</span>
           <button onClick={()=>deleteFromCart(id)}>clear item</button>
          </div>
        ))
    
     )}


        </div>
      );
}

export default Shopping;