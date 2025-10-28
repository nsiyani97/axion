import React from "react";
import { Container, Button, Stack } from "react-bootstrap";

function Hire() {
  return (
    <Container className="text-center py-5">
      <Stack gap={4} className="align-items-center">
        <h1 style={{ fontSize: '52px' }}>
          <span style={{ color: '#024DF5' }}>Transform Your Vision into Reality with Highly </span>
          Skilled and Experienced Developers
        </h1>
        <Button variant="primary" size="lg">HIRE DEVELOPERS</Button>
      </Stack>
    </Container>
  );
}

export default Hire;
