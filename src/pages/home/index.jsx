import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import {SearchBar} from "./search-bar.jsx";
import {DisplayTypeButtons} from "./display-type-button.jsx";

export const Home = () => {
    const [displayType, setDisplayType] = useState("Albums");

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
            <DisplayTypeButtons displayType={displayType} onDisplayTypeChange={handleDisplayTypeChange} />
            <SearchBar onEnterKeyPress={handleEnterKeyPress} onSearchButtonPress={handleSearchButtonPress} />
        </Flex>
    );
};
