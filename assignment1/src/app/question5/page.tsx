"use client"

import TaskList from "@/components/TaskList";
import React, { useEffect, useState } from "react";

interface Task{
    id:number;
    name:string;
    description:string;
}
function Page() {

    const tasks:Task[] = [
        {id:1,name:"yash",description:"hi i am yash"},
        {id:2,name:"anany",description:"hi i am anany"}
    ]


    return (  
        <div>
        {tasks.map((task,id)=>(
            <TaskList key={id} name={task.name} description={task.description}/>
        ))}
        </div>
    );
}

export default Page;