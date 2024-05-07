

function MyDiv3(probs) {
    return (
        <div className="relative bg-purple-700 h-2/3 w-2/3
                     text-black items-center flex">
            <div className= "absolute left-0 bottom-0 text-white">
                {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`}
            </div>
        </div>
    )
}

export default MyDiv3;