import PropTypes from "prop-types";
import { Stack, InputGroup, InputLeftElement, Input, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchBar = ({ onEnterKeyPress, onSearchButtonPress }) => {
    return (
        <Stack spacing={3} direction="row" align="center">
            <InputGroup size="lg">
                <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input placeholder="Search for..." onKeyPress={onEnterKeyPress} />
            </InputGroup>
            <Button colorScheme="green" size="lg" onClick={onSearchButtonPress}>
                Search
            </Button>
        </Stack>
    );
};

SearchBar.propTypes = {
    onEnterKeyPress: PropTypes.func.isRequired,
    onSearchButtonPress: PropTypes.func.isRequired,
};
