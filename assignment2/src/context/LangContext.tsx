"use client"

import { createContext, useState, useContext, ReactNode } from "react";


interface props{
    children:ReactNode
}

interface langcontextinterface{
    lang:string;
    toggleLang:()=>void
}


export const LangContext = createContext< langcontextinterface | undefined>(undefined);


export const LangProvider = ({ children }:props) => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "es" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      
        {children}
     
    </LangContext.Provider>
  );
};

export const useLangContext = () => {
    const context = useContext(LangContext);
    if(!context) throw new Error("error")
    return context;
}