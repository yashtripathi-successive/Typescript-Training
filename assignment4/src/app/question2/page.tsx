
"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import '@/app/style_q2.css'

interface formdata{
  first_name:string;
  last_name:string;
  gender:string;
  terms:boolean;
}


function Page() {
  const [formData,setFormData] = useState<formdata>({
    first_name:"",
    last_name:"",
    gender:"",
    terms:false
  })


  function handlechange( e: ChangeEvent<HTMLInputElement>):void{
    const {name,value,checked,type} = e.target
    setFormData((prev)=>({
        ...prev,[name]:type==="checkbox"?checked:value
    }))

  }
  function handlesubmit( e: FormEvent<HTMLFormElement>):void{
    e.preventDefault()
    console.log(`first name :  ${formData.first_name}, last name :  ${formData.last_name}, gender :  ${formData.gender}, terms checked : ${formData.terms}`)
  }


  return (
    <div>
      <h1>Registraion Form</h1>
      <form onSubmit={handlesubmit}>


        <input type="text" name="first_name" placeholder='first_name'  value={formData.first_name} onChange={handlechange}/>
        <input type="text" name="last_name" placeholder='last_name' value={formData.last_name} onChange={handlechange}/>
        <div className="gender-group">
        <input type="radio" name="gender" value="male" checked={formData.gender==="male"} onChange={handlechange}/>
        <label>male</label>
        <input type="radio" name="gender" value="female" checked={formData.gender==="female"} onChange={handlechange}/>
        <label>female</label>
        </div>
        <label>accept terms and conditions <input type="checkbox" name="terms" checked={formData.terms}  onChange={handlechange}/> </label>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Page
