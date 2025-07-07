import React, { createContext, ReactNode, useContext, useState } from "react";




interface cartItems{
    id:number;
    name:string;
    price:number;
    quantity:number
}

interface shoopingcontext{
    cart:cartItems[];
    addToCart:(item:Omit<cartItems,"quantity">)=>void;
    deleteFromCart:(id:number)=>void;
    getTotalPrice:()=>number;
}


interface props{
    children:ReactNode
}
const shoppingContext = createContext<shoopingcontext | null>(null)
function ShoppingCartProvider({children} :props) {
    
    const [cart,setCart] = useState<cartItems[]>([])

    function addToCart(item:Omit<cartItems,"quantity">) {
     setCart((prev) => {
     const exists = prev.some((cartItem) => cartItem.id === item.id);

      if (exists) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  }

    function deleteFromCart(idx_to_delete : number){
        setCart((prev)=>{
            return prev.map((item,id)=>{
                if(id===idx_to_delete){
                    if(item.quantity>1){
                        return{...item,quantity:item.quantity-1}
                    }
                    else{
                        return null
                    }
                }
                return item
            }).filter((item)=>item!==null)
        })
    }
    function getTotalPrice(){
        const res = cart.reduce((sum,items)=>sum+Number(items.price*items.quantity),0)
        return res
    }

    return (


    <shoppingContext.Provider value={{cart,addToCart,deleteFromCart,getTotalPrice}}>
        {children}
    </shoppingContext.Provider>

    )
}
export function useShoppingContext(){
    const context =  useContext(shoppingContext)
    if(!context) throw new Error("error")
    return context
}

export default ShoppingCartProvider;