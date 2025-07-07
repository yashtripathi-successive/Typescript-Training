"use client"

import { useLangContext } from "@/context/LangContext";


function LanguageSwitcherApplication() {

     const {lang,toggleLang} =  useLangContext()
    
    return (  
        
        <div>

         {lang==="en" ?   <p>(hi i am yash)</p>  : <p>(hola, am yash)</p>}
            <button onClick={toggleLang}>toggle language</button>
        </div>
    );
}

export default LanguageSwitcherApplication;