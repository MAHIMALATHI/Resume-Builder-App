import React from 'react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react'; // Import Chakra UI hooks
import { Box, Flex, Stack, Button } from '@chakra-ui/react'; // Import Chakra UI components
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const DammiNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', '#4682B4');
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bg} px={4} boxShadow="md">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box fontSize="xl" fontWeight="bold" color={color}>
          <Link to="/">Resume Builder</Link>
        </Box>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Button as={Link} to="/login" bg={'#4682B4'}variant={'solid'} colorScheme={'teal'} size="sm">
              Login
            </Button>
            <Button as={Link} to="/reg" bg={'#4682B4'} variant={'solid'} colorScheme={'teal'} size="sm">
              Sign Up
            </Button>
            <Button onClick={toggleColorMode} size="sm">
              {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DammiNav;
