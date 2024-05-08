// import MyList from './04/MyList';
import './App.css';
// import MyClock from './02/MyClock';
// import MyDiv from './03/MyDiv';
import { FaHome } from "react-icons/fa";
// import MyListItem from './04/MyListItem';
// import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';



function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-sky-900 text-white">
        <p>React Practice</p>
        <FaHome className="text-3xl text-blue-200" />
      </header>
      <main className="grow flex justify-center items-center">
        {/* <MyDiv/> */}
        {/* <MyList /> */}
        {/* <Lotto/> */}
        <BoxOffice/>
      </main>
      <footer className="flex justify-center h-20 items-center bg-sky-900 text-xl text-white font-bold">
        FOOTER
      </footer>
    </div>
  );
}

export default App;
