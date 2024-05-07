import MyDiv3 from "./MyDiv3";

function MyDiv2(probs) {
  return (
    <div className="relative bg-purple-500 h-2/3 w-2/3
                     text-black items-center justify-center flex">
    <div className="absolute bottom-0 left-0 text-white">
        {`${probs.dn1} > ${probs.dn2}`}
    </div>
    <MyDiv3 dn1={probs.dn1} dn2={probs.dn2} dn3={probs.dn3}/>
    </div>
  )
}
export default MyDiv2;