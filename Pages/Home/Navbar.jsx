import { Box, Flex, HStack, useColorMode, useColorModeValue, Image } from '@chakra-ui/react';
import { Link as ReachLink, useLocation } from 'react-router-dom';
import icon from './../../Assets/icon.png.jpeg';
export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const location = useLocation();
    const bgColor = '#4682B4';
    const hoverBgColor = useColorModeValue('gray.200', 'gray.700');
    const hiddenPaths = ['/login', '/sign-in', '/theme1'];
    const displayNavbar = !hiddenPaths.includes(location.pathname);
    if (!displayNavbar) {
        return null;
    }

    const linkStyle = {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '24px',
        margin: '0 12px',
        textDecoration: 'none',
    };

    const hoverStyle = {
        backgroundColor: hoverBgColor,
    };

    return (
        <Box 
            id='navbar' 
            bg={bgColor} 
            px={4} 
            boxShadow="md" 
            style={{ 
                borderBottom: '1px solid #e2e8f0', 
                position: 'fixed', 
                top: 0, 
                width: '100%', 
                zIndex: 1000,
            }}>
            <Flex 
                h={16} 
                alignItems={'center'} 
                justifyContent={'space-between'} // Align items to the left and right
                px={4} // Add padding to the right
            >
                <Image 
                    id='lotus' 
                    src={icon} 
                    alt="logo" 
                    boxSize="60px" 
                    mb={{ base: 4, md: 0 }} 
                />
                <HStack spacing={8} alignItems={'center'}>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        <ReachLink
                            px={2} py={1} rounded={'md'} _hover={hoverStyle}
                            to={'/intro'} 
                            style={linkStyle}
                        >
                            Home
                        </ReachLink>
                        
                        <ReachLink
                            px={2} py={1} rounded={'md'} _hover={hoverStyle}
                            to={'/home'}
                            style={linkStyle}
                        >
                            Resume
                        </ReachLink>
                        <ReachLink
                            px={2} py={1} rounded={'md'} _hover={hoverStyle}
                            to={'/check'} 
                            style={linkStyle}
                        >
                            ShortList
                        </ReachLink>
                        <ReachLink
                        px={2} py={1} rounded={'md'} _hover={hoverStyle}
                        to={'/up'} 
                        style={linkStyle}
                    >
                        Edit
                    </ReachLink>
                    <ReachLink
                    px={2} py={1} rounded={'md'} _hover={hoverStyle}
                    to={'/profile'} 
                    style={linkStyle}
                >
                    Profile
                </ReachLink>
               
                    <ReachLink
                            px={2} py={1} rounded={'md'} _hover={hoverStyle}
                            to={'/about'}
                            style={linkStyle}
                        >
                            AboutUs
                        </ReachLink>
                        <ReachLink
                            px={2} py={1} rounded={'md'} _hover={hoverStyle}
                            to={'/feedback'} 
                            style={linkStyle}
                        >
                            Feedback
                        </ReachLink>
                    </HStack>
                </HStack>
            </Flex>
        </Box>
    );
}
