"use client"
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import '@/app/globals.css'


 interface formdata{
  name:string;
  age:string;
  gender:string;
  password:string;
  confirmpassword:string;
 }

 
 function Page() {

    const [formdata,setFormdata] = useState<formdata>({
        name:"",
        age:"",
        gender:"",
        password:"",
        confirmpassword:""
    })
    const[match,setMatch] = useState<boolean>(false)
    const [submitted,setSubmitted]= useState<boolean>(false)


    function handlechange(e:ChangeEvent<HTMLInputElement>){
        const {name,type,value,checked} = e.target
       setFormdata((prev)=>({
        ...prev,[name]:value
       }))
    }


    function handlesubmit(e:FormEvent<HTMLFormElement>){
       e.preventDefault();
       setSubmitted(true)
       if(formdata.password===formdata.confirmpassword){
        setMatch(true)
        console.log(formdata)
       
       }else{
        setMatch(false)
        console.log("password not matched")
        
       }

       
    }
  return (
    <div>
    <div className="main"> 
    <h1>Registration form</h1>
    <div className="form-container">
       
        <form onSubmit={handlesubmit} className="form">


            <input type="text" name="name" placeholder="enter full name" value={formdata.name} onChange={handlechange}/>
            <input type="number" name="age" placeholder="enter age" value={formdata.age} onChange={handlechange}/>
            
            <div className="gender-group">
            <label>male<input type="radio" name="gender" placeholder="enter gender" value="male"  checked={formdata.gender === "male"} onChange={handlechange}/></label> 
            <label>female<input type="radio" name="gender" placeholder="enter gender"  value="female" checked={formdata.gender === "female"} onChange={handlechange}/></label> 
            </div>
          
            <input type="password" name="password" placeholder="enter password" value={formdata.password} onChange={handlechange}/>
            <input type="password" name="confirmpassword" placeholder="enter confirm password" value={formdata.confirmpassword} onChange={handlechange}/>
            <button type="submit">submit</button>
        </form>



        
        
    </div>

    {submitted && (match ? <p className="success">password matched & form submitted</p> : <p className="error">password should be matched in order to submit form</p>)}
    </div>
    </div>
  )
}

export default Page
