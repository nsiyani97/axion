import React from "react";
import "./banner.css";
import bannerData from "./bannerData.json";
import { Carousel, Container, Row, Col, Stack, Image } from "react-bootstrap";
import web from "./assets/web.svg";
import mobile from "./assets/mobile.svg";
import data from "./assets/data.svg";

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
              <Row className="align-items-center flex-column-reverse flex-lg-row">
                <Col>
                  <Stack gap={3}>
                    <h1>{item.deskTitle}</h1>
                    <div>{item.deskDisc}</div>
                    <div className="Btn">{item.deskBtn}</div>
                  </Stack>
                </Col>
                <Col>
                  <Image src={images[item.img]} alt="web" fluid className="banner-img" />
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
