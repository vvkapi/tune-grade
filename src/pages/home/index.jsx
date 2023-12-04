import {useState} from "react";
import {
    Flex,
    Stack,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {DisplayTypeButtons} from "./display-type-button.jsx";

const DisplayType = {
    Albums: "Albums",
    Audiobooks: "Audiobooks",
    Shows: "Shows",
};

export const Home = () => {
    const [displayType, setDisplayType] = useState(DisplayType.Albums);
    const [searchInput, setSearchInput] = useState("");

    const handleDisplayTypeChange = (newDisplayType) => {
        setDisplayType(newDisplayType);
    };

    const onEnterKeyPress = async (event) => {
        if (event.key === "Enter") {
            await search();
        }
    };

    const onSearchButtonPress = async () => {
        await search();
    };

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    async function search() {
        console.log("Search for " + searchInput);
    }

    return (
        <Flex direction="column" align="center" mt={8}>
            <Flex mb={8}>
                <DisplayTypeButtons displayType={displayType} onDisplayTypeChange={handleDisplayTypeChange} />
            </Flex>
            <Stack spacing={3} direction="row" align="center">
                <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                        placeholder="Search for..."
                        value={searchInput}
                        onChange={handleInputChange}
                        onKeyPress={onEnterKeyPress}
                    />
                </InputGroup>
                <Button colorScheme="green" size="lg" onClick={() => onSearchButtonPress(searchInput)}>
                    Search
                </Button>
            </Stack>
        </Flex>
    );
};
