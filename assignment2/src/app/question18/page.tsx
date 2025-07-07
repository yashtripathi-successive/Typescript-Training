"use client"

import React from "react";
import { UseLocalStorage } from "@/components/UseLocalStorage";

function UseClipboardCheckingChecking() {

    const {value, setValue, remove} = UseLocalStorage('name','')
    return ( 
        <div>

          <p>hello i am {value || "guest"}</p>
          <input value={value} type="text" placeholder="enter name " onChange={(e)=>setValue(e.target.value)}/>
          <button onClick={remove}>clear name</button>
        </div>
     );
}

export default UseClipboardCheckingChecking;
