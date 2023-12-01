import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const DisplayType = {
    Albums: "Albums",
    Audiobooks: "Audiobooks",
    Shows: "Shows",
};

export const Home = () => {
    const [displayType, setDisplayType] = useState(DisplayType.Albums);

    const handleDisplayTypeChange = (newDisplayType) => {
        setDisplayType(newDisplayType);
    };

    return (
        <Flex direction="column" align="center" mt={8}>
            <Flex>
                <Box
                    onClick={() => handleDisplayTypeChange(DisplayType.Albums)}
                    mr={12}
                    p={2}
                    borderBottom={displayType === DisplayType.Albums ? "2px solid gray" : "2px solid white"}
                    cursor="pointer"
                    transition="background 0.2s ease-in-out"
                >
                    <Text fontSize="2xl">{DisplayType.Albums}</Text>
                </Box>
                <Box
                    onClick={() => handleDisplayTypeChange(DisplayType.Audiobooks)}
                    mr={12}
                    p={2}
                    borderBottom={displayType === DisplayType.Audiobooks ? "2px solid gray" : "2px solid white"}
                    cursor="pointer"
                    transition="background 0.2s ease-in-out"
                >
                    <Text fontSize="2xl">{DisplayType.Audiobooks}</Text>
                </Box>
                <Box
                    onClick={() => handleDisplayTypeChange(DisplayType.Shows)}
                    p={2}
                    borderBottom={displayType === DisplayType.Shows ? "2px solid gray" : "2px solid white"}
                    cursor="pointer"
                    transition="background 0.2s ease-in-out"
                >
                    <Text fontSize="2xl">{DisplayType.Shows}</Text>
                </Box>
            </Flex>
        </Flex>
    );
};
