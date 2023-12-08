import { Box, Text, Image, Grid, Flex } from "@chakra-ui/react";
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ContentDisplay = ({ content }) => {
    const bestMatchContent = content.slice(0, 1);
    const othersContent = content.slice(1);

    const hasBestMatch = bestMatchContent.length > 0;
    const hasOthers = othersContent.length > 0;

    // To check whether the content even exists
    const hasContent = hasBestMatch || hasOthers;

    return (
        <>
            {hasContent && (
                <Box mt={8} bg="#1f1f1f" color="white" mx={8} mb={8} p={4} border="5px solid #2c2c2c" borderRadius="md">
                    {hasBestMatch && (
                        <Flex alignItems="center" justifyContent="space-between" mb={4}>
                            <Flex alignItems="center">
                                <FaStar style={{ fontSize: '1.5em', marginRight: '0.5em' }} />
                                <Text fontSize="xl" fontWeight="bold">Best Match:</Text>
                            </Flex>
                        </Flex>
                    )}
                    {hasBestMatch && (
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
                    {hasOthers && (
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
            )}
        </>
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
            artist: PropTypes.string.isRequired,
            releaseDate: PropTypes.string.isRequired,
        })
    ),
};

export default ContentDisplay;
