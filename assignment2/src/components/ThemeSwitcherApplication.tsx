"use client"

import { useState,useEffect,useContext } from "react";

import { useTheme } from "@/context/ThemeContext";
import Page from "@/app/question6/page";



function ThemeSwitcherApplication() {

     const {theme,toggleTheme} =  useTheme();
    
    return (  
        
        <div  style={{
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:theme=="light"?"white":"red",
        height:"100vh",
        
         
      }} >
        

        
        <button  style={{
          backgroundColor: "grey",
          color: "smokewhite",
          border: "none",
          borderRadius: "8px",
          padding: "1rem",
          margin:"1rem"
        }} onClick = {toggleTheme}>hit me to change theme</button>

         <Page/>
        </div>
        


    );
}

export default ThemeSwitcherApplication;