// src/Context/ResumeContext.js
import React, { createContext, useState } from 'react';

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
    const [savedResume, setSavedResume] = useState(null); // State to hold the saved resume data

    const handlePrint = (resumeData) => {
        setSavedResume(resumeData); // Save the resume data
        // Continue with printing logic
        window.print();
    };

    return (
        <ResumeContext.Provider value={{ savedResume, handlePrint }}>
            {children}
        </ResumeContext.Provider>
    );
};

export default ResumeContext;
