import { useParams } from "react-router-dom"

export default function RoutePage1() {

    const item = useParams().fruit
    

    return (
        <div>
            Route Page 1: {item}
        </div>
    )
}
