import ButtonC from "../UI/ButtonC"
// import { useState } from "react"

export default function TrafficNav({title, c, sel, setSel}) {
    // const [c1Sel, setC1Sel] = useState();
    
    // const title = '교통사고 대분류'
    // const c = ['차대사람', '차대차', '차량단독', '철길건널목']
    const cTag = c.map((item) =>
        <ButtonC key={item} name={item} color={sel===item ? 'grey' : 'blue'}
            btevent={() => ButtonClicked(item)} />
    )
    const ButtonClicked = (item) => {
        // console.log(item)
        setSel(item)
        // console.log(c1Sel)
    }

    

    return (
        <div className="flex flex-col p-5">
            <div className="flex justify-center p-5 font-bold text-2xl">
                {title}
            </div>
            <div className="w-full flex justify-center">
                {cTag}
            </div>
        </div>
    )
}
