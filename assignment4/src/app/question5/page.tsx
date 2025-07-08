"use client"

import React, { ChangeEvent, FormEvent, useState } from 'react'

function page () {

  const [optionselected,setOptionselected] = useState<string>('')

  function handlechange(e:ChangeEvent<HTMLSelectElement>):void{
        setOptionselected(e.target.value)
  }
  return (
    <div>
    <h1>Select an Item</h1>
    <div className='q5-main'>
    
      <select value={optionselected} onChange={handlechange}>
        <option value="">select an item</option>
        <option value="pant" >pant</option>
        <option value="shirt" >shirt</option>
        <option value="chinos">chinos</option>
        <option value="tshirt">tshirt</option>
      </select>
   


    {optionselected && (<p>selected item is: {optionselected}</p>)}
     </div>
     </div>
  )
}

export default page
