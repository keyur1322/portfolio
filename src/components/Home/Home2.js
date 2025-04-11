import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import my_avatar from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              BRIEFLY ABOUT MYSELF
            </h1>
            <p className="home-about-body">
            👋 Hey there! I’m Keyur Panchal — a full-stack developer with <b className="purple">2+ years of experience</b> building 
            web applications that are not only functional but also cloud-ready. 
            <br />
            <br />
            I work across the stack using <b className="purple">ReactJS, Node.js, PHP (Laravel/Symfony), and MySQL/PostgreSQL,</b> and 
            I’m passionate about leveraging <b className="purple">AWS services (EC2, Lambda, S3, CloudFront)</b> to build scalable and efficient solutions. 
            <br />
            <br />
            I love simplifying complex problems with clean code and scalable cloud solutions. 
            Let’s build something impactful together!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={my_avatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/keyur-panchal-1307/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/keyur-panchal-1307/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
