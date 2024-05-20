import TrafficNav from "./TrafficNav"
import { useState, useEffect } from "react"

export default function Traffic() {
    const [tdata, setTdata] = useState();
    const getUrl = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(thisdata => setTdata(thisdata.data))
            .catch(err => console.log(err))
    }
    const [c1, setC1] = useState();
    const [selC1, setSelC1] = useState();

    const [c2, setC2] = useState();
    const [selC2, setSelC2] = useState();

    const [info, setInfo] = useState();
 


    useEffect(() => {
        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
        url = url + 'page=1&perPage=20'
        url = `${url}&serviceKey=${process.env.REACT_APP_PUBLICDATA_API_KEY}`

        getUrl(url);
    }, [])

    useEffect(() => {
        if (!tdata) return
        let cc1 = tdata.map((item) => item["사고유형_대분류"])
        cc1 = [...new Set(cc1)]
        setC1(cc1)

    }, [tdata])

    /// 이제부터 중분류 C2다!!!!

    useEffect(() => {
        if (!tdata || !c1) return;
        let cc2 = tdata.filter(item => item["사고유형_대분류"] === selC1)
            .map(item => item["사고유형_중분류"])
        
        // cc2 = [...new Set(cc2)]
        setC2(cc2)

    }, [selC1])

    

/// 이제부터 상세페이지 

    useEffect(()=> {
        // console.log("대분류", selC1, "중분류", selC2)
        if(!tdata || !c1 || !selC1 || !selC2) return ;
        let tinfo = tdata.filter(item => item["사고유형_대분류"] === selC1 && item["사고유형_중분류"] === selC2)
        
        tinfo = tinfo[0]

        const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수']
        tinfo = infoKey.map((item) => 
            <div key={item} className='w-1/5 h-4/5 flex flex-col items-center border text-white'>
             <div className= "w-full flex justify-center bg-gray-500">
                 {item}
             </div>
             <div className= "w-full flex justify-center bg-gray-700">
                 {tinfo[item]}
             </div>
         </div> )
        
        setInfo(tinfo)
    },[selC2])

 
   


    return (
        <div className="h-4/5">
            <div>
                {c1 && <TrafficNav
                    title="교통사고 대분류"
                    c={c1}
                    sel={selC1}
                    setSel={setSelC1} />}
            </div>
            <div>
                {c2 && <TrafficNav
                    title="교통사고 중분류"
                    c={c2}
                    sel={selC2}
                    setSel={setSelC2} />}
            </div>
            <div className="flex w-full h-50 justify-around py-10 px-5">
                {info}   
            </div>
        </div>
    )
}
