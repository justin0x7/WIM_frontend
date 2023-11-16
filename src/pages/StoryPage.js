import React, { useState } from 'react';
import Galleon1 from "../assets/img/galleon1.png"
import Galleon2 from "../assets/img/galleon2.png"
import Galleon3 from "../assets/img/galleon3.png"
import { Link } from 'react-router-dom';

function StoryPage() {
  const [barSwitch, setBarSwitch] = useState(0);
  const nextBatSwitch = () => {
    setBarSwitch(barSwitch + 1)
  }

  const prevBatSwitch = () => {
    setBarSwitch(barSwitch - 1)
  }

  return (
    <div className="pl-6 pr-6">
      {barSwitch === 0 &&
        <>
          <p className="font-extrabold font-sans text-5xl text-center text-yellow-400 leading-none pt-16 mb-12 cursor-pointer">GALLEON</p>
          <p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider mb-12">story telling paragraph story telling paragraphstory telling paragraphstory telling paragraphstory telling paragraph</p>
          <p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider mb-12">story telling paragraph story telling paragraphstory telling paragraphstory telling paragraphstory telling paragraph</p>
          <div className="flex justify-center items-center">
            <img src={Galleon1} alt="Galleon1" />
          </div>
          <div className="flex justify-center items-center">
            <p className="bg-yellow-400 text-yellow-400 custom-width p-1 mt-8 inline-block mr-4 cursor-pointer hover:bg-yellow-200"></p>
            <p className="bg-yellow-400 text-yellow-400 w-12 p-1 mt-8 inline-block mr-4 cursor-pointer hover:bg-yellow-200"></p>
            <p className="bg-yellow-400 text-yellow-400 w-12 p-1 mt-8 inline-block mr-4 cursor-pointer hover:bg-yellow-200"></p>
            <p className="text-yellow-400 p-1 mt-8 inline-block cursor-pointer hover:text-yellow-200" onClick={nextBatSwitch}>NEXT</p>
          </div>
        </>
      }
      {barSwitch === 1 &&
        <>
          <p className="font-extrabold font-sans text-5xl text-center text-yellow-400 leading-none pt-16 mb-12 cursor-pointer">BLACKBEARD</p>
          <p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider mb-12">story telling paragraph story telling paragraphstory telling paragraphstory telling paragraphstory telling paragraph</p>
          <p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider mb-12">story telling paragraph story telling paragraphstory telling paragraphstory telling paragraphstory telling paragraph</p>
          <div className="flex justify-center items-center">
            <img src={Galleon2} alt="Galleon2" />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-yellow-400 p-1 mt-8 inline-block cursor-pointer hover:text-yellow-200 mr-4" onClick={prevBatSwitch}>PREV</p>
            <p className="bg-yellow-400 text-yellow-400 w-12 p-1 mt-8 inline-block mr-4 cursor-pointer hover:bg-yellow-200"></p>
            <p className="bg-yellow-400 text-yellow-400 custom-width p-1 mt-8 inline-block mr-4 cursor-pointer hover:bg-yellow-200"></p>
            <p className="bg-yellow-400 text-yellow-400 w-12 p-1 mt-8 inline-block mr-4 cursor-pointer hover:bg-yellow-200"></p>
            <p className="text-yellow-400 p-1 mt-8 inline-block cursor-pointer hover:text-yellow-200" onClick={nextBatSwitch}>NEXT</p>
          </div>
        </>
      }
      {barSwitch === 2 &&
        <>
          <p className="font-extrabold font-sans text-5xl text-center text-yellow-400 leading-none pt-16 mb-12 cursor-pointer">REBELLION</p>
          <p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider mb-12">story telling paragraph story telling paragraphstory telling paragraphstory telling paragraphstory telling paragraph</p>
          <p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider mb-12">story telling paragraph story telling paragraphstory telling paragraphstory telling paragraphstory telling paragraph</p>
          <div className="flex justify-center items-center">
            <img src={Galleon3} alt="Galleon3" />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-yellow-400 p-1 mt-8 inline-block cursor-pointer hover:text-yellow-200 mr-4" onClick={prevBatSwitch}>PREV</p>
            <p className="bg-yellow-400 text-yellow-400 w-12 p-1 mt-8 inline-block mr-4 cursor-pointer hover:bg-yellow-200"></p>
            <p className="bg-yellow-400 text-yellow-400 w-12 p-1 mt-8 inline-block mr-4 cursor-pointer hover:bg-yellow-200"></p>
            <p className="bg-yellow-400 text-yellow-400 custom-width p-1 mt-8 inline-block mr-4 cursor-pointer hover:bg-yellow-200"></p>
          </div>
          <div className="flex justify-center items-center">
          <Link to="/mint"><button className="bg-yellow-400 text-purple-800 uppercase text-base pt-1 pb-1 pr-4 pl-4 font-bold mt-4">join the rebellion</button></Link>
          </div>
        </>
      }
    </div>
  );
}

export default StoryPage;
