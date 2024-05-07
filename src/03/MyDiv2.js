import MyDiv3 from "./MyDiv3";

function MyDiv2({dn1, dn2, dn3, dn4}) {
  return (
    <div className="relative bg-purple-500 h-2/3 w-2/3
                     text-black items-center justify-center flex">
    <div className="absolute bottom-0 left-0 text-white">
        {`${dn1} > ${dn2}`}
    </div>
    <MyDiv3 dn1={dn1} dn2={dn2} dn3={dn3}/>
    </div>
  )
}
export default MyDiv2;