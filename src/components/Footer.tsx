import { ReactNode } from "react";

interface IFooter {
	children: ReactNode;
}

const Footer = ({ children }: IFooter) => {
	return (
		<footer className='flex flex-row justify-around items-center h-60'>
			{children}
		</footer>
	)
}

export default Footer;