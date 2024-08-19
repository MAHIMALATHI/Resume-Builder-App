import axios from 'axios';
import { saveAs } from 'file-saver';

const ConvertPdfToWord = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(
      'https://v2.convertapi.com/pdf/to/docx',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer 39bc8fa2-f513-4d7e-b0c8-2e8a054787da',
        },
        responseType: 'blob', // Important: Ensure the response is handled as a binary blob
      }
    );

    if (response.status === 200) {
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      saveAs(blob, 'converted-document.docx');
      console.log('PDF successfully converted to Word.');
    } else {
      console.error('Unexpected response status:', response.status);
    }
  } catch (error) {
    console.error('Error during PDF to Word conversion:', error.response || error.message);
  }
};

export default ConvertPdfToWord;
