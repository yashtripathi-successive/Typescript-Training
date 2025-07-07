import React from "react";


interface props{
    count:number;
    increment:()=>void;
    resetcount:()=>void;
}
function Child({count,increment,resetcount} : props) {
   
    return (  
        <div>

            <p>count is : {count}</p>
            <button onClick={increment}>hit me to increase count</button>
            <button onClick={resetcount}>hit me to reset count to zero </button>
        </div>
    );
}

export default Child;