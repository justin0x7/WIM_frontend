import React from 'react';
import homeLogo from "../assets/img/homeLogo.png"

const HomePage = () => (
  <>
    <img src={homeLogo} className="w-24 h-24 mb-40 cursor-pointer" alt="HomeLogo" />
    <p className="font-normal text-4xl text-center text-yellow-400 leading-none mb-6 cursor-pointer hover:text-yellow-200">NFT mint</p>
    <p className="font-normal text-4xl text-center text-yellow-400 leading-none mb-6 cursor-pointer hover:text-yellow-200">about</p>
    <p className="font-normal text-4xl text-center text-yellow-400 leading-none mb-6 cursor-pointer hover:text-yellow-200">protocol demo</p>
    <p className="font-normal text-4xl text-center text-yellow-400 leading-none mb-6 cursor-pointer hover:text-yellow-200">whitepaper</p>
    <p className="font-normal text-4xl text-center text-yellow-400 leading-none mb-6 cursor-pointer hover:text-yellow-200">blog</p>
    <p className="font-normal text-4xl text-center text-yellow-400 leading-none mb-6 cursor-pointer hover:text-yellow-200">Contact</p>

    <p className="text-center">
      <p className="font-light text-center text-2xl pt-40 text-white inline-block">built by</p>
      {" "}
      <p className="font-light text-center text-2xl  text-white underline cursor-pointer hover:text-gray-500 inline-block">web3 island makers</p>
    </p>
  </>
);

export default HomePage;
