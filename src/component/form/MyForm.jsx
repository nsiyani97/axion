import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Wave from "./Wave.svg";

const inputStyle = {
  border: "none",
  borderRadius: "0%",
  borderBottom: "2px solid darkslategray",
};

const textAreaStyle = {
  borderStyle: "inset",
  borderWidth: "2px",
};

function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <Container>
      <div
        className="my-5 py-5"
        style={{
          backgroundImage: `url(${Wave})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Row>
          <Col xs={12} lg={6} className="align-content-center">
            <div className="m-5">
              <h2 className="poppins-semibold lh-base">
                Explore how our services can be integrated with{" "}
                <span style={{ color: "#024DF5" }}>your business.</span>
              </h2>
              <h5 className="poppins-semibold my-1">
                We’re just a conversation away!
              </h5>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <Form
              onSubmit={handleSubmit}
              className="p-4 m-5"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "2px solid #00000033",
                borderRadius: "20px",
              }}
            >
              <Row className="row-gap-3">
                <Col xs={12}>
                  <h2 className="poppins-semibold">Collaborate with us</h2>
                </Col>

                <Col xs={12}>
                  <Form.Group controlId="firstName">
                    <Form.Control
                      type="text"
                      placeholder="Full name"
                      className="bg-transparent"
                      style={inputStyle}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      className="bg-transparent"
                      style={inputStyle}
                      required
                    />
                  </Form.Group>
                </Col>

                <Row as={Col} xs={12} className="g-3">
                  <Col xs={6} className="custom-gap">
                    <Form.Group controlId="country">
                      <Form.Select
                        className="bg-transparent"
                        style={inputStyle}
                        defaultValue="India"
                      >
                        <option>India</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Germany</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={6} className="custom-gap">
                    <Form.Group controlId="mobile">
                      <Form.Control
                        type="tel"
                        placeholder="+91 | Phone number"
                        className="bg-transparent"
                        style={inputStyle}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Col xs={12}>
                  <Form.Group controlId="message">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="About your project"
                      className="bg-transparent"
                      style={textAreaStyle}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.Group controlId="range">
                    <Form.Label>What’s your budget?</Form.Label>
                    <Form.Range className="bg-transparent" min="0" max="100" />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.Group controlId="file">
                    <div className="border border-2 border-black rounded pt-0 p-2">
                      <Form.Label className="mb-0">@Attach File</Form.Label>
                      <Form.Control
                        type="file"
                        className="bg-transparent border-0"
                      />
                    </div>
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.Group>
                    <Button type="submit" className="common-button">
                      Inquire Now
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default MyForm;
