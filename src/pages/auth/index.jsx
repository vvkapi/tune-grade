import {Box, Button, Flex} from '@chakra-ui/react';
import {useEffect, useState} from "react";

export const Auth = () => {
    const CLIENT_ID = '98f249abe07f4856918d1a817cd84254'
    const REDIRECT_URI = 'http://localhost:5173/auth'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'
    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        console.log('Hash:', hash);
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)
    }, [])

    const handleLogin = () => {
        window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    };
    const handleLogout = () => {
        setToken('')
        window.localStorage.removeItem('token')
    };
    return (
        <Flex direction="column" align="center" justify="center" height="80vh">
            <Box fontSize="30px" marginBottom="10">
                {token ? 'You are already logged In!' : 'Welcome! Login to Spotify below!'}
            </Box>
            {token ? (
                <Button size="lg" colorScheme="red" onClick={handleLogout}>
                    Logout
                </Button>
            ) : (
                <Button size="lg" colorScheme="green" onClick={handleLogin}>
                    Login
                </Button>
            )}
        </Flex>
    );
};
