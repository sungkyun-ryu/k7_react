import Gallerycard from "./Gallerycard"
import ButtonC from "../UI/ButtonC"
import { useState, useEffect, useRef } from "react"

export default function Gallery() {

    // let img_url = "http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg"
    // let title = "태종대유원지"
    // let address = "부산광역시 영도구 동삼동"
    // let keyword = "태종대유원지, 다른곳, 여기저기, 부산"

    const bt1name = "확인"
    const bt2name = "취소"

    const[tourdata, setTourdata] = useState();
    const[cards, setCards] = useState();

    const search_keyword = useRef(null);

    const urldata= (e) => {
        e.preventDefault();
        if(search_keyword.current.value ==='') {
            alert('키워드를 입력하세요')
            search_keyword.current.focus();
            return;
        }
        
        const search_word = search_keyword.current.value
        const urlencodedword = encodeURIComponent(search_word)

        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = `${url}serviceKey=${process.env.REACT_APP_PUBLICDATA_API_KEY}`
        url = `${url}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${urlencodedword}&_type=json`
        
        fetch(url) 
            .then(response => response.json())
            .then(urldata => 
                setTourdata(urldata.response.body.items.item))
    }
   
    const cancelurl = (e)=>{
        e.preventDefault();
        setCards(null)
        setTourdata(null)
        search_keyword.current.value = ''
        search_keyword.current.focus()
        }

    const pressEnter = (e) =>{
        e.preventDefault()
        
        if(e.key === 'Enter') {            
            console.log(e.key)
            urldata(e);            
        }
    }
   
    useEffect(()=>{
        if(!tourdata) return ;

        console.log(tourdata)
        let temp = tourdata.map((item) => 
        <Gallerycard key={item.galContentId}
        title={item.galTitle} 
        img_url={item.galWebImageUrl} 
        address={item.galPhotographyLocation} 
        keyword={item.galSearchKeyword} />)
        setCards(temp)
    },[tourdata])

    return (
        <div className='h-full w-full'>
            <div className='p-10'>
                <div className="flex justify-center text-2xl p-5">
                    한국관광공사_관광사진 정보
                </div>
                <div className="flex p-5 justify-center items-center">
                    <form className="px-3 w-2/5 flex justify-center">
                        <input type='text' 
                            className="border-2 border-black w-full"
                            ref={search_keyword} 
                            onKeyDown={pressEnter}/>
                                
                    </form>
                    <div className=" flex justify-center" >
                        <ButtonC name={bt1name} color='blue' className='mx-10' btevent={urldata} />
                        <ButtonC name={bt2name} color='blue' className='mx-10' btevent={cancelurl}/>
                    </div>

                </div>
            </div>

            <div className="p-10 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 h-2/3 items-center">
                {cards}
            </div>
        </div>
    )
}
