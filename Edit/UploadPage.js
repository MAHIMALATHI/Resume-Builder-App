import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

const threshold_for_total_file_size = 5;

const FileUploadComponent = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDelete = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };

  const handleNextButtonClick = () => {
    const totalSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);
    const totalSizeInMB = totalSize / (1024 * 1024);
    if (totalSizeInMB > threshold_for_total_file_size) {
      alert("Total file size should be less than 5MB.");
    } else {
      uploadFiles();
    }
  };

  const uploadFiles = async () => {
    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post("http://localhost:8080/api/resumes/upload", formData);
        console.log("File uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleEdit = (fileId) => {
    window.location.href = `/edit/${fileId}`;
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: "2px solid black",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "10px",
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: "white",
        }}
        onClick={() => fileInputRef.current.click()}
      >
        <p>Click to upload PDF or drag and drop</p>
        <input
          type="file"
          accept=".pdf"
          multiple
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      </div>

      {selectedFiles.length > 0 && (
        <div style={{ textAlign: "left", marginTop: "30px" }}>
          {selectedFiles.map((file, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <p>{file.name}</p>
              <Button onClick={() => handleEdit(file.name)}>Edit</Button>
              <Button onClick={() => handleDelete(index)}>Delete</Button>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Button variant="primary" onClick={handleNextButtonClick}>Submit</Button>
      </div>
    </div>
  );
};

export default FileUploadComponent;
