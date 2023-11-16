import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import ExImage1 from "../assets/img/ex1.png";
import ExImage2 from "../assets/img/ex2.png";
import ExImage3 from "../assets/img/ex3.png";
import ExImage4 from "../assets/img/ex4.png";
import ExImage5 from "../assets/img/ex5.png";
import ExImage6 from "../assets/img/ex6.png";
import TestImage from "../assets/img/testImage.png";
import GalleonButton from './components/button';
import GoogleBtn from './components/google';
const coinBaseIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 48 48" id="coinbase"><path fill="#0052FF" d="M0 11.0769C0 4.95931 4.95931 0 11.0769 0H36.9231C43.0407 0 48 4.95931 48 11.0769V36.9231C48 43.0407 43.0407 48 36.9231 48H11.0769C4.95931 48 0 43.0407 0 36.9231V11.0769Z"></path><path fill="#fff" d="M23.9548 33C22.2558 32.9657 20.601 32.4534 19.181 31.5223C17.761 30.5911 16.6335 29.2788 15.9283 27.7365C15.2232 26.1943 14.969 24.4847 15.195 22.8047C15.4211 21.1246 16.1182 19.5424 17.2061 18.2402C18.294 16.938 19.7285 15.9687 21.3444 15.444C22.9602 14.9192 24.6918 14.8603 26.3398 15.2741C27.9878 15.6879 29.4851 16.5574 30.6594 17.7827C31.8337 19.008 32.6372 20.5392 32.9774 22.2H42C41.5371 17.6053 39.3215 13.3637 35.8114 10.3527C32.3014 7.34165 27.7655 5.79141 23.1418 6.02259C18.5181 6.25377 14.1604 8.2487 10.9698 11.5948C7.77927 14.9409 6 19.3821 6 24C6 28.6179 7.77927 33.0591 10.9698 36.4052C14.1604 39.7513 18.5181 41.7462 23.1418 41.9774C27.7655 42.2086 32.3014 40.6584 35.8114 37.6473C39.3215 34.6363 41.5371 30.3947 42 25.8H32.9774C32.9774 29.4 27.5638 33 23.9548 33Z"></path></svg>;
const metaMaskIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 50 48" id="metamask"><path fill="#E2761B" stroke="#E2761B" stroke-linecap="round" stroke-linejoin="round" d="M46.6094 2L27.88 15.9106L31.3435 7.70353L46.6094 2Z"></path><path fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" d="M3.37177 2L21.9506 16.0424 18.6565 7.70353 3.37177 2zM39.8706 34.2447L34.8824 41.887 45.5553 44.8235 48.6235 34.4141 39.8706 34.2447zM1.39529 34.4141L4.44471 44.8235 15.1176 41.887 10.1294 34.2447 1.39529 34.4141z"></path><path fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" d="M14.5153 21.3318L11.5412 25.8306 22.1388 26.3012 21.7624 14.913 14.5153 21.3318zM35.4659 21.3317L28.1247 14.7812 27.88 26.3012 38.4588 25.8306 35.4659 21.3317zM15.1176 41.8871L21.48 38.7812 15.9835 34.4894 15.1176 41.8871zM28.5012 38.7812L34.8824 41.8871 33.9976 34.4894 28.5012 38.7812z"></path><path fill="#D7C1B3" stroke="#D7C1B3" stroke-linecap="round" stroke-linejoin="round" d="M34.8823 41.8871L28.5012 38.7812 29.0094 42.9412 28.9529 44.6918 34.8823 41.8871zM15.1176 41.887L21.0471 44.6917 21.0094 42.9412 21.48 38.7812 15.1176 41.887z"></path><path fill="#233447" stroke="#233447" stroke-linecap="round" stroke-linejoin="round" d="M21.1412 31.7412L15.8329 30.1788 19.5788 28.4659 21.1412 31.7412zM28.84 31.7412L30.4024 28.4659 34.1671 30.1788 28.84 31.7412z"></path><path fill="#CD6116" stroke="#CD6116" stroke-linecap="round" stroke-linejoin="round" d="M15.1176 41.8872L16.0212 34.2448 10.1294 34.4143 15.1176 41.8872zM33.9788 34.2448L34.8824 41.8872 39.8706 34.4143 33.9788 34.2448zM38.4588 25.8307L27.88 26.3013 28.8588 31.7413 30.4212 28.466 34.1859 30.1789 38.4588 25.8307zM15.8329 30.1789L19.5977 28.466 21.1412 31.7413 22.1388 26.3013 11.5412 25.8307 15.8329 30.1789z"></path><path fill="#E4751F" stroke="#E4751F" stroke-linecap="round" stroke-linejoin="round" d="M11.5412 25.8306L15.9835 34.4895 15.8329 30.1789 11.5412 25.8306zM34.1859 30.1789L33.9976 34.4895 38.4588 25.8307 34.1859 30.1789zM22.1388 26.3013L21.1412 31.7413 22.3835 38.1601 22.6659 29.7083 22.1388 26.3013zM27.88 26.3013L27.3717 29.6895 27.5976 38.1601 28.8588 31.7413 27.88 26.3013z"></path><path fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round" d="M28.8588 31.7412L27.5976 38.16 28.5012 38.7812 33.9976 34.4895 34.1859 30.1789 28.8588 31.7412zM15.8329 30.1789L15.9835 34.4895 21.48 38.7812 22.3835 38.16 21.1412 31.7412 15.8329 30.1789z"></path><path fill="#C0AD9E" stroke="#C0AD9E" stroke-linecap="round" stroke-linejoin="round" d="M28.9529 44.6918L29.0094 42.9412L28.5388 42.5271H21.4424L21.0094 42.9412L21.0471 44.6918L15.1176 41.8871L17.1882 43.5812L21.3859 46.4988H28.5953L32.8118 43.5812L34.8824 41.8871L28.9529 44.6918Z"></path><path fill="#161616" stroke="#161616" stroke-linecap="round" stroke-linejoin="round" d="M28.5012 38.7812L27.5977 38.16H22.3835L21.48 38.7812L21.0094 42.9412L21.4424 42.5271H28.5388L29.0094 42.9412L28.5012 38.7812Z"></path><path fill="#763D16" stroke="#763D16" stroke-linecap="round" stroke-linejoin="round" d="M47.4 16.8141L49 9.13412 46.6094 2 28.5012 15.44 35.4659 21.3318 45.3106 24.2118 47.4941 21.6706 46.5529 20.9929 48.0588 19.6188 46.8918 18.7153 48.3976 17.5671 47.4 16.8141zM1 9.13412L2.6 16.8141 1.58353 17.5671 3.08941 18.7153 1.94118 19.6188 3.44706 20.9929 2.50588 21.6706 4.67059 24.2118 14.5153 21.3318 21.48 15.44 3.37177 2 1 9.13412z"></path><path fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round" d="M45.3106 24.2118L35.4659 21.3318 38.4588 25.8306 33.9977 34.4894 39.8706 34.4141H48.6235L45.3106 24.2118zM14.5153 21.3318L4.6706 24.2118 1.39531 34.4141H10.1294L15.9835 34.4894 11.5412 25.8306 14.5153 21.3318zM27.88 26.3011L28.5012 15.44 31.3623 7.70349H18.6565L21.48 15.44 22.1388 26.3011 22.3647 29.727 22.3835 38.16H27.5976L27.6353 29.727 27.88 26.3011z"></path></svg>
require("dotenv").config();
// import { Link } from 'react-router-dom';
console.log("SITE KEY:::", process.env.REACT_APP_SITE_KEY)
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
	const recaptchaRef = useRef(null);
	const [walletCon, setWalletCon] = useState(false);
	const [modalSign, setModalSign] = useState(false);

	const handleLoginSuccess = (credentialResponse) => {
		// Redirect to another page after successful login
		console.log(credentialResponse);
	};

	const handleLoginFailure = () => {
		console.log('Login Failed');
	};

	const popUpModal = () => {
		setshowExample(!showExample)
	}
	const modalReCAPTCHA = async (event) => {
		setShowReCaptcha(!showReCaptcha)
	}
	async function generateImage(event) {
		setImageGen(!imageGen)
		setShowReCaptcha(!showReCaptcha)
		setValue(gender + " " + style + " " + tech + " " + ethnicity + " " + role)
		event.preventDefault();
		const captchaValue = recaptchaRef.current.getValue();
		if (!captchaValue) {
			alert("Please verify the reCAPTCHA!");
		} else {
			const res = await fetch("http://localhost:8000/verify", {
				method: "POST",
				body: JSON.stringify({ captchaValue }),
				headers: {
					"content-type": "application/json",
				},
			});
			const data = await res.json();
			if (data.success) {
				// make form submission
				alert("Form submission successful!");
			} else {
				alert("reCAPTCHA validation failed!");
			}
		}
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
		setWalletCon(true)
		setModalSign(true)
	};

	const userConnect = () => {
		setModalSign(false)
	}

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
							{walletCon &&
								(<p onClick={backMint} className="text-purple-300 uppercase text-base pt-2 pb-2 pr-4 pl-4 font-bold mt-4 cursor-pointer">back</p>)
							}
							<button
								// disabled={!loadingTxt}
								onClick={mintImage}
								className={walletCon
									? "bg-yellow-400 text-purple-800 uppercase text-base pt-2 pb-2 pr-4 pl-4 font-bold mt-4 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400"
									: "bg-purple-300 text-purple-800 uppercase text-base pt-2 pb-2 pr-4 pl-4 font-bold mt-4 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400"
								}
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
						<div className="justify-center items-center flex">
							<ReCAPTCHA
								// onClick={generateImage}
								ref={recaptchaRef}
								// size="invisible"
								// sitekey="6Lfe6QkpAAAAAE6Cx-eeH2B_Fx1DW9c9VhdZReiV"
								sitekey={process.env.REACT_APP_SITE_KEY}
							/>
						</div>
					</div>
				</div>
			}
			{modalSign === true &&
				<div className="fixed inset-0 flex items-center justify-center">
					<div className="p-6 bg-black shadow-md pb-8 pt-8 relative">
						<button onClick={userConnect} className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 rounded-full text-yellow-400 hover:text-yellow-200 focus:outline-none">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						{/* <Link to="/utility"><button className="justify-center bg-purple-800 text-yellow-400 text-base pt-1 pb-1 pr-16 pl-16 mt-2 mr-1 cursor-pointer hover:bg-yellow-400 hover:text-purple-800 focus:outline-none focus:bg-yellow-400 focus:text-purple-800">go to utilities(test)</button></Link> */}
						<div className="items-center justify-center">
							<GoogleOAuthProvider clientId="699832265910-bjs18o5o7kc13ei2463m58iq4qd6vri9.apps.googleusercontent.com">
								<GoogleBtn
								/>
							</GoogleOAuthProvider>
						</div>
						<div className="flex items-center justify-center mt-4 mb-4">
							<div className="border-t border-gray-600 w-1/2"></div>
							<div className="px-2 font-mono text-base font-normal text-gray-600">OR</div>
							<div className="border-t border-gray-600 w-1/2"></div>
						</div>
						<div className="flex items-center justify-center">
							<input placeholder='Enter your email address' className="pl-2 custom-input-email focus:outline-none border-gray-600 bg-black focus:bg-black text-left text-gray-600 font-mono font-normal text-base"></input>
						</div>
						<div className="flex text-base items-center justify-center pt-4">
							<GalleonButton
								btnName="Continue"
								bgColor="bg-blue-500"
							/>
						</div>
						<div className="flex items-center justify-center mt-4 mb-4">
							<div className="border-t border-gray-600 w-1/2"></div>
							<div className="px-2 font-mono text-base font-normal text-gray-600">OR</div>
							<div className="border-t border-gray-600 w-1/2"></div>
						</div>
						<div className="flex text-sm items-center justify-center pt-4">
							<GalleonButton
							  addIcon={coinBaseIcon}
							  addIcon1={metaMaskIcon}
								btnName="Connect a wallet"
								bgColor="bg-black"
							/>
						</div>
						<div className="flex text-sm items-center justify-center pt-4">
							<GalleonButton
								btnName="Continue as Guest"
								bgColor="bg-transparent"
							/>
						</div>
						
					</div>
				</div>
			}
		</div>
	);
}

export default MintPage;
