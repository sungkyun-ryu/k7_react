import { useSearchParams, useLocation } from "react-router-dom"

export default function RoutePage2() {

    const loc = useLocation();
    // console.log(loc)

    const [sParams] = useSearchParams();
    console.log("sParams", sParams)
    // const item = sParams.get('animal')
    
    const animalList =[]
    sParams.forEach((item)=> 
        {return animalList.push(<li>{item}</li>) }
    )
    
    console.log(animalList)

  return (
    <div>
        <div>
        Route Page 2
        </div>
        <ul>
            {animalList}
        </ul>
      
    </div>

  )
}
