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
				<ButtonGenius id='redButton'    color={'bg-red-500 hover:bg-red-400'} />
				<ButtonGenius id='blueButton'   color={'bg-blue-500 hover:bg-blue-400'} />
				<ButtonGenius id='greenButton'  color={'bg-green-500 hover:bg-green-400'} />
				<ButtonGenius id='yellowButton' color={'bg-yellow-500 hover:bg-yellow-400'} />
			</div>
		</Main>
	);
}

export default GeniusGame;