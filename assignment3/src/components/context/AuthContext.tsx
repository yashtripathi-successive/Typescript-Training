"use client"


import React, { createContext, ReactNode, useContext, useState } from "react";

interface authState{
    username:string;
    isloggedin:boolean;
}

interface Props{
    children:ReactNode;
}


interface authContextstate{
    auth:authState;
    checkAuth:()=>void;
    login:(name:string,password:string)=>boolean;
    logout:()=>void
}

const authContext = createContext<authContextstate | undefined>(undefined)
function AuthContextProvider({children}:Props) {

    const [auth, setAuth] = useState<authState>({
        username:"",
        isloggedin:false
    })

    function checkAuth(){
            setAuth({
                username:"yash",
                isloggedin:true
            })
    }

    function login(name:string,password:string):boolean{
        if(name==="yash" && password==="123"){
         setAuth({
            username:name,
            isloggedin:true
         })
         return true
    }
    return false
}

     function logout(){
        setAuth({
            username:'',
            isloggedin:false
        })
    }
    return (  
        <authContext.Provider value={{auth,checkAuth,login,logout}}>
            {children}
        </authContext.Provider>
    );
}

export function useAuthContext():authContextstate{
    const context = useContext(authContext)
    if(!context) throw new Error("error")
    return context
}


export default AuthContextProvider;