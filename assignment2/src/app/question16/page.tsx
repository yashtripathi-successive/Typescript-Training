"use client"

import React, { useMemo, useState } from "react";


interface employeeInterface{
     name:string;
     salary:number;
}
function EmployeeSalary() {
   const[employeedata,setEmployeedata] = useState<employeeInterface[]>([
        {name:"yash",salary:50000},
        {name:"aryan",salary:3000},
        {name:"anany",salary:20000},
        {name:"xyz",salary:100000}
    ])


    const memoizedEmployeedata = useMemo(()=> {
         const avgsalary =employeedata.reduce((sum,ele)=>sum+ele.salary,0) / employeedata.length;
        return avgsalary
    }
    ,[employeedata])


    function updatesalary(raise:number){
         const updateddata = employeedata.map((entry)=>(
          {
            ...entry,salary:entry.salary+raise
          }
         ))
         setEmployeedata(updateddata)
    }
    return ( 
        <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", 
        textAlign: "center"
        }}>
       
        <p>Average salary is : {memoizedEmployeedata}</p>
        <ul>
          
           { employeedata.map((data,id)=>(
                    <li key={id} >
                     {data.name}:{data.salary}
                    </li>
            ))}
           
        </ul>
        <button onClick={()=>updatesalary(5000)}>click to update employee salary by 5000</button>
        </div>
     );
}

export default EmployeeSalary;