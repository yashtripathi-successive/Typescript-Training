

"use client"
import React, { createContext, ReactNode, useContext, useState } from 'react'

interface Props{
  children:ReactNode;
}

interface preferenceContextInterface{
theme:'light'|'dark';
toggleTheme:()=>void;
}

const preferenceContext = createContext<preferenceContextInterface | undefined>(undefined)
const PreferenceContextProvider = ({children}:Props) => {

    const [theme,setTheme] = useState<'light'|'dark'>('light')

    function toggleTheme(){
       setTheme((prev)=>prev==='light'?'dark':'light') 
    }

  return (
    <preferenceContext.Provider value={{theme,toggleTheme}}>
     {children}
    </preferenceContext.Provider>
  )
}

export function usePreferenceContext(){
    const context =  useContext(preferenceContext)
    if(!context) throw new Error('error')
    return context
}

export default PreferenceContextProvider
