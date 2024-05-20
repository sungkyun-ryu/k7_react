// import ButtonC from "../UI/ButtonC"
// import Gallerycard from "../10/Gallerycard"
import { useState, useEffect, useRef } from "react"
import SelectBox from "./SelectBox"


export default function BusanFestival() {

    const [festdata, setFestdata] = useState();
    const [ops, setOps] = useState();
    const selRef = useRef(); 
        
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=`
    url = `${url}${process.env.REACT_APP_PUBLICDATA_API_KEY}`
    url = `${url}&pageNo=1&numOfRows=40&resultType=json`

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setFestdata(data.getFestivalKr.item)
            })
    }, [])

    useEffect(() =>{
        if(!festdata) return;

        let tm = festdata.map((i) => {
            return i.GUGUN_NM
        })
        tm = new Set(tm)
        tm = [...tm].sort()
        setOps(tm)
        
    },[festdata])

    // console.log(selRef.current.value)

    return (
        <div>
            <div className="flex flex-col">
                <div>
                    부산축제정보
                </div>
                {ops && <SelectBox options={ops} selRef={selRef}/>}
            </div>
            <div>
                {/* <Gallerycard img_url={} /> */}
            </div>
        </div>
    )
}
