import React, { useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import angular from "./assets/angular.svg";
import reactLogo from "./assets/react.svg";
import next from "./assets/next.svg";
import ios from "./assets/ios.svg";
import js from "./assets/js.svg";
import woo from "./assets/woo.svg";
import php from "./assets/php.svg";
import java from "./assets/java.svg";
import node from "./assets/node.svg";
import python from "./assets/python.svg";
import android from "./assets/android.svg";
import flutter from "./assets/flutter.svg";

function TechStack() {
  const [active, setActive] = useState("All");

  const techs = [
    { img: angular, name: "Angular", category: "Frontend" },
    { img: reactLogo, name: "React", category: "Frontend" },
    { img: reactLogo, name: "React Native", category: "Mobile" },
    { img: next, name: "Next.js", category: "Frontend" },
    { img: java, name: "Java", category: "Backend" },
    { img: node, name: "Node.js", category: "Backend" },
    { img: python, name: "Python", category: "Backend" },
    { img: ios, name: "iOS", category: "Mobile" },
    { img: js, name: "JavaScript", category: "Frontend" },
    { img: woo, name: "WooCommerce", category: "eCommerce" },
    { img: php, name: "PHP", category: "Backend" },
    { img: php, name: "PHP", category: "CMS" },
    { img: android, name: "Android", category: "Backend" },
    { img: flutter, name: "Flutter", category: "Mobile" },
  ];

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Mobile",
    "eCommerce",
    "CMS",
    "Cloud",
    "Data Analytics",
  ];

  const filteredTechs =
    active === "All" ? techs : techs.filter((t) => t.category === active);

  return (
    <Container className="text-center my-5">
      <h2 className="mb-4">Our Team Bring into Play Tech-Stack</h2>

      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-center flex-wrap mb-4"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-link medium ${
              active === cat ? "text-primary" : "text-dark"
            }`}
            onClick={() => setActive(cat)}
            style={{ cursor: "pointer", transition: "color 0.3s ease" }}
          >
            {cat}
          </button>
        ))}
      </Stack>

      <Row className="justify-content-center">
        {filteredTechs.map((tech, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            lg={2}
            className="my-3 d-flex justify-content-center"
          >
            <Stack
              gap={2}
              className="align-items-center p-3 w-100 h-100"
              style={{ cursor: "pointer", transition: "all 0.3s ease" }}
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="img-fluid"
                style={{ width: "80px", height: "80px" }}
              />
              <p className="regular mb-0">{tech.name}</p>
            </Stack>
          </Col>
        ))}
      </Row>

      <style>
        {`
          .p-3.w-100.h-100:hover {
            transform: translateY(-5px);
            box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
          }
          .btn-link:hover {
            text-decoration: none !important;
            color: #0d6efd !important;
          }
        `}
      </style>
    </Container>
  );
}

export default TechStack;
