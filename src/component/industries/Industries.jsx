import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import travel from './assets/travel.svg';
import entertain from './assets/entertain.svg';
import health from './assets/health.svg';
import retail from './assets/retail.svg';
import education from './assets/education.svg';

function Industries() {
  const industries = [
    { img: travel, title: "Travel & Hospitality" },
    { img: entertain, title: "Entertainment" },
    { img: health, title: "Healthcare" },
    { img: retail, title: "Retail & eCommerce" },
    { img: education, title: "Education" },
  ];

  return (
    <div style={{ backgroundColor: "#F9F9FF" }}>
      <Container className="text-center py-5">
        <h2 className="pt-3 mb-4">Industries We Serve</h2>
        <Row className="justify-content-center">
          {industries.map((industry, index) => (
            <Col key={index} xs={10} sm={6} md={4} lg={2} className="my-3">
              <Stack
                gap={3}
                className="align-items-center p-3"
                style={{ backgroundColor: "#fff", borderRadius: "1rem", padding: "2rem" }}
              >
                <div className="industries-image d-flex justify-content-center align-items-center p-3 rounded-4">
                  <img src={industry.img} alt={industry.title} className="img-fluid" />
                </div>
                <h5 className="mb-0">{industry.title}</h5>
              </Stack>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Industries;
