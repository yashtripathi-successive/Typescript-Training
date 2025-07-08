"use client"

import React, { ChangeEvent, useState } from 'react'
import '@/app/globals.css'

function page (){
    const [tempInCelcius,setTempInCelcius] = useState<number | "">("")
    const [tempInFahrenite,setTempInFahrenite] = useState<number | "">("")


    function manageTempInCelcius(e:ChangeEvent<HTMLInputElement>){
       
    const value = e.target.value;

    if (value === "") {
      setTempInCelcius("");
      setTempInFahrenite("");
      return;
    }

    const celsiusNum = Number(value);
    if (!isNaN(celsiusNum)) {
      setTempInCelcius(celsiusNum);
      const fahrenheit = (celsiusNum * 9) / 5 + 32;
      setTempInFahrenite(Number(fahrenheit.toFixed(2)));
    }

    }


    function manageTempInFahrenite(e:ChangeEvent<HTMLInputElement>){
    const value = e.target.value;

    if (value === "") {
      setTempInFahrenite("");
      setTempInCelcius("");
      return;
    }

    const fahrenheitNum = Number(value);
    if (!isNaN(fahrenheitNum)) {
      setTempInFahrenite(fahrenheitNum);
      const celsius = ((fahrenheitNum - 32) * 5) / 9;
      setTempInCelcius(Number(celsius.toFixed(2)));
    }
    }
  return (
    <div className='main'>
      <h1>Temperature Converter</h1>
      <div className='temperature-section'>
      <input type="number" placeholder='enter temperature in celcius' value={tempInCelcius}  onChange={manageTempInCelcius}/>
      <input type="number" placeholder='enter temperature in fahrenite' value={tempInFahrenite} onChange={manageTempInFahrenite}/>
      </div>
    </div>
  )
}

export default page
