"use client"
import React from "react"
import '@/app/buttonstyle.css'

function Button({variant,onClick,children}) {
    return ( 
        <button  className={`custom-btn ${variant}`} onClick={onClick}>{children}</button>
     );
}

export default Button;