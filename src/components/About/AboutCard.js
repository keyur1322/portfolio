import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am Keyur Panchal from Gujarat, India. 
          I am currently working as a Web Developer at Aroma Espresso Services in Mississauga, Canada, 
          with over 2 years of experience in web application development. I have completed my Master’s in 
          Informatics from Northeastern University, Toronto, Canada.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
