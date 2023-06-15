'use client'
import { useState } from "react";

interface IButtonGenius {
	color: string;
}

const ButtonGenius = ({ color }: IButtonGenius) => {
	const [activeAnimation, setActiveAnimation] = useState<boolean>(false);
	const [opacity, setOpacity] = useState<string>('border-opacity-0');

	const handleClick = () => {
		setOpacity('border-opacity-30');
		setActiveAnimation(true);

		setTimeout(() => {
			setOpacity('border-opacity-0');
			setActiveAnimation(false);
		}, 1000);
	}

	return (
		<button className={`flex justify-center items-center h-24 w-24 ${color}`} onClick={handleClick}>
			<div className={`min-h-full min-w-full rounded-full border-8 border-white ${opacity} ${activeAnimation ? 'animate-buttonGenius' : ''}`}></div>
		</button>
	);
}

export default ButtonGenius;