import { Link } from "react-router-dom"
import { useRef } from "react";
import DateSelection from "../UserInterface/DateSelection"
import SelectBox from "../UserInterface/SelectBox"


export default function Frcst() {
  const selDate = useRef();
  
  const DateSelection = (e) => {      
      
      if (selDate) {
        e.preventDefault();
        console.log(selDate.current.value);
      }

  }

  return (
    <div>
       <Link to='/frcstlst'>단기예보</Link>
       <div>
        <div>
          <DateSelection date ={selDate} dateSelection={DateSelection}/>
        </div>
        <div>

        </div>

       </div>

    </div>
  )
}
