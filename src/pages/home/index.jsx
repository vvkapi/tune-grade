import {useState} from "react";
import {
    Box,
    Flex,
    Stack,
    Text,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

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

    const handleEnterKeyPress = (event) => {
        if (event.key === "Enter") {
            console.log("Enter key pressed! Perform your action here.");
        }
    };

    const handleSearchButtonPress = () => {
        console.log("Search button pressed! Perform your action here.");
    };

    return (
        <Flex direction="column" align="center" mt={8}>
            <Flex mb={8}>
                <Box
                    onClick={() => handleDisplayTypeChange(DisplayType.Albums)}
                    mr={12}
                    p={2}
                    borderBottom={
                        displayType === DisplayType.Albums
                            ? "2px solid white"
                            : "2px solid gray"
                    }
                    cursor="pointer"
                    transition="background 0.2s ease-in-out"
                >
                    <Text fontSize="2xl">{DisplayType.Albums}</Text>
                </Box>
                <Box
                    onClick={() => handleDisplayTypeChange(DisplayType.Audiobooks)}
                    mr={12}
                    p={2}
                    borderBottom={
                        displayType === DisplayType.Audiobooks
                            ? "2px solid white"
                            : "2px solid gray"
                    }
                    cursor="pointer"
                    transition="background 0.2s ease-in-out"
                >
                    <Text fontSize="2xl">{DisplayType.Audiobooks}</Text>
                </Box>
                <Box
                    onClick={() => handleDisplayTypeChange(DisplayType.Shows)}
                    p={2}
                    borderBottom={
                        displayType === DisplayType.Shows
                            ? "2px solid white"
                            : "2px solid gray"
                    }
                    cursor="pointer"
                    transition="background 0.2s ease-in-out"
                >
                    <Text fontSize="2xl">{DisplayType.Shows}</Text>
                </Box>
            </Flex>
            <Stack spacing={3} direction="row" align="center">
                <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.300"/>
                    </InputLeftElement>
                    <Input placeholder="Search for..." onKeyPress={handleEnterKeyPress}/>
                </InputGroup>
                <Button colorScheme="green" size="lg" onClick={handleSearchButtonPress}>
                    Search
                </Button>
            </Stack>
        </Flex>
    );
};
