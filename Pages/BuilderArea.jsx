import React, { useContext, useState } from 'react';
import { Button } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import CoverLetter from '../Components/CoverLetter/CoverLetter';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";
import './BuilderArea.css';

const BuilderArea = (props) => {
    const { showComponent,downloadCoverLetter,downloadPortfolio, setShowComponent, loading, handlePrint } = useContext(ResumeContext);
    const [view, setView] = useState('resume');

    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent);
    };

    const handlePrintView = () => {
        if (view === 'resume') {
            handlePrint();
        } else if (view === 'coverLetter') {
            window.print();
        } else if (view === 'portfolio') {
            window.print();
        }
    };

    return (
        <>
            {loading && <PropagateLoader id="spinner" color="#319795" size={30} />}
            <div className="d-flex justify-content-center builder-button ">
               
            </div>
            {view === 'resume' ? (
                <div id="main-box" className="d-flex justify-content-between flex-wrap mt-4 mx-2">
                    <UserDataCollect />
                    <div id="theme-box-border">
                        {props.theme}
                    </div>
                </div>
            ) : view === 'coverLetter' ? (
                <CoverLetter />
            ) : (
                <Portfolio />
            )}
            <div className="d-flex flex-wrap justify-content-center">
                <Button bgColor='#4682B4' textColor='black'  width={'10%'} className="mx-2 my-5"  variant="outline" onClick={handlePrintView}>Print</Button>
                <Button bgColor='#4682B4' textColor='black'  width={'15%'} className="mx-2 my-5" variant="outline" onClick={handleSelectNewTemplate}>Select Another Template</Button>
                
            </div>
            <div >
           
            </div>
        </>
    );
};

export default BuilderArea;
