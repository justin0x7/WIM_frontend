import React, { useState } from 'react';
import ExImage1 from "../assets/img/ex1.png";
import ExImage2 from "../assets/img/ex2.png";
import ExImage3 from "../assets/img/ex3.png";
import ExImage4 from "../assets/img/ex4.png";
import ExImage5 from "../assets/img/ex5.png";
import ExImage6 from "../assets/img/ex6.png";
import TestImage from "../assets/img/testImage.png";
// import ReCAPTCHA from "react-google-recaptcha";
// import { Link } from 'react-router-dom';

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
			<img src={imagePaths[i]} alt={`Images ${i + 1}`} className="p-1" />
			{i + 1 < imagePaths.length && (
				<img src={imagePaths[i + 1]} alt={`Images ${i + 2}`} className="p-1" />
			)}
		</div>
	);
	imageList.push(imageRow);
}


function MintPage() {
	const [showExample, setshowExample] = useState(true);
	const [showReCaptcha, setShowReCaptcha] = useState(true);
	const [imageGen, setImageGen] = useState(true);
	const [loadingTxt, setLoadingTxt] = useState(true);
	const [gender, setGender] = useState("");
	const [style, setStyle] = useState("");
	const [tech, setTech] = useState("");
	const [ethnicity, setEthnicity] = useState("");
	const [role, setRole] = useState("");
	const [generatedImageURL, setGeneratedImageURL] = useState(null);
	const [value, setValue] = useState("");
	const [isLoading, setIsLoading] = useState(false); // State to track loading

	const popUpModal = () => {
		setshowExample(!showExample)
	}
	const modalReCAPTCHA = () => {
		setShowReCaptcha(!showReCaptcha)
	}
	const generateImage = () => {
		setImageGen(!imageGen)
		setShowReCaptcha(!showReCaptcha)
		setValue(gender + " " + style + " " + tech + " " + ethnicity + " " + role)
	}
	console.log("PromptMessage:", value)
	// const mintImage = () => {
	// 	setLoadingTxt(false)
	// }
	const backMint = () => {
		setLoadingTxt(true)
		setImageGen(!imageGen)
	}
	const makeGender = (item) => {
		item === 0 && setGender("male")
		item === 1 && setGender("female")
		item === 2 && setGender("androgyne")
	}
	const makeStyle = (item) => {
		item === 0 && setStyle("cyber")
		item === 1 && setStyle("pirate")
	}
	const makeTech = (item) => {
		item === 0 && setTech("high")
		item === 1 && setTech("low")
	}
	const makeEthnicity = (item) => {
		item === 0 && setEthnicity("asian")
		item === 1 && setEthnicity("african")
		item === 2 && setEthnicity("caucasian")
		item === 3 && setEthnicity("indigenous american")
		item === 4 && setEthnicity("nordic")
		item === 5 && setEthnicity("latino")
		item === 6 && setEthnicity("polynesian")
		item === 7 && setEthnicity("persian")
	}
	const makeRole = (item) => {
		item === 0 && setRole("transmissions")
		item === 1 && setRole("scout")
		item === 2 && setRole("hacker")
		item === 3 && setRole("sapper")
		item === 4 && setRole("financial technician")
	}
	console.log("GENDER:", gender)
	console.log("STYLE:", style)
	console.log("TECH:", tech)
	console.log("ETHNICITY:", ethnicity)
	console.log("ROLE:", role)

	//---------------------------------------------------------
	

	// const getRandomLoadingMessage = () => {
	// 	const randomIndex = Math.floor(Math.random() * loadingMessages.length);
	// 	return loadingMessages[randomIndex];
	// };

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const options = {
		method: 'POST',
		headers: {
			accept: 'application/json',
			'content-type': 'application/json',
			authorization: 'Bearer 00e56c5a-707a-47f7-8795-a0de4fb80a4a'
		},
		body: JSON.stringify({
			height: 1024,
			//   prompt: 'selfie picture style, angry and dark futuristic cyberpirate, carribean beach, pink violet rosa venom green neonlights, at moonlight night, tropical carribean island, ultra detailed, photorealistic, professional illumination, 8k textures, fine tune, mantain proportions, masterpiece, cyberpunk pirate style, realistic textures, unreal 5 rendered, raytraced,',
			prompt: value,
			width: 768,
			controlNet: false,
			expandedDomain: true,
			guidance_scale: 7,
			highContrast: true,
			highResolution: false,
			alchemy: true,
			contrastRatio: 1,
			nsfw: false,
			photoReal: true,
			presetStyle: 'CREATIVE',
			num_images: 1,
			promptMagic: true,
			promptMagicVersion: 'v3',
			public: false,
			sd_version: 'v2'
		})
	};

	const fetchImgURLs = async (generationID) => {
		for (let attempt = 1; attempt <= 15; attempt++) { // Attempt up to 10 times
			console.log(`Attempt ${attempt}: Fetching img URL...`);
			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					authorization: 'Bearer 6ecef0ad-8b8e-45b2-987d-f552f53275a8'
				}
			};

			try {
				const response = await fetch(`https://cloud.leonardo.ai/api/rest/v1/generations/${generationID}`, options);
				const responseData = await response.json();

				if (response.status === 200) {
					if (responseData.generations_by_pk.generated_images.length === 0) {
					} else {
						return responseData.generations_by_pk.generated_images;
					}
				} else {
					console.log(`Attempt ${attempt}: Image retrieval failed with status ${response.status}`);
				}
			} catch (error) {
				console.error('Error fetching image:', error);
			}

			await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds before retrying
		}

		console.error('Image retrieval failed after 10 attempts');
		return null;
	};

	const mintImage = async () => {
		setLoadingTxt(false)
		setIsLoading(true); // Set loading state to true

		try {
			const response = await fetch('https://cloud.leonardo.ai/api/rest/v1/generations', options);
			const responseData = await response.json();

			if (response.status === 200 && responseData) {

				// Extract the image URL from the response
				const generationID = responseData.sdGenerationJob.generationId;

				const imageUrls = await fetchImgURLs(generationID);

				if (imageUrls && imageUrls.length > 0) {
					setGeneratedImageURL(imageUrls[0].url);
				} else {
					console.error('Error fetching image URLs:', imageUrls);
				}
			} else {
				console.error('Error generating image:', responseData);
			}
		} catch (error) {
			console.error('Error fetching image:', error);
		} finally {
			setIsLoading(false); // Set loading state to false when done
		}
	};

	// useEffect(() => {
	// 	const loadingMessageInterval = setInterval(() => {
	// 		setLoadingMessage(getRandomLoadingMessage());
	// 	}, 3000);

	// 	return () => {
	// 		clearInterval(loadingMessageInterval);
	// 	};
	// }, []);
	//---------------------------------------------------------

	return (
		<div className="justify-center text-center">
			<p className="font-extrabold font-sans text-5xl text-center text-yellow-400 leading-none pt-16 mb-12 cursor-pointer">MINT</p>
			<p className="pl-6 pr-6 text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider">craft your own rebel character and mint it as a unique profile picture NFT</p>
			<p className="text-center text-purple-100 text-xs cursor-pointer hover:text-gray-500 mb-4" onClick={popUpModal}>view example</p>

			{imageGen &&
				<>
					<p className="text-center text-purple-100 text-xs cursor-pointer hover:text-gray-500 custom-gender">gender</p>
					<div className="flex flex-col justify-center items-center">
						<div className='flex'>
							{gender === "male" ? (
								<button onClick={() => makeGender(0)} className="bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-10 pl-10 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">male</button>
							) : (
								<button onClick={() => makeGender(0)} className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-10 pl-10 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">male</button>
							)}
							{gender === "female" ? (
								<button onClick={() => makeGender(1)} className="bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-8 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">female</button>
							) : (
								<button onClick={() => makeGender(1)} className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-8 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">female</button>
							)}
							{gender === "androgyne" ? (
								<button onClick={() => makeGender(2)} className="bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-4 pl-4 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">androgyne</button>
							) : (
								<button onClick={() => makeGender(2)} className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-4 pl-4 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">androgyne</button>
							)}
						</div>
					</div>
					<p className="text-center text-purple-100 text-xs cursor-pointer hover:text-gray-500 mt-4 custom-style">style</p>
					<div className="flex flex-col justify-center items-center">
						<div className='flex'>
							{style === "cyber" ? (
								<button onClick={() => makeStyle(0)} className="bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">cyber</button>
							) : (
								<button onClick={() => makeStyle(0)} className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">cyber</button>
							)}
							{style === "pirate" ? (
								<button onClick={() => makeStyle(1)} className="bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">pirate</button>
							) : (
								<button onClick={() => makeStyle(1)} className="bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">pirate</button>
							)}
						</div>
					</div>
					<p className="text-center text-purple-100 text-xs cursor-pointer hover:text-gray-500 mt-4 custom-tech">tech</p>
					<div className="flex flex-col justify-center items-center">
						<div className='flex'>
							<button
								onClick={() => makeTech(0)}
								className={tech === "high"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-20 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-20 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								high
							</button>
							<button
								onClick={() => makeTech(1)}
								className={tech === "low"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								low
							</button>
						</div>
					</div>
					<p className="text-center text-purple-100 text-xs cursor-pointer hover:text-gray-500 mt-4 custom-ethnicity">ethnicity</p>
					<div className="flex flex-col justify-center items-center">
						<div className='flex'>
							<button
								onClick={() => makeEthnicity(0)}
								className={ethnicity === "asian"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-10 pl-10 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-10 pl-10 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								asian
							</button>
							<button
								onClick={() => makeEthnicity(1)}
								className={ethnicity === "african"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-8 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-8 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								african
							</button>
							<button
								onClick={() => makeEthnicity(2)}
								className={ethnicity === "caucasian"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-4 pl-4 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-4 pl-4 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								caucasian
							</button>
						</div>
						<div className='flex'>
							<button
								onClick={() => makeEthnicity(3)}
								className={ethnicity === "indigenous american"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 custom-indegen mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 custom-indegen mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								indigenous american
							</button>
							<button
								onClick={() => makeEthnicity(4)}
								className={ethnicity === "nordic"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-12 pl-12 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-12 pl-12 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								nordic
							</button>
						</div>
						<div className='flex'>
							<button
								onClick={() => makeEthnicity(5)}
								className={ethnicity === "latino"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-8 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-8 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								latino
							</button>
							<button
								onClick={() => makeEthnicity(6)}
								className={ethnicity === "polynesian"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-8 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-8 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								polynesian
							</button>
							<button
								onClick={() => makeEthnicity(7)}
								className={ethnicity === "persian"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-4 pl-4 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-4 pl-4 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								persian
							</button>
						</div>
					</div>
					<p className=" text-purple-100 text-xs cursor-pointer custom-rebel hover:text-gray-500 mt-4 ">rebel role</p>
					<div className="flex flex-col justify-center items-center">
						<div className='flex'>
							<button
								onClick={() => makeRole(0)}
								className={role === "transmissions"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-10 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-10 pl-8 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								transmissions
							</button>
							<button
								onClick={() => makeRole(1)}
								className={role === "scout"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								scout
							</button>
						</div>
						<div className='flex'>
							<button
								onClick={() => makeRole(2)}
								className={role === "hacker"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-16 pl-12 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-12 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								hacker
							</button>
							<button
								onClick={() => makeRole(3)}
								className={role === "sapper"
									? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
									: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								}>
								sapper
							</button>
						</div>
						<button
							onClick={() => makeRole(4)}
							className={role === "financial technician"
								? `" bg-yellow-400 text-purple-800 text-base pt-1 pb-1 pr-10 pl-10 mt-2 custom-fintech cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
								: `" bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-10 pl-10 mt-2 custom-fintech cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800"`
							}>
							financial technician
						</button>
					</div>
					<div className="flex justify-center items-center mt-4">
						<div className="shadow-custom flex pb-4 container items-center justify-center">
							<p className="text-purple-300 uppercase text-base pt-2 pb-2 pr-4 pl-4 font-bold mt-4">random</p>
							<button onClick={modalReCAPTCHA} className="bg-purple-300 text-purple-800 uppercase text-base pt-2 pb-2 pr-4 pl-4 font-bold mt-4 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400">generate</button>
						</div>
					</div>
				</>
			}
			{!imageGen &&
				<>
					<div className="flex justify-center items-center mt-4">
						<div className="bg-indigo-900 text-sm custom-box text-yellow-400 text-center ">
							{!loadingTxt ? (
								isLoading ? (
									<p className="pt-32">
									contacting blackbeard...
									</p>
								) : (
									<img src={generatedImageURL || TestImage} alt="NFT" />
								)
							) : (
								<></>
							)}
						</div>
					</div>
					<div className="flex justify-center items-center mt-56">
						<div className="shadow-custom flex pb-4 container justify-center">
							{!loadingTxt &&
								(<p onClick={backMint} className="text-purple-300 uppercase text-base pt-2 pb-2 pr-4 pl-4 font-bold mt-4 cursor-pointer">back</p>)
							}
							<button
								onClick={mintImage}
								className="bg-purple-300 text-purple-800 uppercase text-base pt-2 pb-2 pr-4 pl-4 font-bold mt-4 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400"
							>
								mint
							</button>
						</div>
					</div>
				</>
			}

			{showExample === false &&
				<div className="fixed inset-0 flex items-center justify-center">
					<div className="bg-purple-900 p-6 shadow-md pb-8 pt-8 relative">
						<button onClick={popUpModal} className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 rounded-full text-yellow-400 hover:text-yellow-200 focus:outline-none">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						{imageList}
					</div>
				</div>
			}
			{showReCaptcha === false &&
				<div className="fixed inset-0 flex items-center justify-center">
					<div className="bg-purple-900 p-6 shadow-md pb-8 pt-8 relative">
						<button onClick={modalReCAPTCHA} className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 rounded-full text-yellow-400 hover:text-yellow-200 focus:outline-none">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						<p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider">bip bip boop?</p>
						<p className="pr-6 pl-6 text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider">are you an agent trying to penetrate our system?!</p>
						<button onClick={generateImage} className="justify-center bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">reCaptcha(test)</button>
					</div>
				</div>
			}
		</div>
	);
}

export default MintPage;
