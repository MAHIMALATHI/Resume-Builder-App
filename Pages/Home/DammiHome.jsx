import React from 'react';
import { Box, Heading, Text, Button, Image, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import DammiNav from './DammiNav';
import './DammiHome.css'; // Import your CSS file here

const DammiHome = () => {
  return (
    <Box as="main" bg="gray.50" minHeight="100vh">
      <DammiNav />
      <Box py={10} px={5}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center">
          <Box flex="1">
            <Heading
              as="h1"
              size="2xl"
              mb={4}
              textAlign={{ base: 'center', md: 'left' }}
              fontWeight="bold"
              color="#4682B4"
            >
              Build Your Professional Resume in Minutes
            </Heading>
            <Text fontSize="lg" mb={6} textAlign={{ base: 'center', md: 'left' }} color="gray.600">
              Create a resume that stands out with our easy-to-use resume builder. Choose from a
              variety of templates, customize your resume, and download it in a few simple steps.
            </Text>
            <Stack direction="row" spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
              
              
            <Button
                            as={Link}
                            to="/login"
                            colorScheme="blue"
                            size="lg"
                            _hover={{ bg: "teal.600" }}
                          >
                            Get Started
                          </Button>
            </Stack>
          </Box>
          <Box flex="1" display="flex" justifyContent="center">
          </Box>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center" mt={10}>
          <Image
            src="https://i.pinimg.com/236x/6e/ce/22/6ece22b87984a79aad54c69fe7ab8d04.jpg"
            alt="Resume Example 1"
            borderRadius="md"
            boxShadow="lg"
            className="auto-move"
          />
          <Image
            src="https://i.pinimg.com/236x/86/02/9a/86029ab1d9cd316599dfc9aadbf0ecb6.jpg"
            alt="Resume Example 2"
            borderRadius="md"
            boxShadow="lg"
            className="auto-move"
          />
          <Image
            src="https://i.pinimg.com/236x/bd/15/9a/bd159ab215478dfc94d2b48e44e2c1ae.jpg"
            alt="Resume Example 3"
            borderRadius="md"
            boxShadow="lg"
            className="auto-move"
          />
          <Image
          src="https://i.pinimg.com/236x/f9/e2/f1/f9e2f1c38f7e15729a621667b73e2457.jpg"
          alt="Resume Example 4"
          borderRadius="md"
          boxShadow="lg"
          className="auto-move"
        />
        <Image
        src="https://i.pinimg.com/236x/f0/d0/a8/f0d0a8f990df7a6d5742b32d524ca2cf.jpg"
        alt="Resume Example 5"
        borderRadius="md"
        boxShadow="lg"
        className="auto-move"
      />
        </Stack>
      </Box>
    </Box>
    
  );
};

export default DammiHome;


//               <Button
//                 as={Link}
//                 to="/home"
//                 variant="outline"
//                 colorScheme="teal"
//                 size="lg"
//               >
//                 Explore Templates
//               </Button>
