"use client"
import React, { useCallback ,useState} from "react";

function UseClipboard(text:string) {
    const [isCopied,setIsCopied] = useState<boolean>(false)
    const copytext =  useCallback(()=>{
    const textarea = document.createElement("textarea")
    textarea.value=text
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select();

    let success = false;
    try{
        success = document.execCommand("copy")
        setIsCopied(true)

    }catch(error){
        setIsCopied(false)
        success=false;
    }
     document.body.removeChild(textarea)
    return success
    },[text])


    return {isCopied,copytext}
}

export default UseClipboard;