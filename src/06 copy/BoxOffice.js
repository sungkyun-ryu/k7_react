import boxdata from './BoxOffice.json'
import BoxOfficeTb from './BoxOfficeTb';
import BoxOfficeTh from './BoxOfficeTh';
import BoxOfficeInfo from './BoxOfficeInfo';
import BoxOfficeDt from './BoxOfficeDt';
import { useState, useEffect } from 'react';

export default function BoxOffice() {

  const [dailyList, setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();
  const boxdate = boxdata.boxOfficeResult.showRange;

  useEffect(() => {
    setDailyList(boxdata.boxOfficeResult.dailyBoxOfficeList);
  }, []);

  useEffect(() => {
    setSelMv(dailyList[0]);
  }, [dailyList])

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-4/5 overflow-x-auto shadow-md sm:rounded-lg">
        <BoxOfficeDt boxDate={boxdate} />
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <BoxOfficeTh dailyListName={dailyList} />
          <BoxOfficeTb dailyListName={dailyList} setSelM={setSelMv} />
        </table>
        {selMv && <BoxOfficeInfo selM={selMv} />}
      </div>
    </div>

  )
}
