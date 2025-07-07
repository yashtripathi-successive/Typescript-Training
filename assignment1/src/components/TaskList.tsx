"use client"

import React from "react";
interface Task{

    name:string;
    description:string;
}



function TaskList({name,description}:Task) {

   


    return (  
        <div>
           
                <div>
                <p >{name}</p>
                <p>{description}</p>
                </div>
          
        </div>
    );
}

export default TaskList;