import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Certistack from "./Certistack";
import Aboutcard from "./AboutCard";
import about_img from "../../Assets/about_img.svg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Discover Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col 
            md={6} style={{ paddingBottom: 20 }}
          >
            <img
              src={about_img}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "500px" }}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Some Professional <strong className="purple">Certifications </strong>
        </h1>

        <Certistack />
      </Container>
    </Container>
  );
}

export default About;
