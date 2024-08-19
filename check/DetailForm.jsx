import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import Navbar from "../Pages/Home/Navbar";

const OverlayCard = ({ onClose, details }) => {
  const [activeSection, setActiveSection] = useState("education");

  const renderSection = (section) => {
    switch (section) {
      case "education":
        return (
          <div>
            {Array.isArray(details["education"]) &&
              details["education"].map((item, index) => (
                <div style={{ color: "black" }} key={index}>
                  <p>
                    <strong>{item.degree}</strong>
                  </p>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={3} style={{ color: "black" }}>Name</Col>
                    <Col sm={9} style={{ color: "black" }}>
                      {item.name}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={3} style={{ color: "black" }}>Branch</Col>
                    <Col sm={9} style={{ color: "black" }}>
                      {item.branch}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={3} style={{ color: "black" }}>CGPA</Col>
                    <Col sm={9} style={{ color: "black" }}>
                      {item.cgpa}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={3} style={{ color: "black" }}>Start</Col>
                    <Col sm={9} style={{ color: "black" }}>
                      {item.start}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={3} style={{ color: "black" }}>End</Col>
                    <Col sm={9} style={{ color: "black" }}>
                      {item.end}
                    </Col>
                  </Row>
                </div>
              ))}
          </div>
        );
      case "Professional Experience":
        return (
          <div>
          
            {Array.isArray(details["Professional Experience"]) &&
              details["Professional Experience"].map((item, index) => (
                <div style={{ color: "black" }} key={index}>
                  <p>
                    <strong>{item.organization}</strong>
                  </p>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={4} style={{ color: "black" }}>Role</Col>
                    <Col sm={8} style={{ color: "black" }}>
                      {item.role}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={4} style={{ color: "black" }}>Short Description</Col>
                    <Col sm={8} style={{ color: "black" }}>
                      {item.short_description}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={4} style={{ color: "black" }}>Tech Stack</Col>
                    <Col sm={8} style={{ color: "black" }}>
                      {item.tech_stack}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={4} style={{ color: "black" }}>Time Duration</Col>
                    <Col sm={8} style={{ color: "black" }}>
                      {item.time_duration?.start} - {item.time_duration?.end} (
                      {item.time_duration?.duration_months} months)
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={4} style={{ color: "black" }}>Relevance Score</Col>
                    <Col sm={8} style={{ color: "black" }}>
                      {item.relevancy}
                    </Col>
                  </Row>
                </div>
              ))}
          </div>
        );
      case "projects":
        return (
          <div>
            {Array.isArray(details["projects"]) &&
              details["projects"].map((item, index) => (
                <div style={{ color: "black" }}key={index}>
                  <p>
                    <strong>{item.project_title}</strong>
                  </p>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={4} style={{ color: "black" }}>Short Description</Col>
                    <Col sm={8} style={{ color: "black" }}>
                      {item.short_description}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={4} style={{ color: "black" }}>Tech Stack</Col>
                    <Col sm={8} style={{ color: "black" }}>
                      {item.tech_stack}
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={4} style={{ color: "black" }}>Time Duration</Col>
                    <Col sm={8} style={{ color: "black" }}>
                      {item.time_duration?.start} - {item.time_duration?.end} (
                      {item.time_duration?.duration_months} months)
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col sm={4} style={{ color: "black" }}>Relevance Score</Col>
                    <Col sm={8} style={{ color: "black" }}>
                      {item.relevancy}
                    </Col>
                  </Row>
                </div>
              ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
    <Navbar/>
    <div
      style={{
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
      <div
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "10px",
          position: "relative",
          width: "90%",
          height: "70%",
          overflow: "auto",
          textAlign: "left",
          maxWidth: "600px",
          marginLeft: "0px",
        }}
      >
        <div style={{ margin: "50px" }}>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={onClose}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "30px",
              cursor: "pointer",
            }}
          />
          <div style={{ marginBottom: "20px" }}>
            <button
              style={{
                color:"black",
                backgroundColor:
                  activeSection === "education" ? "aliceblue" : "transparent",
              }}
              onClick={() => setActiveSection("education")}
            >
              Degree
            </button>
            <button
              style={{
                color:"black",
                backgroundColor:
                  activeSection === "projects" ? "aliceblue" : "transparent",
              }}
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </button>
            <button
              style={{
                color:"black",
                backgroundColor:
                  activeSection === "Professional Experience"
                    ? "aliceblue"
                    : "transparent",
              }}
              onClick={() => setActiveSection("Professional Experience")}
            >
              WEX
            </button>
          </div>
          {renderSection(activeSection)}
        </div>
      </div>
    </div>
    </div>
  );
};

export default OverlayCard;
