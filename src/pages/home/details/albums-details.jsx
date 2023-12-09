import { useState, useEffect } from 'react';
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

const AlbumDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [album, setAlbum] = useState(null);

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const token = localStorage.getItem('token'); //TODO
        const apiUrl = `https://api.spotify.com/v1/albums/${id}`;
        const searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token // TODO: More safe + expired
            }
        };

        const fetchData = async () => {
            await fetch(apiUrl, searchParameters)
                .then(response => response.json())
                .then(data => {
                    setAlbum(data);
                });
        };

        fetchData().then(r => console.log(r));
    }, [id]);

    if (!album) {
        return <p>Loading...</p>; //TODO
    }

    return (
        <Box mt={8} bg="#1f1f1f" color="white" mx={8} mb={8} p={4} border="5px solid #2c2c2c" borderRadius="md">
            <Flex alignItems="center" justifyContent="space-between" mb={4}>
                <Button onClick={handleGoBack} leftIcon={<FaArrowLeft />}>
                    Go Back
                </Button>
            </Flex>
            <Flex>
                <Image src={album.images[0]?.url} alt={album.name} boxSize="300px" borderRadius="md" mr={4} />
                <Box>
                    <Text fontSize="xl" fontWeight="bold" mb={2}>{album.name}</Text>
                    <Text fontSize="md" fontStyle="italic" mb={2}>{album.artists[0]?.name}</Text>
                    <Text fontSize="md">Release Date: {album.release_date}</Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default AlbumDetails;
