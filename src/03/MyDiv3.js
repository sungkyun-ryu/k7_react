import MyDiv4 from "./MyDiv4";

function MyDiv3({dn1, dn2, dn3, dn4}) {
    return (
        <div className="relative bg-purple-700 h-2/3 w-2/3
                     text-black items-center flex justify-center">
            <div className= "absolute left-0 bottom-0 text-white">
                {`${dn1} > ${dn2} > ${dn3}`}
                
            </div>
            <MyDiv4/>
        </div>
    )
}

export default MyDiv3;