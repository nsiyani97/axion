import React from "react";
import "./services.css";
import { Container, Row, Col, Stack } from "react-bootstrap";
import custom from "./assets/custom.svg";
import data from "./assets/data.svg";
import eCommerce from "./assets/eCommerce.svg";
import mobile from "./assets/mobile.svg";
import pwa from "./assets/pwa.svg";
import web from "./assets/web.svg";
import servicesData from "./servicesData.json";

const images = { custom, data, eCommerce, mobile, pwa, web };

function Services() {
  return (
    <Container className="my-5">
      <Row className="mt-4">
        <Col md={6}>
          <h2>
            Transform Core Business Processes with Our <span style={{ color: "#024DF5" }}>Technological Expertise</span>
          </h2>
        </Col>
        <Col md={6}>
          <p>Axion Technolabs is a leading IT service provider globally. We have helped startups, SMEs, and large companies transform their processes digitally to grab new opportunities and drive growth. Our in-house teams of professionals can reshape the digital future of any enterprise.</p>
        </Col>
      </Row>

      <div className="Btn mb-5">VIEW ALL SERVICES</div>

      <Row className="g-4">
        {servicesData.map((item) => (
          <Col key={item.id} xs={12} md={6} lg={4}>
            <a href="#" className="text-reset text-decoration-none">
              <Stack gap={3} className="service-card p-3 h-100 w-auto">
                <div className="text-left">
                  <img src={images[item.img]} alt={item.title} />
                </div>
                <h5 className="semibold">{item.title}</h5>
                <p>{item.description}</p>
                <span className="semibold info">Get more info</span>
              </Stack>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
