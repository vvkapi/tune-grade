import {Flex, Link, Text} from '@chakra-ui/react';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1rem"
            bg="#333"
            color="white"
        >
            <Flex align="center" mr={5}>
                <Text as={ReactRouterLink} to="/" fontSize="1.5rem" fontWeight="bold" textDecoration="none"
                      color="white">
                    Tune Grade
                </Text>
            </Flex>

            <Flex align="center">
                <Link as={ReactRouterLink} to="/" mr={16} textDecoration="none" fontSize="1.5rem" color="gainsboro">
                    Home
                </Link>
                <Link as={ReactRouterLink} to="/rated" mr={16} textDecoration="none" fontSize="1.5rem" color="gainsboro">
                    Rated
                </Link>
                <Link as={ReactRouterLink} to="/auth" mr={16} textDecoration="none" fontSize="1.5rem" color="gainsboro">
                    Auth
                </Link>
            </Flex>
        </Flex>
    );
};
