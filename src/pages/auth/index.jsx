import { Box, Button, Flex, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const getRandomTime = () => {
    return Math.floor(Math.random() * (1300 - 700 + 1)) + 700;
};

export const Auth = () => {
    const CLIENT_ID = '98f249abe07f4856918d1a817cd84254';
    const REDIRECT_URI = 'http://localhost:5173/auth';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const hash = window.location.hash;
        console.log('Hash:', hash);
        const savedToken = window.localStorage.getItem('token');

        if (!savedToken && hash) {
            const newToken = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];

            window.location.hash = '';
            window.localStorage.setItem('token', newToken);
            setToken(newToken);
        } else {
            setToken(savedToken);
        }

        const randomTime = getRandomTime();
        setTimeout(() => {
            setLoading(false);
        }, randomTime);
    }, []);

    const handleLogin = () => {
        setLoading(true);

        const randomTime = getRandomTime();
        setTimeout(() => {
            window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
        }, randomTime);
    };

    const handleLogout = () => {
        setLoading(true);

        const randomTime = getRandomTime();
        setTimeout(() => {
            setToken('');
            window.localStorage.removeItem('token');
            setLoading(false);
        }, randomTime);
    };

    if (loading) {
        return (
            <Flex direction="column" align="center" justify="center" height="80vh">
                <Spinner size="xl" />
                <Box fontSize="20px" marginTop="4">
                    Loading...
                </Box>
            </Flex>
        );
    }

    return (
        <Flex direction="column" align="center" justify="center" height="80vh">
            <Box fontSize="30px" marginBottom="10">
                {token ? 'You are already logged In!' : 'Welcome! Login to Spotify below!'}
            </Box>
            {token ? (
                <Button className="logout-button" size="lg" colorScheme="red" onClick={handleLogout}>
                    Logout
                </Button>
            ) : (
                <Button className="login-button" size="lg" colorScheme="green" onClick={handleLogin}>
                    Login
                </Button>
            )}
        </Flex>
    );
};
