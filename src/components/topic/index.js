import React from "react";

import { Row, Col, Container } from "react-bootstrap";

function Topic() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md="auto">
            <h1>Select Your Topic</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Topic;
