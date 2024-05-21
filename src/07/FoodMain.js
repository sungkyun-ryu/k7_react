import fooddata from "./fooddata.json"
import ButtonC from "../UI/ButtonC.js"
import FoodCard from "./FoodCard.js";
import { useState } from "react";

export default function FoodMain() {
    let c1 = fooddata.map((item) => item["운영주체 분류"])

    c1 = new Set(c1);
    c1 = [...c1];
    // console.log(c1)
    const [c1List, setC1list] = useState([]); 

    const handleclk=(c) => {
        console.log(c);
        console.log(name1.division)
        let tm= name1.filter(item=> item.division === c);
        
        console.log(tm)
    }           

    const c1Bts= c1.map((item) => {
        return <ButtonC key={item} name={item} btevent={()=>handleclk(item)} color='blue'/>
    })
    

    let name1= fooddata.map((item, idx) => {
        return <FoodCard key={item.사업장명+idx} 
                        division={item.구분}
                        name={item.사업장명}
                        addr={item["사업장 소재지"]}
                        info={item["연락처(대표번호)"]}
                       />
    })
   
   
    return (
        <div className="flex flex-col justify-start w-full h-full py-10 px-10">
            <div className="bg-gray-200 flex h-14 justify-between px-10 py-1 mb-10">
               {c1Bts}                
            </div>
            <div className="grid grid-cols-2 gap-2">
               {c1List}
            </div>
        </div>
    )
}
