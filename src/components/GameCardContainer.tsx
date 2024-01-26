import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IGameCardContainerProps {
    children: ReactNode;
}

const GameCardContainer = ({ children }: IGameCardContainerProps) => {
    return (
        <Box width="300px" borderRadius={10} overflow="hidden">
            {children}
        </Box>
    );
};

export default GameCardContainer;
