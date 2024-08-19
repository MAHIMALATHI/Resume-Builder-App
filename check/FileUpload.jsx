import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import FileCard from "./ResumeCard";
import OverlayCard from "./RoleForm";
import Navbar from "../Pages/Home/Navbar";

const threshold_for_total_file_size = 5;

const FileUploadComponent = () => {
  const [showOverlay, setShowOverlay] = useState(false);
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
      setShowOverlay(true);
    }
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const handleOnCancel = () => {
    setSelectedFiles([]);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          padding: "20px",
          backgroundImage: "url('https://i.pinimg.com/originals/45/45/84/45458476e96a78dc1cabddba5d89b530.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "80px auto" }}>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
              border: "2px solid black",
              padding: "20px",
              marginBottom: "20px",
              marginTop: "30px",
              borderRadius: "10px",
              textAlign: "center",
              width: "80%",
              margin: "auto",
              cursor: "pointer",
              backgroundColor: "white",
            }}
            onClick={() => fileInputRef.current.click()}
          >
            <p style={{ color: "black" }}>Click to upload PDF or drag and drop</p>
            <input
              type="file"
              accept=".pdf"
              multiple
              onChange={handleFileChange}
              style={{ color: "black" }}
              ref={fileInputRef}
            />
          </div>

          {selectedFiles.length > 0 && (
            <div style={{ textAlign: "left", marginTop: "30px" }}>
              {selectedFiles.map((file, index) => (
                <div key={index} style={{ marginBottom: "10px", color: "black" }}>
                  <FileCard file={file} onDelete={() => handleDelete(index)} />
                </div>
              ))}
            </div>
          )}
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Button
              variant="primary"
              style={{
                width: "7rem",
                marginRight: "50px",
              }}
              onClick={handleOnCancel}
            >
              Cancel
            </Button>

            <Button
              variant="primary"
              style={{ width: "7rem" }}
              onClick={handleNextButtonClick}
            >
              Next
            </Button>
          </div>
          {showOverlay && (
            <OverlayCard onClose={handleCloseOverlay} selectedFiles={selectedFiles} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploadComponent;
