import { ReactNode } from "react";
import { MainStyled } from './styles';

interface MainInterface {
    children: ReactNode;
}

const Main = ({ children }: MainInterface) => {
    return (
        <MainStyled>
            {children}
        </MainStyled>
    )
}

export default Main;