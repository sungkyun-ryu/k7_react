import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react";
import DateSelection from "../UserInterface/DateSelection"
import SelectBox from "../UserInterface/SelectBox"
import ButtonC from "../UserInterface/ButtonC";
import regionData from "./getxy.json"

export default function Frcst() {
  const selDate = useRef();
  const selRegion = useRef();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [date, setDate] =useState();

  const regions = regionData.map((item) => {
    return item["1단계"]
  })


  // const DateSelection = (e) => {  
  //     e.preventDefault();
  //     setDate(selDate.current.value)
  // //     if (selDate) {
  // //       e.preventDefault();
  // //       console.log(selDate.current.value);
  // //     }
  // }


  const RegionBox = () => {
    console.log(selRegion.current.value)
    console.log("regionData=", regionData)
    let tm = regionData.filter((item) => 
      item["1단계"] === selRegion.current.value )
    tm = tm[0]
    setX(tm["격자 X"])
    setY(tm["격자 Y"])
  }
  
  console.log(x)
  console.log(y)
  console.log(selDate.current.value)


  // const NowCasting = () =>{

  // }


  return (
    <div>
      <Link to='/frcstlst'>단기예보</Link>
      <form>
      <div className="w-full 
      flex justify-center 
      items-center ">
      
        <div className="flex p-3">
          <DateSelection date={selDate} dateSelection={DateSelection} />
        </div>
        <div>
          <SelectBox init_text='---------- Location ----------'
            options={regions} selRef={selRegion}
            handleChange={RegionBox}
            className="p-3" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div>
          <ButtonC btevent=''
            name='NowCasting'
            color='blue'
          />
          <ButtonC btevent='' name='Short-Term' color='blue' />
        </div>

      </div>
      </form>
    </div>
  )
}
