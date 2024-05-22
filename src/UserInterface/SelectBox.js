import { useState, useEffect, useRef } from "react"

export default function SelectBox({ init_text, options, selRef, handleChange }) {

  const choices = options.map(item =>
    <option key={item}>{item}</option>)



  return (
    <div>
      <select ref={selRef} onChange={handleChange}
        className="border border-black w-64 text-center">
        <option> {init_text} </option>
        {choices}
      </select>
    </div>
  )
}
