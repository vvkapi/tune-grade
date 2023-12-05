import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import PropTypes from 'prop-types';

const SearchInput = ({ value, onChange, onKeyPress }) => {
    return (
        <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
                placeholder="Search for an artist..."
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </InputGroup>
    );
};

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    onSearchButtonPress: PropTypes.func.isRequired,
};

export default SearchInput;