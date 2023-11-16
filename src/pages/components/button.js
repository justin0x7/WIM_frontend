import React from 'react';
import './style.css'
const GalleonButton = (props) => {
	const { btnName, bgColor, addIcon, addIcon1 } = props
	return (
		<button
			className={`${bgColor} border-gray-600 font-base custom-button-style focus:outline-none flex justify-center items-center`}
		>
			<p className="pr-2">{addIcon}</p>
			<p className="pr-2">{addIcon1}</p>
			<p className="">{btnName}</p>
		</button>
	)
}

export default GalleonButton;