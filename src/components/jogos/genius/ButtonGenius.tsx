'use client'
import { useState } from "react";

interface IButtonGenius {
	id: string;
	color: string;
}

interface IWave {
	id: number;
}

const ButtonGenius = ({ id, color }: IButtonGenius) => {
  const [waves, setWaves] = useState<IWave[]>([]);
	const [count, setCount] = useState<number>(0);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const newWave: IWave = { id: count };
		setCount(count + 1);
    setWaves([...waves, newWave]);

    setTimeout(() => {
			setWaves((prevWaves) => {
				const wavesAfterFilter = prevWaves.filter(wave => wave.id !== newWave.id);
				if (wavesAfterFilter.length == 0) setCount(0);
				return wavesAfterFilter;
			});
    }, 1000);
  };

	return (
		<button id={id} className={`flex justify-center items-center h-52 w-52 ${color}`} onClick={handleClick}>
			{waves.map((wave, index) => (
				<div
					key={index}
					className={`absolute h-52 w-52 rounded-full border-8 border-white border-opacity-30 animate-buttonGenius`}
				/>
			))}
		</button>
	);
}

export default ButtonGenius;