import {useState} from "react";
import {
    Flex,
    Stack,
    InputGroup,
    InputLeftElement,
    Input,
    Button, Box, Text, Image, SimpleGrid
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

    const [albums, setAlbums] = useState("");

    const token = localStorage.getItem('token');

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
        // Get request using search to get teh Artist ID
        const searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token //TODO: More safe + expired
            }
        };
        const artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
            .then(response => response.json())
            .then(data => { return data.artists.items[0].id });

        // Get request with Artist ID grab all the albums from that artist
        await fetch ('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=PL&limit=50', searchParameters)
            .then(response => response.json())
            .then(data => {
                setAlbums(data.items);
            });

        // Display those albums to the user
    }
    return (
        <Flex direction="column" align="center" mt={8} bg="#1f1f1f" minHeight="100vh" color="white">
            <Flex mb={8}>
                <DisplayTypeButtons displayType={displayType} onDisplayTypeChange={handleDisplayTypeChange} />
            </Flex>
            <Stack spacing={3} direction="row" align="center">
                <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                        placeholder="Search for an artist..."
                        value={searchInput}
                        onChange={handleInputChange}
                        onKeyPress={onEnterKeyPress}
                    />
                </InputGroup>
                <Button colorScheme="green" size="lg" onClick={() => onSearchButtonPress(searchInput)}>
                    Search
                </Button>
            </Stack>
            <Box mt={8} textAlign="center" bg="#1f1f1f" color="white" overflowX="auto">
                <Text fontSize="xl" fontWeight="bold" mb={4}>Albums:</Text>
                <Flex flexWrap="wrap" justifyContent="center">
                    {albums && albums.map(album => (
                        <Box key={album.id} textAlign="center" mx={2} mb={4} maxW="200px">
                            <Image src={album.images[0].url} alt={album.name} boxSize="150px" mx="auto" />
                            <Text mt={2} fontSize="sm" fontWeight="bold" isTruncated>{album.name}</Text>
                        </Box>
                    ))}
                </Flex>
            </Box>

        </Flex>
    );
};
