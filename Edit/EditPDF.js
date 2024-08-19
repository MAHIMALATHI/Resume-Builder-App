import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import './EditPDF.css'; 
import Navbar from '../Pages/Home/Navbar';

const EditPDF = () => {
  const [file, setFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [textPosition, setTextPosition] = useState({ x: 50, y: 50 });
  const [isEditing, setIsEditing] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    setFile(selectedFile);
    setPdfUrl(URL.createObjectURL(selectedFile));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = async () => {
    if (!file) {
      alert('No file selected for editing.');
      return;
    }

    try {
      const fileBytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(fileBytes);
      const pages = pdfDoc.getPages();

      if (pages.length === 0) {
        alert('The PDF does not contain any pages.');
        return;
      }

      const page = pages[0];
      page.drawText(editingText, {
        x: textPosition.x,
        y: textPosition.y,
        size: 30,
        color: rgb(0, 0, 0),
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      setPdfUrl(URL.createObjectURL(blob));
      setIsEditing(false);
    } catch (error) {
      console.error('Error processing the PDF:', error);
      alert('Failed to process the PDF. Please check the console for details.');
    }
  };

  const handleTextChange = (event) => {
    setEditingText(event.target.value);
  };

  return (
    <div className='full'>
      <Navbar />
      <div className="edit-pdf-container">
        <div className="controls-container">
          <h1 className="title">Edit PDF</h1>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="file-input"
          />
          {file && (
            <>
              <input
                type="text"
                value={editingText}
                onChange={handleTextChange}
                placeholder="Enter text to add to the PDF"
                className="text-input"
                disabled={!isEditing}
                maxLength={'10%'}
              />
              <div className="buttons-container">
                <button onClick={handleEditClick} className="button edit-button">
                  Edit
                </button>
                {isEditing && (
                  <button onClick={handleSaveChanges} className="button save-button">
                    Save Changes
                  </button>
                )}
              </div>
            </>
          )}
        </div>
        {pdfUrl && (
          <div className="pdf-preview-container">
            <h2 className="title">PDF Preview:</h2>
            <iframe src={pdfUrl} className="pdf-iframe" title="PDF Preview" />
          </div>
        )}
      </div>
      <div className="below"></div>
    </div>
  );
};

export default EditPDF;
