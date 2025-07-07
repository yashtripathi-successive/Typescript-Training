"use client"

import LanguageSwitcherApplication from "@/components/LangSwitcherApplication";
import { LangProvider } from "@/context/LangContext";
import React from "react"


function Page() {
    return (  

        <div>

        <LangProvider>
        <LanguageSwitcherApplication/>
        </LangProvider>
        </div>
    );
}

export default Page;