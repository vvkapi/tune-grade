import PropTypes from 'prop-types';
import { Box, Flex, Text, Image, Grid } from "@chakra-ui/react";
import { FaStar } from 'react-icons/fa';

const AlbumsDisplay = ({ content }) => {
    // To check whether the content even exists
    if (!content || content.length === 0) {
        return null;
    }

    const bestMatchContent = content.slice(0, 1);
    const othersContent = content.slice(1);

    return (
        <Box mt={8} bg="#1f1f1f" color="white" mx={8} mb={8} p={4} border="5px solid #2c2c2c" borderRadius="md">
            {bestMatchContent.length > 0 && (
                <Flex alignItems="center" justifyContent="space-between" mb={4}>
                    <Flex alignItems="center">
                        <FaStar style={{ fontSize: '1.5em', marginRight: '0.5em' }} />
                        <Text fontSize="xl" fontWeight="bold">Best Match:</Text>
                    </Flex>
                </Flex>
            )}
            {bestMatchContent.length > 0 && (
                <Grid templateColumns="repeat(auto-fill, minmax(800px, 1fr))" gap={4} justifyContent="flex-start">
                    {bestMatchContent.map(item => (
                        <Box key={item.id} textAlign="left" p={4} border="3px solid #2c2c2c" borderRadius="md" mb={4}>
                            <Flex direction="row" alignItems="center">
                                <Image src={item.images[0]?.url} alt={item.name} boxSize="100px" borderRadius="md" mr={4} />
                                <Box>
                                    <Text fontSize="md" fontWeight="bold" isTruncated>{item.name}</Text>
                                    <Text fontSize="sm">{item.artist}</Text>
                                    <Text fontSize="sm">Release Date: {item.releaseDate}</Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </Grid>
            )}
            {othersContent.length > 0 && (
                <Box mt={8}>
                    <Text fontSize="xl" fontWeight="bold" textAlign="left" mb={4}>Others:</Text>
                    <Grid templateColumns="repeat(auto-fill, minmax(800px, 1fr))" gap={4} justifyContent="flex-start">
                        {othersContent.map(item => (
                            <Box key={item.id} textAlign="left" p={4} border="3px solid #2c2c2c" borderRadius="md" mb={4}>
                                <Flex direction="row" alignItems="center">
                                    <Image src={item.images[0]?.url} alt={item.name} boxSize="100px" borderRadius="md" mr={4} />
                                    <Box>
                                        <Text fontSize="md" fontWeight="bold" isTruncated>{item.name}</Text>
                                        <Text fontSize="sm">{item.artist}</Text>
                                        <Text fontSize="sm">Release Date: {item.releaseDate}</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            )}
        </Box>
    );
};

AlbumsDisplay.propTypes = {
    content: PropTypes.array.isRequired,
};

export default AlbumsDisplay;
