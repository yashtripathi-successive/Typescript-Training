"use client"
import dynamic from "next/dynamic";
import React from "react"

const HomePageContent = dynamic(()=>import('@/components/HomePage'))
function Page() {

    return <HomePageContent/>
   
}

export default Page;