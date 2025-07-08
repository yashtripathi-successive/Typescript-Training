"use client"
import React, { useState } from "react"
import ModalUi from '@/components/ModalUi'
import '@/app/buttonstyle.css'

function Page() {
    const [isopen,setIsopen] = useState<boolean>(false)
    
    


    function handleopen(){
        setIsopen(true)
    }
    function handleclose(){
        setIsopen(false)
    }


    
    
    return ( 

        <div>
            <div className="center-container">
            <button onClick={handleopen} className="open-modal-btn">
                 open model
            </button>
            </div>


            

            <ModalUi isopen={isopen} handleclose={handleclose}>
                   <p style={{textAlign:'center'}}>This is Model</p>
            </ModalUi>
        </div>

     
     );
}

export default Page;