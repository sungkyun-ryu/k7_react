import { useEffect, useState } from "react"
import ButtonC from "../UI/ButtonC";


export default function TrafficMain() {
  ///fetch 함수로 데이터 가져오기  
  const [tdata, setTdata] = useState([]);
  const [c1, setC1] = useState([]);
  const [c2, setC2] = useState([]);
  const [catbut, setCatbut] = useState();
  const [catbut2, setCatbut2] = useState();
  const [c1Sel, setC1Sel] = useState();
  const [c2Sel, setC2Sel] = useState();
  const [info, setInfo] = useState();



  const getUrlData = (url) => {
    fetch(url)
      // .then(resp => console.log(resp)) //response라는 데이터타입이 존재 - fetch함수를 돌리면 response가 나온다
      .then(resp => resp.json())
      .then(tra_data => setTdata(tra_data.data)) //response안에는 data라는 이름이 있다.
    // .catch(err => console.log(err))
  }


  /// 중분류 가지고 오기 .............!
  // let subcat = []
  const subcategorise = (item) => {
    setC1Sel(item)
    //  console.log(c1Sel)

    // for (let i; i < tdata.length; i++) {
    //   if (tdata[i]["사고유형_대분류"] === item) {
    //     subcat.push(tdata[i]["사고유형_중분류"])

    //   }
    // }
    // // console.log(subcat)
  }
  const subcategorise2 = (item) => {
    setC2Sel(item)
  }

  // console.log(subcat)

  useEffect(() => {
    // console.log(c1Sel) /////두번 이상 같은 버튼을 누르면 undefined. State가 바뀌지 않기 때문에 
    let tm = tdata.filter(item => item["사고유형_대분류"] === c1Sel)
    let subcategory = tm.map(item => item["사고유형_중분류"])
    setC2(subcategory)
    console.log(c2)
  }, [c1Sel])

  useEffect(() => {
    let bts2 = c2.map(item => <ButtonC key={item} name={item} btevent={() => subcategorise2(item)} />)
    setCatbut2(bts2)
  }, [c2])

  // useEffect(() => {
  //   let subbts = 
  // }, [c2])

  useEffect(() => {

    const arr = [...c1]
    let bts = arr.map((item) => <ButtonC key={item} name={item} btevent={() => subcategorise(item)} />
    )
    setCatbut(bts)

  }, [c1])

  useEffect(() => {
    // console.log(tdata)
    let category = tdata.map(item => item["사고유형_대분류"]);
    category = new Set(category)
    // console.log(category)
    setC1(category)
  }, [tdata])


  useEffect(() => {
    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
    url = url + 'page=1&perPage=20'
    url = `${url}&serviceKey=${process.env.REACT_APP_PUBLICDATA_API_KEY}`

    getUrlData(url);
  }, [])

  // const arr = [...c1]
  // const bts = arr.map((item) => {
  //   return <ButtonC key={item} name={item} btevent={() => subcategorise(item)} />
  // })


  return (
    <div className="h-screen">
      <div className="flex flex-col items-center h-1/2 justify-around">
        <div>
          <div className="flex justify-center p-5 text-xl">
            교통사고 대분류
          </div>
          <div className= "flex justify-center p-5">
            {catbut}
          </div>
        </div>
        <div >
          <div className= "flex justify-center p-5 text-xl" >
            교통사고 중분류
          </div>
          <div className= "flex justify-center p-5">
            {catbut2}
          </div>
          {/* <div>
            <div className="flex justify-center p-5">
              정보
            </div>
            <div>
              info
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
