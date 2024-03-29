import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IPlatform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface IPlatformIconListProps {
    platforms: IPlatform[];
}

const PlatformIconList = ({ platforms }: IPlatformIconListProps) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    };

    return (
        <>
            <HStack marginY={1}>
                {platforms.map((platform) => (
                    <Icon as={iconMap[platform.slug]} color="gray.500" />
                ))}
            </HStack>
        </>
    );
};

export default PlatformIconList;
