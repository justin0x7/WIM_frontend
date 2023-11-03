import React from 'react';
import homeLogo from "../assets/img/homeLogo.png"
import { Link } from 'react-router-dom';

const HomePage = () => (
  <>
    <img src={homeLogo} className="w-24 h-24 mb-40 cursor-pointer" alt="HomeLogo" />
    <Link to="/mint"><p className="font-normal text-4xl text-center text-yellow-400 leading-none mb-6 cursor-pointer hover:text-yellow-200">NFT mint</p></Link>
    <Link to="/about"><p className="font-normal text-4xl text-center text-yellow-400 leading-none mb-6 cursor-pointer hover:text-yellow-200">about</p></Link>
    <Link to="/demo"><p className="font-normal text-4xl text-center text-yellow-400 leading-none mb-6 cursor-pointer hover:text-yellow-200">protocol demo</p></Link>
    <Link to="/whitepaper"><p className="font-normal text-4xl text-center text-yellow-400 leading-none mb-6 cursor-pointer hover:text-yellow-200">whitepaper</p></Link>
    <Link to="/blog"><p className="font-normal text-4xl text-center text-yellow-400 leading-none mb-6 cursor-pointer hover:text-yellow-200">blog</p></Link>
    <Link to="/contact"><p className="font-normal text-4xl text-center text-yellow-400 leading-none mb-6 cursor-pointer hover:text-yellow-200">contact</p></Link>

    <div className="text-center">
      <p className="font-light text-center text-2xl pt-40 text-purple-100 inline-block">built by</p>
      {" "}
      <p className="font-light text-center text-2xl  text-purple-100 underline cursor-pointer hover:text-gray-500 inline-block">web3 island makers</p>
    </div>
  </>
);

export default HomePage;
