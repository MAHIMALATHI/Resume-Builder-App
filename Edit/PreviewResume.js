import React from 'react';
import DownloadResume from './DownloadResume';

function PreviewResume({ resumeData }) {
    return (
        <div>
            <h2>Preview Resume</h2>
            <div style={{ color: resumeData.color, fontSize: resumeData.fontSize }}>
                {/* Render resume content here */}
                {resumeData.content}
            </div>
            <DownloadResume resumeId={resumeData.id} />
        </div>
    );
}

export default PreviewResume;
