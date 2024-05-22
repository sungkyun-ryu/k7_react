// import MyList from './04/MyList';
// import TrafficNav from './08/TrafficNav';
// import Traffic from './08/Traffic';
import './App.css';
import MyClock from './02/MyClock';
// import MyDiv from './03/MyDiv';
import { FaHome } from "react-icons/fa";
// import MyListItem from './04/MyListItem';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import FoodMain from './07/FoodMain';
// import TrafficMain from './08/TrafficMain';
import Traffic from './08/Traffic';
// import MyRef from './09/MyRef';
import Gallery from './10/Gallery';
// import BusanFestival from './11/BusanFestival';
// import RouteMain from './12/RouteMain';
import ButtonC from './UI/ButtonC';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Frcst from './13/Frcst';
import Frcst_list from './13/Frcst_list';


function App() {


  return (
    <div className="flex flex-col w-full max-w-screen-lg h-screen mx-auto">
      <BrowserRouter>
        <header className=" flex justify-between items-center 
                            text-xl font-bold h-20 p-10 mr-3
                             bg-sky-900 text-white">
          <p>React Practice</p>
          <div className='w-full font-thin text-base flex justify-center items-center'>
            <ul className='flex'>
              <li><Link to='/clock'
              className="px-3 py-1 m-2 border rounded-xl bg-sky-700">
              시계
            </Link></li>
            <li> <Link to='/sightseeing'
              className="px-3 py-1 m-2 border rounded-xl bg-sky-700">
              전국 관광지
            </Link></li>
            <li><Link to='/accidents'
              className="px-3 py-1 m-2 border rounded-xl bg-sky-700">
              교통사고 정보
            </Link></li>
            <li><Link to='/boxoffice'
              className="px-3 py-1 m-2 border rounded-xl bg-sky-700">
              박스오피스
            </Link></li>
            <li><Link to='/lotto'
              className="px-3 py-1 m-2 border rounded-xl bg-sky-700">
              로또
            </Link></li>
            <li><Link to='/foodbank'
              className="px-3 py-1 m-2 border rounded-xl bg-sky-700">
              푸드뱅크
            </Link></li>
            <li><Link to='/frcst'
              className="px-3 py-1 m-2 border rounded-xl bg-sky-700">
              예보
            </Link></li>

            </ul>
          </div>
          <FaHome className="text-3xl text-blue-200 ml-3" />
        </header>
        <main className="grow flex justify-center items-center overflow-y-auto">
          {/* <MyClock /> */}
          {/* <MyDiv/> */}
          {/* <MyList /> */}
          {/* <Lotto/> */}
          {/* <BoxOffice/> */}
          {/* <FoodMain/> */}
          {/* <TrafficMain/>         */}
          {/* <TrafficNav/> */}
          {/* <Traffic/> */}
          {/* <MyRef/> */}
          {/* <Gallery/> */}
          {/* <BusanFestival/> */}
          {/* <RouteMain/> */}
          <Routes>
            <Route path='/clock' element={<MyClock />}></Route>
            <Route path='/sightseeing' element={<Gallery />}></Route>
            <Route path='/accidents' element={<Traffic />}></Route>
            <Route path='/boxoffice' element={<BoxOffice />}></Route>
            <Route path='/lotto' element={<Lotto />}></Route>
            <Route path='/foodbank' element={<FoodMain />}></Route>
            <Route path='/frcst' element={<Frcst />}></Route>
            <Route path='/frcstlst' element={<Frcst_list />}></Route>
          </Routes>

        </main>
      </BrowserRouter>
      <footer className="flex justify-center h-20 items-center bg-sky-900 text-xl text-white font-bold">
        FOOTER
      </footer>
    </div>
  );
}

export default App;
