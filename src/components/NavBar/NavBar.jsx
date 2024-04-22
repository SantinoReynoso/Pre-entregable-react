import React from 'react';
import { Flex, Box, Text, Spacer } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="gray.800"
            color="white"
        >
            <Box>
                <Text fontSize="lg" fontWeight="bold">Home</Text>
            </Box>
            <Spacer />
            <Box>
                <Text fontSize="lg" fontWeight="bold">Nosotros</Text>
            </Box>
            <Spacer />
            <Box>
                <Text fontSize="lg" fontWeight="bold">Productos</Text>
            </Box>
        </Flex>
    );
};

export default NavBar;
