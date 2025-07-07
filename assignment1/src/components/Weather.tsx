import React from "react";
interface temperature{
    temp:number | null
 }
function Weather({temp}:temperature) {
    if (temp === null) {
    return <h1>No temperature provided</h1>;
    }
    let status;
    if(temp>=25){
        status="sunny day"
    }
    else if(temp>=10 && temp <=24){
        status="mild day"
    }
    else if(temp<=10){
        status="cold day"
    }
    return (  
        <div>

           <h1>{status}</h1>
        </div>
    );
}

export default Weather;