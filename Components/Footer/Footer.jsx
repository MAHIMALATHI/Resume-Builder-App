import { Box, chakra, Container, Stack, Text, Image, VisuallyHidden } from '@chakra-ui/react';
import { FaInstagram, FaSnapchat, FaGithub } from 'react-icons/fa';
import logo from './../../Assets/logo.png.png';
import React from 'react';
const SocialButton = ({ children, label, href, iconSize }) => {
    return (
        <chakra.button
            bg={'black'}
            rounded={'full'}
            w={10} // Increased width
            h={10} // Increased height
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            >
            <VisuallyHidden>{label}</VisuallyHidden>
            {React.cloneElement(children, { size: iconSize })} {/* Set the size of the icon */}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={'#4682B4'}
            textAlign={'center'}
            py={6}
            className='footer'
            borderTop="1px solid"
           >
            <Container 
                as={Stack}
                maxW={'6xl'}
                textAlign={'center'}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
                direction={{ base: 'column', md: 'row' }}>
                <Image src={logo} marginLeft={'20%'} alt="logo" boxSize="50px" mb={{ base: 4, md: 0 }} />
                <Text textColor={'white'} marginTop={'2%'} marginLeft={'20%'}>© 2023 Resume Builder, All rights reserved</Text>
                <Stack direction={'row'} spacing={6} >
                    <SocialButton   label={'Github'} href={'https://github.com/MAHIMALATHI/'} iconSize={'1.5em'}>
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label={'Snapchat'} href={'https://twitter.com/imhardikdesai'} iconSize={'1.5em'}>
                        <FaSnapchat />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/thamarai6040/'} iconSize={'1.5em'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}
