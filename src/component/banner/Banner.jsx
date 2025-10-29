import React from "react";
import "./banner.css";
import bannerData from "./bannerData.json";
import { Carousel, Container, Row, Col, Stack } from "react-bootstrap";
import web from "./assets/web.svg";
import mobile from "./assets/mobile.svg";
import data from "./assets/data.svg";
import { Image } from 'react-bootstrap';

const images = {
  "web.svg": web,
  "mobile.svg": mobile,
  "data.svg": data,
};

function Banner() {
  return (
    <Container>
      <Carousel indicators={true} interval={1000}>

        {bannerData.map((item) => (
          <Carousel.Item key={item.id}>
            <Container>
              <Row className="align-items-center m-4">
                <Col xs={{order:2}} lg={{order:1}}>
                  <Stack gap={3}>
                    <div className="fs-1 semibold">{item.deskTitle}</div>
                    <div>{item.deskDisc}</div>
                    <div className="Btn regular">{item.deskBtn}</div>
                  </Stack>
                </Col>
                <Col xs={{order:1}} lg={{order:2}}>
                  <Image  src={images[item.img]} alt="web" fluid style={{ minWidth: "300px", maxWidth: "480px" }} />
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
