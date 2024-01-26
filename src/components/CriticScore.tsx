import { Badge } from "@chakra-ui/react";

interface ICriticScoreProps {
    score: number;
}

const CriticScore = ({ score }: ICriticScoreProps) => {
    let color = score > 74 ? "green" : score > 60 ? "yellow" : "";

    return (
        <Badge
            colorScheme={color}
            fontSize="14px"
            paddingX={2}
            borderRadius="4px"
        >
            {score}
        </Badge>
    );
};

export default CriticScore;
