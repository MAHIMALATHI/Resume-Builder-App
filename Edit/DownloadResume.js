import React from 'react';
import axios from 'axios';

function DownloadResume({ resumeId }) {
    const handleDownload = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/resume/download/${resumeId}`, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'edited_resume.pdf'); // or .docx based on the file type
            document.body.appendChild(link);
            link.click();
        } catch (err) {
            console.error('Download failed:', err);
        }
    };

    return (
        <button onClick={handleDownload}>Download Resume</button>
    );
}

export default DownloadResume;
