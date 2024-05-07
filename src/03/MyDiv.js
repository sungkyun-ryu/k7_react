import MyDiv2 from "./MyDiv2"
import { useState } from "react";

function MyDiv() {

  const [n, setN] = useState(0);
  const [m, setM] = useState(0); 

  const dname1 = 'div1';
  const dname2 = 'div2';
  const dname3 = 'div3';
  const dname4 = 'div4'; 

  // let cnt_neg = 0;
  // let cnt_pos = 0;

  const handleCount_neg = () => {
    // cnt_neg -= 1;
    setN(n-1);
    console.log("handleclick= ", n);
  }
  const handleCount_pos = () => {
    // cnt_pos += 1;
    setM(m+1)
    console.log("handleclick= ", m);
  }

  return (
    <div className="relative bg-purple-400 h-2/3 w-2/3
                     text-black items-center flex justify-center">
      <div className="absolute bottom-0 left-0 text-white">
        {dname1}
      </div>
      <div className="absolute bottom-2 right-3 text-2xl text-white">
        <span className="border-2 border-rose-800 rounded" onClick={handleCount_neg}>
          💔
        </span>
        <span className="text-xl"> {n} </span>
      </div>
      <div className="absolute top-2 right-3 text-2xl text-white">
        <span className="border-2 border-yellow-400 rounded" onClick={handleCount_pos}>
          💛
        </span>
        <span className="text-xl"> {m} </span>
      </div>

      <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3} dn4={dname4} />
    </div>
  )
}

export default MyDiv
