import { Box, Text, Image, Flex } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const ContentDisplay = ({ content, displayType }) => {
    return (
        <Box mt={8} textAlign="center" bg="#1f1f1f" color="white" mx={8} mb={8}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>{displayType}</Text>
            <Flex flexWrap="wrap" justifyContent="center">
                {content && content.map(album => (
                    <Box key={album.id} textAlign="center" mx={2} mb={4} maxW="200px">
                        <Image src={album.images[0].url} alt={album.name} boxSize="150px" mx="auto" />
                        <Text mt={2} fontSize="sm" fontWeight="bold" isTruncated>{album.name}</Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

ContentDisplay.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            images: PropTypes.arrayOf(
                PropTypes.shape({
                    url: PropTypes.string.isRequired,
                })
            ).isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
    displayType: PropTypes.string.isRequired,
};

export default ContentDisplay;