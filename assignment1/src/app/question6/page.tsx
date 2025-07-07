import React from "react";

function Page() {

    let text:string = "blue button"
    let color:string = "blue"
    return ( 
        <div>
            <button style={{backgroundColor:color}}>{text}</button>
        </div>
     );
}

export default Page;