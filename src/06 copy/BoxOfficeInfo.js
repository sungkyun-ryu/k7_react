
export default function BoxOfficeInfo({ selM }) {
    // console.log(selM)
    return (
        <div className="w-full h-20 flex justify-center 
                    items-center bg-gray-400 font-bold text-gray-800 ">
            Movie Released Date: <p>&nbsp;&nbsp;&nbsp;{selM.openDt}</p>
        </div>
    )
}

