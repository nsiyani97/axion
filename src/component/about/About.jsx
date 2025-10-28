import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import image from "./About.svg";

function About() {
  return (
      <Container>
        <Row className="align-items-center justify-content-center mt-5">
          <Col md={6} className="text-center text-md-start">
            <img src={image} alt="data" width={480} className="ps-4" />
          </Col>

          <Col md={6}>
            <Stack gap={3} className="px-md-4">
              <h3 className="heading">About Axion Technolabs</h3>
              <p className="content">Globally, enterprises face tremendous competition in a challenging business scenario. We, at Axion Technolabs, understand it and deliver high-quality IT solutions to meet complex challenges. Since inception, we have assisted companies of all sizes to drive growth and bring automation in core processes. Our core values of excellence, collaboration, transparency, and customer-centric approach have made us capable of offering the best-in-class custom software development services to drive growth through digital transformation. We assist businesses in simplifying complexities using tailored app solutions. Companies can make real-time decisions with our robust data analytics solutions and stay ahead of the curve.</p>
              <div>
                <button className="Btn">About Us</button>
              </div>
            </Stack>
          </Col>
        </Row>

        <Row className="text-center py-5">
          <Col xs={6} md={3} className="border-end border-secondary">
            <Stack gap={1}>
              <h2 className="fw-bold text-primary">50+</h2>
              <span>Multidisciplinary Developers</span>
            </Stack>
          </Col>

          <Col xs={6} md={3} className="border-end border-secondary">
            <Stack gap={1}>
              <h2 className="fw-bold text-primary">94%</h2>
              <span>Client Retention</span>
            </Stack>
          </Col>

          <Col xs={6} md={3} className="border-end border-secondary">
            <Stack gap={1}>
              <h2 className="fw-bold text-primary">250+</h2>
              <span>Years of Combined Experience</span>
            </Stack>
          </Col>

          <Col xs={6} md={3}>
            <Stack gap={1}>
              <h2 className="fw-bold text-primary">07+</h2>
              <span>Countries Served</span>
            </Stack>
          </Col>
        </Row>
      </Container>
  );
}

export default About;
