import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project_img from "../../Assets/Projects/project_img.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of the <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are some of the projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_img}
              title="AWS Graph Analytics Dashboard"
              description="Created an AWS analytics solution with S3, Glue, Athena, and QuickSight, and built a dynamic dashboard using HTML, CSS, and JavaScript on S3."
              linkedin_project="https://www.linkedin.com/in/keyur-panchal-1307/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_img}
              title="Shop Well"
              description="ShopWell is a retail management system with Android and desktop apps, tracking purchases, product details, and expiry alerts for customers and employees."
              linkedin_project="https://www.linkedin.com/in/keyur-panchal-1307/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_img}
              title="Daily Expense Management System"
              description="Developed a Daily Expense Management System to add clients, track transactions, view client details, generate date/name-based reports, and export as PDF."
              linkedin_project="https://www.linkedin.com/in/keyur-panchal-1307/"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_img}
              title="Stock Management System"
              description="A Stock Management System categorizes products, manages inventory, generates reports by product, date, category, and calculates GST for billing."
              linkedin_project="https://www.linkedin.com/in/keyur-panchal-1307/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
