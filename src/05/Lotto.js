import LottoBall from "./LottoBall"
import ButtonC from "../UI/ButtonC"
import { useState } from "react";

export default function Lotto() {

    const caption = 'Lotto';
    const [n, setN] = useState();


    const handleClick = () => {
        setN(Math.floor((Math.random() * 45 + 1)));
        console.log("click " + n);
    }

    let arr = [];

    while (arr.length < 7) {
        let m = Math.floor(Math.random() * 45 + 1);
        if (!arr.includes(m)) arr.push(m)
    }

    let tm = arr.map(item =>
        <LottoBall key={item.index} number={item} />
    )

    tm.splice(6,0,<p className="font-bold pb-2"> + </p>)
    
    return (
        <div className="h-1/3 flex flex-col items-center justify-between">
            {/* <LottoBall number={n}/> */}
            <div className="flex text-4xl items-center justify-around">
                {tm}
            </div>
            <ButtonC btevent={handleClick} name={caption} color='blue' />
        </div>
    )
}
