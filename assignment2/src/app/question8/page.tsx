"use client"
import React, { useState, useEffect } from 'react';

function SlideShow() {

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
  
    const imageUrls = [
        'ali.jpg',
        'kate.jpg',
        'parker.jpg',
        'reinaldo.jpg',
        'reinaldo2.jpg',
        'mark.jpg',
        'micah.jpg',
        'lexscope.jpg',
        'brayden.jpg',
        'jennifer.jpg'
    ]

    function nextSlide(){
      setCurrentIndex((prev)=>(prev+1) % imageUrls.length)
    }

    function previousSlide(){
      setCurrentIndex((prev)=>(prev-1 + imageUrls.length) % imageUrls.length)
    }


     function toggleSlide(){
      setIsPlaying((event)=>!event)
    }
    useEffect(()=>{
        if (!isPlaying) return;
        const timer = setInterval(()=>{
           nextSlide()
        },2000)
    


        return () => clearInterval(timer)
    
    },[isPlaying])

return ( 
<div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "2rem auto",
        fontFamily: "sans-serif"
      }} >
           
         
               <img 
               src={imageUrls[currentIndex]}
               alt="Img"
               style={{
               width: '200px',
               height: '200px'
          }}/>

         <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem"
        }}
      >
        <button onClick={previousSlide}>prev slide</button>
        <button onClick={nextSlide}>next slide</button>
        <button onClick={toggleSlide}>Stop/Play slide</button>
        </div> 




        </div>
     );
}

export default SlideShow;