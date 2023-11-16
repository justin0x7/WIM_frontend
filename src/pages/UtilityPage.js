import React, { useState } from 'react';
import TestImage from "../assets/img/testImage.png";
import { Link } from 'react-router-dom';

function UtilityPage() {
	const [transNFT, setTransNFT] = useState(true);
	const [checked1, setChecked1] = useState(true);
	const [checked2, setChecked2] = useState(true);
	const [checked3, setChecked3] = useState(true);
	const [checked4, setChecked4] = useState(true);
	const [checked5, setChecked5] = useState(true);


	const ClickTransNFT = () => {
		setTransNFT(!transNFT)
	}
	const ToggleCheckedBox1 = () => {
		setChecked1(!checked1)
	}
	const ToggleCheckedBox2 = () => {
		setChecked2(!checked2)
	}
	const ToggleCheckedBox3 = () => {
		setChecked3(!checked3)
	}
	const ToggleCheckedBox4 = () => {
		setChecked4(!checked4)
	}
	const ToggleCheckedBox5 = () => {
		setChecked5(!checked5)
	}

	return (
		<div className="justify-center">
			<p className="font-extrabold font-sans text-5xl text-center text-yellow-400 leading-none pt-12 mb-12 cursor-pointer">UTILITIES</p>
			<p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider mb-12 pr-2 pl-2">select the utilities you wand to include in this NFT</p>
			<div className="flex justify-between">
				<div>
					<p className="text-left text-purple-300 font-mono font-normal text-xs pl-4">$GALL drop (free)</p>
					<p className="text-left text-yellow-400 font-mono font-normal text-base pl-4">1000 $GALL dropped after purchase</p>
				</div>
				<label className="inline-flex items-center">
					<input onClick={ToggleCheckedBox1} type="button" className={
						!checked1
							? "h-4 w-4 mr-4 bg-yellow-400 border-gray-400 custom-border cursor-pointer hover:bg-yellow-400"
							: "h-4 w-4 mr-4 bg-transparent border-gray-400 custom-border cursor-pointer hover:bg-yellow-400"
					}
					/>
				</label>
			</div>
			<div className="flex justify-between">
				<div>
					<p className="text-left text-purple-300 font-mono font-normal text-xs pl-4">reward boost (free)</p>
					<p className="text-left text-yellow-400 font-mono font-normal text-base pl-4">x2 mutiplier for $GALL staking rewards </p>
				</div>
				<label className="inline-flex items-center">
					<input onClick={ToggleCheckedBox2} type="button" className={
						!checked2
							? "h-4 w-4 mr-4 bg-yellow-400 border-gray-400 custom-border cursor-pointer hover:bg-yellow-400"
							: "h-4 w-4 mr-4 bg-transparent border-gray-400 custom-border cursor-pointer hover:bg-yellow-400"
					}
					/>
				</label>
			</div>
			<div className="flex justify-between">
				<div>
					<p className="text-left text-purple-300 font-mono font-normal text-xs pl-4">alpha access (free)</p>
					<p className="text-left text-yellow-400 font-mono font-normal text-base pl-4">get access to galleon in alpha</p>
				</div>
				<label className="inline-flex items-center">
					<input onClick={ToggleCheckedBox3} type="button" className={
						!checked3
							? "h-4 w-4 mr-4 bg-yellow-400 border-gray-400 custom-border cursor-pointer hover:bg-yellow-400"
							: "h-4 w-4 mr-4 bg-transparent border-gray-400 custom-border cursor-pointer hover:bg-yellow-400"
					}
					/>
				</label>
			</div>
			<div className="flex justify-between">
				<div>
					<p className="text-left text-purple-300 font-mono font-normal text-xs pl-4">name service (free)</p>
					<p className="text-left text-yellow-400 font-mono font-normal text-base pl-4">“{`<your_name>`}.gall” for free on OpenName</p>
				</div>
				<label className="inline-flex items-center">
					<input onClick={ToggleCheckedBox4} type="button" className={
						!checked4
							? "h-4 w-4 mr-4 bg-yellow-400 border-gray-400 custom-border cursor-pointer hover:bg-yellow-400"
							: "h-4 w-4 mr-4 bg-transparent border-gray-400 custom-border cursor-pointer hover:bg-yellow-400"
					}
					/>
				</label>
			</div>
			<div className="flex justify-between">
				<div>
					<p className="text-left text-purple-300 font-mono font-normal text-xs pl-4">trading course (free)</p>
					<p className="text-left text-yellow-400 font-mono font-normal text-base pl-4">1h30 perp trading course with our galleon team</p>
				</div>
				<label className="inline-flex items-center">
					<input onClick={ToggleCheckedBox5} type="button" className={
						!checked5
							? "h-4 w-4 mr-4 bg-yellow-400 border-gray-400 custom-border cursor-pointer hover:bg-yellow-400"
							: "h-4 w-4 mr-4 bg-transparent border-gray-400 custom-border cursor-pointer hover:bg-yellow-400"
					}
					/>
				</label>
			</div>
			<div className="flex bg-purple-900 p-2 m-4 pb-0 mb-2 mt-6 mb-6">
				<div className="w-1/2">
					<div className=" flex justify-center items-center">
						<img src={TestImage} className="w-36 pr-2 justify-center items-center" alt="NFT" />
					</div>
					<p className="text-center text-purple-300 font-mono font-normal text-xs pt-1">N°34/200</p>

				</div>
				<div className="w-1/2">
					<p className="text-left text-purple-300 font-mono font-normal text-xs">collection - ERC1155</p>
					<p className="text-left text-yellow-400 font-mono font-normal text-xs">galleon alpha genesis</p>
					<p className="text-left text-purple-300 font-mono font-normal text-xs">total collection supply</p>
					<p className="text-left text-yellow-400 font-mono font-normal text-xs">200</p>
					<p className="text-left text-purple-300 font-mono font-normal text-xs">utilities</p>
					<p className="text-left text-yellow-400 font-mono font-normal text-xs max-w-4xl">{!checked1 && "$GALL drop"} {!checked2 && "staking multiplier"} {!checked3 && "alpha access"} {!checked4 && "name service"} {!checked5 && "trading course"}</p>
				</div>
			</div>
			<div className="justify-center text-center shadow-custom p-4 pb-0">
				<div className="flex text-center justify-center items-center">
					<Link to="/mint"><p className="uppercase text-purple-300 text-base font-bold pr-2 focus:outline-none focus:bg-yellow-400">back</p></Link>
					<Link to="/contact">
						<button
							onClick={transNFT ? ClickTransNFT : ""}
							className="uppercase text-purple-800 bg-purple-300 text-base font-bold p-2 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400"
						>
							mint - $15
						</button>
					</Link>
				</div>
				<div>
					<p className="text-center truncate text-purple-300 font-mono font-normal text-xs pt-1">the NFT will be sent at: {`0x1FfmbHfn...`}</p>
				</div>
			</div>
		</div>
	);
}
export default UtilityPage;
