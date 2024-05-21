// import MyList from './04/MyList';
// import TrafficNav from './08/TrafficNav';
// import Traffic from './08/Traffic';
import './App.css';
// import MyClock from './02/MyClock';
// import MyDiv from './03/MyDiv';
import { FaHome } from "react-icons/fa";
// import MyListItem from './04/MyListItem';
// import Lotto from './05/Lotto';
// import BoxOffice from './06/BoxOffice';
// import FoodMain from './07/FoodMain';
// import TrafficMain from './08/TrafficMain';
// import MyRef from './09/MyRef';
// import Gallery from './10/Gallery';
// import BusanFestival from './11/BusanFestival';
import RouteMain from './12/RouteMain';

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg h-screen mx-auto">
      <header className=" flex justify-between items-center text-xl font-bold h-20 p-10 bg-sky-900 text-white">
        <p>React Practice</p>
         
        <FaHome className="text-3xl text-blue-200" />
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
        <RouteMain/>
      </main>
      <footer className="flex justify-center h-20 items-center bg-sky-900 text-xl text-white font-bold">
        FOOTER
      </footer>
    </div>
  );
}

export default App;
