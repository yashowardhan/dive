import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SuggestionForm from "./submitTopic";

function SuggestionPage() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md="auto">
            <h1 className="mb-4">DiveIn to SuggestionPage</h1>
            <SuggestionForm></SuggestionForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SuggestionPage;
