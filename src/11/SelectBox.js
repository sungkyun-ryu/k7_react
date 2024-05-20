import { useState, useEffect, useRef } from "react"

export default function SelectBox({options, selRef}) {
    
    const choices = options.map(item => 
                 <option key={item}>{item}</option>)      
    
    const handleChange=(e) =>{
        e.preventDefault()
        console.log(selRef.current.value)
        }
                
  
    return (
    <div>
      <form>
        <select ref= {selRef} onChange={handleChange}
            className="border border-black w-64 text-center">
            <option defaultValue=''>
                ------------ 지역 선택 ------------
                </option>
                {choices}
        </select>        
      </form>
    </div>
  )
}
