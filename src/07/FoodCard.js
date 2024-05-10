import bank from "./img/bank.png"
import busan from "./img/busan.png"
import market from "./img/market.png"

import { useState } from "react";

export default function FoodCard({data, division, name, addr, info }) {
    const [priv, setPriv] = useState(false);

    const ClkAdd = () => {
        setPriv(!priv);
    }          
    

    return (
        <div onClick={ClkAdd} className="my-2 flex px-5 py-10 h-60 border-gray-800 border rounded-lg">
            <div className="w-1/3 h-full inline-flex justify-center ">
                <img src={division === "기초푸드뱅크" ? bank
                                  : division ==="기초푸드마켓" ? market 
                                  : busan} alt={division} />
            </div>
            <div className="text-stone-800 flex flex-col justify-between w-2/3 text-center">
                <div className="border border-black h-1/4 justify-center flex flex-col font-bold text-xl">
                    {division}
                </div>
                <div className=" border border-gray-300 h-1/6 justify-center flex flex-col">
                    {name}
                </div>
                <div className=" h-1/6 justify-center flex flex-col">
                    {addr}
                </div>
                <div  className="bg-gray-400 h-1/6 justify-center flex flex-col">
                    {priv && info }
                </div>


            </div>
        </div>
    )
}
