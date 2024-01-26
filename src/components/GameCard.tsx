import React from "react";
import { IGame } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface IGameCardProps {
    game: IGame;
}

const GameCard = ({ game }: IGameCardProps) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
