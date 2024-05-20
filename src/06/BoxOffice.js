// import boxdata from './BoxOffice.json'
import BoxOfficeTb from './BoxOfficeTb';
import BoxOfficeTh from './BoxOfficeTh';
import BoxOfficeInfo from './BoxOfficeInfo';
// import BoxOfficeDt from './BoxOfficeDt';
import { useState, useEffect, useRef } from 'react';


export default function BoxOffice() {

  const [dailyList, setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();
  // const boxdate = boxdata.boxOfficeResult.showRange;
  const selDate = useRef();
  const [isFocused, setIsFocused] = useState(false)

  const getUrl = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setDailyList(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))

    console.log(dailyList)
  }

  // useEffect(() => {
  //   setDailyList(boxdata.boxOfficeResult.dailyBoxOfficeList);
  // }, []);

  useEffect(() => {
    setSelMv(dailyList[0]);
  }, [dailyList])

  const Focuschange = () => {
    setIsFocused(true)
  }

  const Blurchange = () => {
    setIsFocused(false)
  }

  const DateSelection = (e) => {
    e.preventDefault();
    // console.log(selDate.current.value);
    // console.log(e.target.value);
    if (!isFocused) return

    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
    url = `${url}key=${process.env.REACT_APP_MV_API_KEY}`
    url = `${url}&targetDt=${selDate.current.value.replaceAll('-', '')}`

    // console.log(url)
    getUrl(url)

  }



  return (
    <div className="w-full flex justify-center h-full">
      <div className="relative w-4/5 overflow-x-auto shadow-md sm:rounded-lg">
        <form className='flex flex-col justify-center'>
          <div className='flex items-center justify-center h-20'>
            <label htmlFor='dateId' className='px-3 font-bold text-gray-600'> Choose the Date: </label>
            <input type="date" id='dateId' ref={selDate}
              onChange={DateSelection} onBlur={Blurchange} onFocus={Focuschange}
              className='px-3 border-2 border-gray-600 rounded-xl' />
          </div>
        </form>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <BoxOfficeTh dailyListName={dailyList} />
          <BoxOfficeTb dailyListName={dailyList} setSelM={setSelMv} />
        </table>
        {selMv && <BoxOfficeInfo selM={selMv} />}
      </div>
    </div>

  )
}
