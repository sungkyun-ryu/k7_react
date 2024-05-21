import { BrowserRouter, Routes, Route } from "react-router-dom"
import RouteHome from "./RouteHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import RouteNav from "./RouteNav"

export default function RouteMain() {
    return (
        <div 
            className="w-2/3 h-full 
                        flex flex-col 
                        justify-start"
                        >
            <BrowserRouter>
            <RouteNav/>
                <Routes>
                    <Route path="/" element={<RouteHome/>} />
                    <Route path="/p1/:fruit" element={<RoutePage1 />} />
                    <Route path="/p2" element={<RoutePage2 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
