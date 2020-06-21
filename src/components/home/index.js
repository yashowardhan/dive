import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import LoginForm from "./login";

function Home() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md="auto">
            <h1>DiveIn</h1>
            <h2>Start Learning Right Away</h2>
            {/* <p>
              We aim to help you develop knowledge. Just choose your topic of
              interest, and start reading. Each piece of content is from one of
              the top bloggers in the respective fields. So, dive right in! :)
            </p> */}
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-3">
          <Col md="auto">
            <LoginForm></LoginForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
