import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const EditOverlayCard = ({ onClose, details }) => {
  const [editedDetails, setEditedDetails] = useState(details);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails({ ...editedDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of edited details
    // For example, send updated details to the server
    console.log("Edited Details:", editedDetails);
    onClose(); // Close the overlay after submission
  };

  return (
    <div
      style={{
        color: "black",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          color: "black",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          position: "relative",
          width: "90%",
          maxWidth: "600px",
          textAlign: "left",
        }}
      >
        <h2>Edit Details</h2>
        <Form.Group controlId="formFile">
          <Form.Label>File</Form.Label>
          <Form.Control type="text" value={editedDetails.fileName} readOnly />
        </Form.Group>
        <Form.Group controlId="formRole">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            name="role"
            value={editedDetails.role || ""}
            onChange={handleInputChange}
            placeholder="e.g. Software Developer"
          />
        </Form.Group>
        <Form.Group controlId="formJobDescription">
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            as="textarea"
            name="jobDescription"
            value={editedDetails.jobDescription || ""}
            onChange={handleInputChange}
            rows={3}
            placeholder="e.g. I joined the team to help them scale their product."
          />
        </Form.Group>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Button variant="secondary" onClick={onClose} style={{ marginRight: "10px" }}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditOverlayCard;
