// import ButtonC from "../UI/ButtonC"
// import Gallerycard from "../10/Gallerycard"
import { useState, useEffect, useRef } from "react"
import SelectBox from "./SelectBox"
import Gallerycard from "../10/Gallerycard";


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

    useEffect(() => {
        if (!festdata) return;

        let tm = festdata.map((i) => {
            return i.GUGUN_NM
        })
        tm = new Set(tm)
        tm = [...tm].sort()
        setOps(tm)

    }, [festdata])

    const handleChange = (e) => {
        e.preventDefault()
        console.log(selRef.current.value)
        const a = festdata.filter(item => item.GUGUN_NM === selRef.current.value)
        console.log(a)
    }

    
    return (
        <div className="w-full h-full 
                        flex flex-col justify-start
                        items-center text-center">
            <div>
                <div className="font-bold text-xl m-10">
                    부산축제정보
                </div>
                <form>
                    {ops && <SelectBox options={ops} selRef={selRef} init_text=' --------- 지역 선택 --------- ' handleChange={handleChange} />}
                </form>
            </div>
            <div>
                <Gallerycard img_url='' title='' address='' keyword='' />
            </div>
        </div>
    )
}
