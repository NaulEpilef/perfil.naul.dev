'use client'
import Main from "@/components/Main";
import { useEffect, useRef, useState } from "react";

const password = () => {
	const allLettersLowerCase = "abcdefghijklmnopqrstuvwxyz";
	const allLettersUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const allNumbers = "0123456789";
	const allSpecialsCharacters = "`~^´'\"ç<>;:/?{[}]|\+=_-)(*&¨%$#@!§";

	const [canLettersLowerCase, setCanLettersLowerCase]     = useState<boolean>(true);
	const [canLettersUpperCase, setCanLettersUpperCase]     = useState<boolean>(true);
	const [canNumbers, setCanNumbers]                       = useState<boolean>(true);
	const [canSpecialsCharacters, setCanSpecialsCharacters] = useState<boolean>(true);

	const [passwordGenerated, setPasswordGenerated] = useState<string>('');

	const [amountCharacters, setAmountCharacters] = useState<number>(15);

	useEffect(() => {
		handleClick()
	}, []);

	const handleClick = () => {
		const newPass: string[] = [];

		let characters = '';

		if (canLettersLowerCase)   characters += allLettersLowerCase;
		if (canLettersUpperCase)   characters += allLettersUpperCase;
		if (canNumbers)            characters += allNumbers;
		if (canSpecialsCharacters) characters += allSpecialsCharacters;

		for (let i = 0; i < amountCharacters; i++) {
			newPass.push(characters.charAt(Math.floor(Math.random() * characters.length)));
		}

		setPasswordGenerated(newPass.join(''));
	}

	return (
		<Main>
			<div>
				<h1>Gerador de senha</h1>
				<br />
				<h1>{passwordGenerated}</h1>
				<br />
				<input type="number" value={amountCharacters} onChange={(event) => setAmountCharacters(+event.target.value)} />
				<br />
				<input type="checkbox" checked={canLettersLowerCase} onChange={() => setCanLettersLowerCase(!canLettersLowerCase)} />
				<label htmlFor="">Letras Minúsculas</label>
				<br />
				<input type="checkbox" checked={canLettersUpperCase} onChange={() => setCanLettersUpperCase(!canLettersUpperCase)} />
				<label htmlFor="">Letras Maiúsculas</label>
				<br />
				<input type="checkbox" checked={canNumbers} onChange={() => setCanNumbers(!canNumbers)} />
				<label htmlFor="">Números</label>
				<br />
				<input type="checkbox" checked={canSpecialsCharacters} onChange={() => setCanSpecialsCharacters(!canSpecialsCharacters)} />
				<label htmlFor="">Caracteres especiais</label>
				<br />
				<button onClick={() => handleClick()}>Gerar</button>
			</div>
		</Main>
	);
}

export default password;