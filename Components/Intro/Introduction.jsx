import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Main Swiper styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
import { Navigation, Pagination } from 'swiper/modules';
import { Flex, Container, Heading, Stack, Text, Button, Box, Image } from '@chakra-ui/react';
import './introduction.css';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import { Helmet } from 'react-helmet';
import Navbar from '../../Pages/Home/Navbar';
import Footer from '../Footer/Footer';

export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn);
    }

    const showTheme = (e) => {
        setShowComponent(!showComponent);
        setCurrentTheme(e.target.id);
    }

    return (
        <>
            <Navbar />
            <div className='fullback'>
                <Helmet>
                    <title>Resume Builder - Create Your Resume in Minutes</title>
                    <meta name="description" content="Build your professional resume in minutes using our easy-to-use online resume builder. Choose from a variety of templates and customize your resume to land your dream job. Get started now!" />
                    <meta name="keywords" content="resume builder, online resume builder, professional resume, resume templates, resume designs, resume generator, resume creator, resume maker, build resume, create resume, download resume" />
                    <meta name="robots" content="index,follow" />
                    <meta name="author" content="Thamaraiselvi S" />
                    <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
                    <meta property="og:url" content="https://quick-resume.netlify.app/about" />
                    <meta property="og:type" content="website" />
                </Helmet>
                <Container
               
                    className='cont'
                    my={{ base: 1.5, md: 16 }}
                    justifyContent={'space-between'}
                    flexDirection={{ base: 'column', md: 'row', sm: 'column' }}
                    display={'flex'}
                    alignItems={'center'}
                
                    marginTop={'10%'}
                    maxW={'7xl'}
                    pt={{ base: 20, md: 28 }} 
                >
                    <Stack
                    
                        width={{ base: '95%', md: '47%' }}
                        textAlign={'center'}
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 1.5, md: 10, sm: '14' }}>
                        {
                            selectBtn
                                ?
                                <>
                                    <Heading className='inthead'
                                        fontWeight={600}
                                        textColor={'black'}
                                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                        lineHeight={'110%'}>
                                        Your resume in three{' '}
                                        <Text as={'span'} textColor={'black'} color={'black'}>
                                            easy{' '}
                                        </Text>
                                        steps
                                    </Heading>

                                    <Text color={'white.500'} maxW={'3xl'} textColor={'black'} className='inthead' lineHeight="1.8" wordBreak="keep-all">
                                        Resume builder tools that assemble well-formatted resume. <br />
                                        Through a resume builder, you can create a professional-<br />
                                        looking resume in a few easy steps.<br />
                                        This resume builder offers different template options,<br />
                                        so you can select the template that best fits your needs and style.
                                    </Text>

                                    <Flex _dark={{ color: '#4682B4' }} resume background textAlign={'start'} flexDirection={'column'} w={'full'}>
                                        <Box className='Bullet_Points'>
                                            <Flex alignItems="center">
                                                <Button color='black' bg={'#4682B4'} width={'10px'}>1</Button>
                                                <Text
                                                    _dark={{ color: "black" }}
                                                    textColor={'black'}
                                                    color={'black'}
                                                    fontSize={'xl'}
                                                    marginLeft="10px"
                                                >
                                                    Select a template from our collection.
                                                </Text>
                                            </Flex>
                                        </Box>
                                        <Box className='Bullet_Points'>
                                            <Flex alignItems="center">
                                                <Button color='black' bg={'#4682B4'} width={'10px'}>2</Button>
                                                <Text
                                                    _dark={{ color: "black" }}
                                                    textColor={'black'}
                                                    fontSize={'xl'}
                                                    marginLeft="10px"
                                                >
                                                    Build your resume using our easy-to-use resume builder.
                                                </Text>
                                            </Flex>
                                        </Box>
                                        <Box className='Bullet_Points'>
                                            <Flex alignItems="center">
                                                <Button color='black' bg={'#4682B4'} width={'10px'}>3</Button>
                                                <Text
                                                    _dark={{ color: "black" }}
                                                    textColor={'black'}
                                                    fontSize={'xl'}
                                                    marginLeft="10px"
                                                >
                                                    Download your resume.
                                                </Text>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </>
                                :
                                <Heading
                                    m={'1.5'}
                                    textAlign={{ base: 'center', md: 'start' }}
                                    fontWeight={600}
                                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                    lineHeight={'110%'}>
                                    Select a{' '}
                                    <Text as={'span'} color={'#38B2AC'}>
                                        Template{' '}
                                    </Text>
                                    from the list
                                </Heading>
                        }
                    </Stack>
                    {
                        selectBtn ?
                            <Stack>
                                <Image
                                    className="intimage"
                                    src="https://i.pinimg.com/originals/34/ed/0f/34ed0f6db38f361d4a15c6286e180a64.gif"
                                    alt='home logo'
                                    my={'4'}
                                    width={'500px'}
                                    marginLeft={'20px'} 
                                    marginTop={'-20%'}
                                />
                                <Button
                                    onClick={handleSelectTemplate}
                                    style={{
                                        marginLeft: '150px',
                                        display: 'block',
                                        height: '50px',
                                        width: '200px',
                                        font: 'bold',
                                        fontSize: '24px',
                                    }}
                                    className='mb-4'
                                    colorScheme={'#4682B4'}
                                    bg={'#4682B4'}
                                    marginBottom={'10px'}
                                >
                                    Select Template
                                </Button>
                            </Stack>
                            :
                            <Box maxW={{ base: '100%', md: '120%', bg: 'black' }} className="templatesList">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation
                                    pagination={{ clickable: true }}
                                    spaceBetween={50}
                                    slidesPerView={3}
                                    loop={true} 
                                >
                                    {ThemeTemplateData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="template" onClick={showTheme}>
                                                <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Box>
                    }
                </Container>
            </div>
        </>
    );
}
