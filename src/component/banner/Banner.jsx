import React from "react";
import "./banner.css";
import bannerData from "./bannerData.json";
import { Carousel, Container, Row, Col, Stack, Image } from "react-bootstrap";
import web from "./images/web.svg";
import mobile from "./images/mobile.svg";
import data from "./images/data.svg";

const images = {
  "web.svg": web,
  "mobile.svg": mobile,
  "data.svg": data,
};

function Banner() {
  return (
    <Container className="my-2">
      <Carousel indicators={true} interval={3000}>
        {bannerData.map((item) => (
          <Carousel.Item key={item.id}>
            <Container>
              <Row className="align-items-center flex-column-reverse flex-md-row row-gap-5">
                <Col md={6}>
                  <Stack gap={3}>
                    <h1>{item.deskTitle}</h1>
                    <div>{item.deskDisc}</div>
                    <button className="Btn">{item.deskBtn}</button>
                  </Stack>
                </Col>
                <Col md={6}>
                  <Image src={images[item.img]} alt="web" fluid />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Banner;
