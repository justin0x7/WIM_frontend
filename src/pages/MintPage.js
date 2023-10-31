import React, { useState } from 'react';
import ExImage1 from "../assets/img/ex1.png"
import ExImage2 from "../assets/img/ex2.png"
import ExImage3 from "../assets/img/ex3.png"
import ExImage4 from "../assets/img/ex4.png"
import ExImage5 from "../assets/img/ex5.png"
import ExImage6 from "../assets/img/ex6.png"
import ReCAPTCHA from "react-google-recaptcha";

const imagePaths = [
	ExImage1,
	ExImage2,
	ExImage3,
	ExImage4,
	ExImage5,
	ExImage6
];

const imageList = [];
for (let i = 0; i < imagePaths.length; i += 2) {
	const imageRow = (
		<div className="flex" key={i}>
			<img src={imagePaths[i]} alt={`Image ${i + 1}`} className="p-1" />
			{i + 1 < imagePaths.length && (
				<img src={imagePaths[i + 1]} alt={`Image ${i + 2}`} className="p-1" />
			)}
		</div>
	);
	imageList.push(imageRow);
}


function MintPage() {
	const [showExample, setshowExample] = useState(true);
	const [showReCaptcha, setShowReCaptcha] = useState(true);
	const popUpModal = () => {
		setshowExample(!showExample)
	}
	const modalReCAPTCHA = () => {
		setShowReCaptcha(!showReCaptcha)
	}
	return (
		<div className="pl-6 pr-6">
			<p className="font-extrabold font-sans text-5xl text-center text-yellow-400 leading-none pt-16 mb-12 cursor-pointer">MINT</p>
			<p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider">craft your own rebel character and mint it as a unique profile picture NFT</p>
			<p className="text-center text-purple-100 text-xs cursor-pointer hover:text-gray-500 mb-4" onClick={popUpModal}>view example</p>
			<p className="text-center text-purple-100 text-xs cursor-pointer hover:text-gray-500 pr-64 mr-12">gender</p>
			<div className="flex flex-col justify-center items-center">
				<div className='flex'>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-10 pl-10 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">male</button>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-8 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">female</button>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-4 pl-4 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">androgyne</button>
				</div>
			</div>
			<p className="text-center text-purple-100 text-xs cursor-pointer hover:text-gray-500 mt-4 pr-64 mr-16 ml-1">style</p>
			<div className="flex flex-col justify-center items-center">
				<div className='flex'>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">cyber</button>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">pirate</button>
				</div>
			</div>
			<p className="text-center text-purple-100 text-xs cursor-pointer hover:text-gray-500 mt-4 pr-56 mr-24 ml-1">tech</p>
			<div className="flex flex-col justify-center items-center">
				<div className='flex'>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-20 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">high</button>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">low</button>
				</div>
			</div>
			<p className="text-center text-purple-100 text-xs cursor-pointer hover:text-gray-500 mt-4 pr-64 mr-8">ethnicity</p>
			<div className="flex flex-col justify-center items-center">
				<div className='flex'>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-10 pl-10 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">asian</button>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-8 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">african</button>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-4 pl-4 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">caucasian</button>
				</div>
				<div className='flex'>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-6 pl-4 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">indigenous american</button>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-12 pl-12 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">nordic</button>
				</div>
				<div className='flex'>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-8 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">latino</button>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-8 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">polynesian</button>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-4 pl-4 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">persian</button>
				</div>
			</div>
			<p className="text-center text-purple-100 text-xs cursor-pointer hover:text-gray-500 mt-4 pr-64 mr-6">rebel role</p>
			<div className="flex flex-col justify-center items-center">
				<div className='flex'>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-10 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">transmissions</button>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">scout</button>
				</div>
				<div className='flex'>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-12 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">hacker</button>
					<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">sapper</button>
				</div>
				<button className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-10 pl-10 mt-2 mr-32 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">financial technician</button>
			</div>
			<div className="flex justify-center items-center mt-4">
				<p className="shadow-custom flex pl-20 pr-20 pb-4">
					<p className="text-purple-300 uppercase text-base pt-2 pb-2 pr-4 pl-4 font-bold mt-4">random</p>
					<button onClick={modalReCAPTCHA} className="bg-purple-300 text-purple-800 uppercase text-base pt-2 pb-2 pr-4 pl-4 font-bold mt-4 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400">generate</button>
				</p>
			</div>
			{showExample === false &&
				<div class="fixed inset-0 flex items-center justify-center">
					<div class="bg-purple-900 p-6 shadow-md pb-8 pt-8 relative">
						<button onClick={popUpModal} class="absolute top-0 right-0 flex items-center justify-center w-8 h-8 rounded-full text-yellow-400 hover:text-yellow-200 focus:outline-none">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						{imageList}
					</div>
				</div>
			}
			{showReCaptcha === false &&
				<div class="fixed inset-0 flex items-center justify-center">
					<div class="bg-purple-900 p-6 shadow-md pb-8 pt-8 relative">
						<button onClick={modalReCAPTCHA} class="absolute top-0 right-0 flex items-center justify-center w-8 h-8 rounded-full text-yellow-400 hover:text-yellow-200 focus:outline-none">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						<p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider">bip bip boop?</p>
						<p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider">are you an agent trying to penetrate our system?!</p>

					</div>
				</div>
			}
		</div>
	);
}

export default MintPage;
