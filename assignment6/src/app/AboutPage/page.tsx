"use client"
import dynamic from "next/dynamic";
import React from "react"

 const AboutPageContent = dynamic(()=>import('@/components/AboutPage'))
function Page() {

    return <AboutPageContent/>
   
}

export default Page;