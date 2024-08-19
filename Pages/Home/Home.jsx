
import React, { useContext } from 'react';
import Introduction from '../../Components/Intro/Introduction';
import ResumeContext from '../../Context/ResumeContext';
import BuilderArea from '../BuilderArea';
import Theme1 from './../../Theme/Theme1/Theme1';
import Theme2 from '../../Theme/Theme2/Theme2';
import Theme3 from '../../Theme/Theme3/Theme3';
import Theme5 from '../../Theme/Theme5/Theme5';
import Theme6 from '../../Theme/Theme6/Theme6';
import Theme7 from '../../Theme/Theme7/Theme7';
import Theme8 from '../../Theme/Theme8/Theme8';
import Theme9 from '../../Theme/Theme9/Theme9';
import Theme10 from '../../Theme/Theme10/Theme10';
import Theme11 from '../../Theme/Theme11/Theme11';
import Theme12 from '../../Theme/Them12/Theme12';
import Theme13 from '../../Theme/Theme13/Theme13';
import Theme14 from '../../Theme/Theme14/Theme14';
import Theme15 from '../../Theme/Theme15/Theme15';
import Theme16 from '../../Theme/Theme16/Theme16';

import Navbar from '../../Pages/Home/Navbar';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    const { currentTheme, showComponent, themeData, componentRef } = useContext(ResumeContext);

    return (
        <>
        
        <Navbar />
        
        {!showComponent && <Introduction />}
       
        {showComponent && currentTheme === 'Theme1' && <BuilderArea theme={<Theme1 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme2' && <BuilderArea theme={<Theme2 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme3' && <BuilderArea theme={<Theme3 componentRef={componentRef} themeData={themeData} />} />}
        
        {showComponent && currentTheme === 'Theme5' && <BuilderArea theme={<Theme5 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme6' && <BuilderArea theme={<Theme6 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme7' && <BuilderArea theme={<Theme7 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme8' && <BuilderArea theme={<Theme8 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme9' && <BuilderArea theme={<Theme9 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme10' && <BuilderArea theme={<Theme10 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme11' && <BuilderArea theme={<Theme11 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme12' && <BuilderArea theme={<Theme12 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme13' && <BuilderArea theme={<Theme13 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme14' && <BuilderArea theme={<Theme14 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme15' && <BuilderArea theme={<Theme15 componentRef={componentRef} themeData={themeData} />} />}
        {showComponent && currentTheme === 'Theme16' && <BuilderArea theme={<Theme16 componentRef={componentRef} themeData={themeData} />} />}
     <Footer/>
        </>
        );
        };

export default Home;
