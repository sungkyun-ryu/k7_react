import { Link } from "react-router-dom"

export default function RouteHome() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold p-20">
                Route Home
            </h1>
            <div className="w-1/2 grid grid-cols-2 m-10">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-xl font-bold p-3 m-3 
                                    border border-gray rounded-lg
                                    bg-gray-300">
                        Page1
                    </h2>
                    <ul>
                        <li className="m-1"><Link to='/p1/Apple' >사과</Link></li>
                        <li className="m-1"><Link to='/p1/Banana'>바나나</Link></li>
                        <li className="m-1"><Link to='/p1/Mango'>망고</Link></li>
                        <li className="m-1"><Link to='/p1/Pineapple'>파인애플</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-xl font-bold p-3 m-3 
                                    border border-gray rounded-lg
                                    bg-gray-300">
                        Page2
                    </h2>
                    <ul>
                        {/* <li className="m-1"><Link to='/p2?animal=Dog'>개</Link></li>
                        <li className="m-1"><Link to='/p2?animal=Cat'>고양이</Link></li>
                        <li className="m-1"><Link to='/p2?animal=Monkey'>원숭이</Link></li>
                        <li className="m-1"><Link to='/p2?animal=Cow'>소</Link></li> */}
                        <li>
                            <Link to='/p2?animal1=Dog&animal2=Cat&animal3=Monkey'>
                                개, 고양이, 원숭이
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
