import { useState } from "react";
import {Flex, Stack, Button} from "@chakra-ui/react";
import { DisplayTypeButtons } from "./display-type-button.jsx";
import SearchInput from "./search-input.jsx";
import ContentDisplay from "./content-display.jsx";

const DisplayType = {
    Albums: "Albums",
    Podcasts: "Podcasts",
    Playlists: "Playlists",
};

export const Home = () => {
    const [displayType, setDisplayType] = useState(DisplayType.Albums);
    const [searchInput, setSearchInput] = useState("");

    const [content, setContent] = useState([]);

    const token = localStorage.getItem('token');

    const onEnterKeyPress = async (event) => {
        if (event.key === "Enter") {
            await search();
        }
    };

    const onSearchButtonPress = async () => {
        await search();
    };

    async function search() {
        const searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token // TODO: More safe + expired
            }
        };

        if (displayType === DisplayType.Albums) {
            await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album', searchParameters)
                .then(response => response.json())
                .then(data => {
                    setContent(data.albums.items);
                });
        } else if (displayType === DisplayType.Podcasts) {
            await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=show', searchParameters)
                .then(response => response.json())
                .then(data => {
                    setContent(data.shows.items);
                });
        } else if (displayType === DisplayType.Playlists) {
            await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=playlist', searchParameters)
                .then(response => response.json())
                .then(data => {
                    setContent(data.playlists.items);
                });
        }
    }

    return (
        <Flex direction="column" align="center" mt={8} bg="#1f1f1f" color="white">
            <Flex mb={8}>
                <DisplayTypeButtons
                    displayType={displayType}
                    onDisplayTypeChange={setDisplayType}
                />
            </Flex>
            <Stack spacing={3} direction="row" align="center">
                <SearchInput
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={onEnterKeyPress}
                    onSearchButtonPress={onSearchButtonPress}
                />
                <Button colorScheme="green" size="lg" onClick={() => onSearchButtonPress(searchInput)}>
                    Search
                </Button>
            </Stack>
            <ContentDisplay content={content} displayType={displayType}/>
        </Flex>
    );
};
