import React from "react";
import chooseData from "./chooseData.json";
import { Container, Row, Col, Stack } from "react-bootstrap";
import relation from "./assets/relation.svg";
import process from "./assets/process.svg";
import efforts from "./assets/efforts.svg";
import domain from "./assets/domain.svg";
import approach from "./assets/approach.svg";
import success from "./assets/success.svg";

const images = { relation, process, efforts, domain, approach, success };

function Choose() {
  return (
    <Container className="my-5">
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <h2>Why Choose <span style={{color: "#024df5"}}>Axion Technolabs</span> for Software Development?</h2>
        </Col>
        <Col md={6}>
          <p>Axion Technolabs is a leading IT service provider globally. We have helped startups, SMEs, and large companies transform their processes digitally to grab new opportunities and drive growth. Our in-house teams of professionals can reshape the digital future of any enterprise.</p>
        </Col>
      </Row>

      <Row className="text-center g-4">
        {chooseData.map((item) => (
          <Col key={item.id} xs={12} md={6} lg={4}>
            <Stack className="p-4 align-items-center" gap={3}>
              <img src={images[item.img]} alt={item.title} />
              <h4>{item.title}</h4>
              <div className="border border-primary" style={{ width: 150 }}></div>
              <p>{item.desc}</p>
            </Stack>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Choose;
