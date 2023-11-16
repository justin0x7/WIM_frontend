import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactPage() {
	const [transNFT, setTransNFT] = useState(true);


	const ClickTransNFT = () => {
		setTransNFT(!transNFT)
	}


	return (
		<div className="justify-center items-center flex flex-col">
			<p className="font-extrabold font-sans text-5xl text-center text-yellow-400 leading-none pt-12 mb-12 cursor-pointer">CONTACT</p>
			<p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider mb-12 pr-2 pl-2">give us at least one way to get in contact with you rebel!</p>
			<div className="">
				<p className="text-left text-purple-300 font-mono font-normal text-xs">telegram</p>
				<input placeholder='@TelegramUsername' className="custom-input-width focus:outline-none focus:bg-indigo-800 text-green-800 bg-indigo-900 font-mono font-normal text-base pl-4"></input>
			</div>
			<div className="">
				<p className="text-left text-purple-300 font-mono font-normal text-xs">email</p>
				<input placeholder='your@email.com' className="custom-input-width focus:outline-none focus:bg-indigo-800 text-left text-green-800 bg-indigo-900 font-mono font-normal text-base pl-4"></input>
			</div>
			<div className="">
				<p className="text-left text-purple-300 font-mono font-normal text-xs">discord</p>
				<input placeholder='@DiscorUsername' className="custom-input-width focus:outline-none focus:bg-indigo-800 text-left text-green-800 bg-indigo-900 font-mono font-normal text-base pl-4"></input>
			</div>
			<div className="">
				<p className="text-left text-purple-300 font-mono font-normal text-xs">phone number</p>
				<input placeholder='+XX 123 456 789' className="custom-input-width focus:outline-none focus:bg-indigo-800 text-left text-green-800 bg-indigo-900 font-mono font-normal text-base pl-4"></input>
			</div>
			<p className="text-center font-mono text-base font-normal text-yellow-400 leading-6 tracking-wider mb-12 pr-2 pl-2 mt-6">no spam, we will use it to inform you about the utilities you selected.</p>

			<div className="justify-center text-center  p-4 pb-0">
				<div className="flex text-center justify-center items-center">
				  <Link to="/utility"><p className="uppercase text-purple-300 text-base font-bold pr-2 hover:text-yellow-400 focus:outline-none focus:text-yellow-400">back</p></Link>
					<button
						onClick={transNFT ? ClickTransNFT : ""}
						className="uppercase text-purple-800 bg-purple-300 text-base font-bold p-2 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400"
					>
						next
					</button>
				</div>
			</div>
		</div>
	);
}
export default ContactPage;
