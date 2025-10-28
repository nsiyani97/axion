import React from "react";
import "./Testimonial.css";
import Logo from "./assets/Logo.svg";
import Person from "./assets/Person.svg";
import { Carousel, Container, Stack } from "react-bootstrap";
import testimonialData from "./testimonialData.json";

function Testimonial() {
  return (
    <Container className="my-5 py-2">
      <h2 className="text-center">What Our Clients Say</h2>
      <Carousel className="my-4">

        {testimonialData.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="testimonial-card w-50 p-4 d-flex">
              <Stack gap={3}>
                <img src={Logo} width={200} />
                <p>{item.message}</p>
                <div>
                  <b>{item.name}</b>
                  <p>{item.position}</p>
                </div>
              </Stack>
              <Stack>
                <img src={Person} width={200}></img>
              </Stack>
            </div>
          </Carousel.Item>
        ))}

      </Carousel>
    </Container>
  );
}

export default Testimonial;
