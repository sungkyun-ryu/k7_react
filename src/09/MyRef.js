import ButtonC from "../UI/ButtonC"
import { useState,  useRef } from "react";


export default function MyRef() {

  let cVal =0 
  const [sVal, setSVal] = useState(0)
  const rVal = useRef(0)
  
  const addingf = (e) => {
    e.preventDefault();
    console.log(x1.current.value);
    console.log(x2.current.value);

    x3 = parseInt(x1.current.value) + parseInt(x2.current.value) 
    console.log(x3.current.value)
  }  
  const x1 = useRef();
  const x2 = useRef(); 
  let x3 = useRef(); 
  

  const HandleClickComp = () => {
    cVal += 1;
    console.log(cVal)
  }

  const HandleClickState = () => {
    setSVal(sVal+1)
    console.log(sVal)
  }
  const HandleClickRef = () => {
    rVal.current = rVal.current + 1;
    console.log(rVal)

  }


  return (
    <div className="flex flex-col" >
      <div className="m-10 flex justify-between font-bold">
        <span>컴포넌트 변수: {cVal} </span>
        <span>state 변수: {sVal} </span>
        <span>ref 변수: {rVal.current} </span>
      </div>
      <div className="m-10 flex justify-between">
        <span>
          <ButtonC name='컴포넌트 변수' color='blue' btevent={HandleClickComp} />
        </span>
        <span>
          <ButtonC name='state 변수' color='blue' btevent={HandleClickState} />
        </span>
        <span>
          <ButtonC name='ref 변수' color='blue' btevent={HandleClickRef} />
        </span>
      </div>
      <form className="m-10 flex justify-between">
        <input type='number' id='txt1' ref={x1}
          className="bg-gray-300 w-1/4" />
        <span className="flex justify-center font-bold text-xl">+</span>
        <input type='number' id='txt2' ref={x2}
          className="bg-gray-300 w-1/4" />
        <ButtonC name="=" color='blue' btevent={addingf} 
          className="items-center"/>
        <input type='number' id='txt3' ref={x3.current} readOnly 
          className="bg-gray-500 w-1/4"/>
      </form>
    </div>
  )
}
