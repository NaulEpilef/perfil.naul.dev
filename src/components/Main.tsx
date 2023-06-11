'use client'
import { ReactNode } from "react";

interface IMain {
	children: ReactNode;
}

const Main = ({ children }: IMain) => {
	return (
		<main className='flex flex-row justify-center items-center min-h-screen'>
			{children}
		</main>
	)
}

export default Main;