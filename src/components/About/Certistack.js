import React from "react";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import aws_cloud_prac from "../../Assets/aws-certified-cloud-practitioner.png";
import aws_devel_asso from "../../Assets/aws-certified-developer-associate.png";
import udemy_adobe_xd from "../../Assets/udemy-adobe-xd.jpg";

function Certistack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3}>
        <ProjectCard
          imgPath={aws_cloud_prac}
          title="AWS Cloud Practitioner"
          linkedin_project="https://www.linkedin.com/in/keyur-panchal-1307/"
        />
      </Col>
      <Col xs={6} md={3}>
      <ProjectCard
        imgPath={aws_devel_asso}
        title="AWS Developer Associate"
        linkedin_project="https://www.linkedin.com/in/keyur-panchal-1307/"
      />
      </Col>
      <Col xs={6} md={3}>
      <ProjectCard
        imgPath={udemy_adobe_xd}
        title="Adobe XD from Beginner to Expert"
        linkedin_project="https://www.linkedin.com/in/keyur-panchal-1307/"
      />
      </Col>
    </Row>
  );
}

export default Certistack;
