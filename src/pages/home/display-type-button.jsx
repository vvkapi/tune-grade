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
                onClick={() => onDisplayTypeChange("Audiobooks")}
                mr={12}
                p={2}
                borderBottom={displayType === "Audiobooks" ? "2px solid white" : "2px solid gray"}
                cursor="pointer"
                transition="background 0.2s ease-in-out"
            >
                <Text fontSize="2xl">Audiobooks</Text>
            </Box>
            <Box
                onClick={() => onDisplayTypeChange("Shows")}
                p={2}
                borderBottom={displayType === "Shows" ? "2px solid white" : "2px solid gray"}
                cursor="pointer"
                transition="background 0.2s ease-in-out"
            >
                <Text fontSize="2xl">Shows</Text>
            </Box>
        </Flex>
    );
};

DisplayTypeButtons.propTypes = {
    displayType: PropTypes.string.isRequired,
    onDisplayTypeChange: PropTypes.func.isRequired,
};