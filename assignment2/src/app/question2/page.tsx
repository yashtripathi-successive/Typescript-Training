"use client"
import { useState,useEffect } from "react";


function PersonForm() {


    const [firstName,setFirstName] = useState<string | null>(null)
    const [lastName,setLastName] = useState<string | null>(null)
    const [age,setAge] = useState<number | null>(null)

   useEffect(()=>{
    let first_name = prompt("Enter you First Name  : ")

    
    if(first_name==null || first_name.trim()===''){
    alert('First Name Required');
    return;
    }
    
    else if(!(/^[a-zA-Z ]+$/.test(first_name))) {
    alert('First Name is not Valid');
    return;
    }

    else{
        setFirstName(first_name)
    }


    let last_name = prompt("Enter you Last name : ")
    if(last_name==null || last_name.trim()===''){
    alert('Last Name Required : ');
    return;
    }
    
    else if(!(/^[a-zA-Z ]+$/.test(last_name))) {
    alert('Last Name is not Valid');
    return;
    }

    else{
        setLastName(last_name)
    }


    let ageTemp = prompt("Enter you age : ")
    if(ageTemp==null || ageTemp.trim()===''){
    alert('Age Required');
    return;
    }
    let validAge = Number(ageTemp)
    if (isNaN(validAge)){
    alert('Age should be Valid');
    return;
    }
    else{
      setAge(validAge);
    }
   },[]);

    
    return ( 



        <div className="personform">

        <p> First name is : {firstName}</p>
        <p> Last name is : {lastName}</p>
        <p> Age is : {age}</p>


        </div>
     );
}

export default PersonForm;