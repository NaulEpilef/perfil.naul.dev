'use client'
import Main from "@/components/Main";
import ButtonGenius from "@/components/jogos/genius/ButtonGenius";
import { useState } from "react";

const GeniusGame = () => {
	const [defaultSize] = useState<string>('h-48 w-48');

	return (
		<Main>
			<div className="text-5xl">Genius</div>
			<div className="grid grid-cols-2">
				<ButtonGenius color={'bg-red-500 hover:bg-red-400'} />
				<ButtonGenius color={'bg-blue-500 hover:bg-blue-400'} />
				<ButtonGenius color={'bg-green-500 hover:bg-green-400'} />
				<ButtonGenius color={'bg-yellow-500 hover:bg-yellow-400'} />
				{/* <button id='redButton'    className={`flex justify-center items-center ${defaultSize} bg-red-500 hover:bg-red-400`}>
					<div className="min-h-full min-w-full rounded-full border-8 border-white border-opacity-30 animate-buttonGenius"></div>
				</button>
				<button id='blueButton'   className={`flex justify-center items-center ${defaultSize} bg-blue-500 hover:bg-blue-400`}>
					<div className="min-h-full min-w-full rounded-full border-8 border-white border-opacity-30 animate-buttonGenius"></div>
				</button>
				<button id='greenButton'  className={`flex justify-center items-center ${defaultSize} bg-green-500 hover:bg-green-400`}>
					<div className="min-h-full min-w-full rounded-full border-8 border-white border-opacity-30 animate-buttonGenius"></div>
				</button>
				<button id='yellowButton' className={`flex justify-center items-center ${defaultSize} bg-yellow-500 hover:bg-yellow-400`}>
					<div className="min-h-full min-w-full rounded-full border-8 border-white border-opacity-30 animate-buttonGenius"></div>
				</button> */}
			</div>
		</Main>
	);
}

export default GeniusGame;