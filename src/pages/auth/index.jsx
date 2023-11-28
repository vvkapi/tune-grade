import { Box, Button, Flex } from '@chakra-ui/react';

export const Auth = () => {
    const handleLogin = () => {
        console.log('Login button clicked!');
    };
    return (
        <Flex direction="column" align="center" justify="center" height="80vh">
            <Box fontSize="30px" marginBottom="10">
                Welcome! Login as a Guest below!
            </Box>
            <Button size='lg' colorScheme='green' onClick={handleLogin}>Login</Button>
        </Flex>
    );
};
