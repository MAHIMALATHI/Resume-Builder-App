import React, { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
const CoverLetter = () => {
    const { coverLetter } = useContext(ResumeContext);

    return (
        <div className="cover-letter"  textColor="black">
            <pre>{coverLetter}</pre>
        </div>
    );
};
export default CoverLetter; 
