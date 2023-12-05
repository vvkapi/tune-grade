import PropTypes from "prop-types";
import { Box, Flex, Text } from "@chakra-ui/react";

export const DisplayTypeButtons = ({ displayType, onDisplayTypeChange }) => {
    return (
        <Flex mb={8}>
            <Box
                onClick={() => onDisplayTypeChange("Albums")}
                mr={12}
                p={2}
                borderBottom={displayType === "Albums" ? "2px solid white" : "2px solid gray"}
                cursor="pointer"
                transition="background 0.2s ease-in-out"
            >
                <Text fontSize="2xl">Albums</Text>
            </Box>
            <Box
                onClick={() => onDisplayTypeChange("Artists")}
                mr={12}
                p={2}
                borderBottom={displayType === "Artists" ? "2px solid white" : "2px solid gray"}
                cursor="pointer"
                transition="background 0.2s ease-in-out"
            >
                <Text fontSize="2xl">Artists</Text>
            </Box>
            <Box
                onClick={() => onDisplayTypeChange("Podcasts")}
                mr={12}
                p={2}
                borderBottom={displayType === "Podcasts" ? "2px solid white" : "2px solid gray"}
                cursor="pointer"
                transition="background 0.2s ease-in-out"
            >
                <Text fontSize="2xl">Podcasts</Text>
            </Box>
            <Box
                onClick={() => onDisplayTypeChange("Playlists")}
                p={2}
                borderBottom={displayType === "Playlists" ? "2px solid white" : "2px solid gray"}
                cursor="pointer"
                transition="background 0.2s ease-in-out"
            >
                <Text fontSize="2xl">Playlists</Text>
            </Box>
        </Flex>
    );
};

DisplayTypeButtons.propTypes = {
    displayType: PropTypes.string.isRequired,
    onDisplayTypeChange: PropTypes.func.isRequired,
};