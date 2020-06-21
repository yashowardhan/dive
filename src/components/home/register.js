import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md="auto">
            <h1>Register Now</h1>
            <InputGroup className="mb-3 mt-3">
              <FormControl
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Repeat Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <button type="submit" disabled={saving} className="btn btn-primary">
              {saving ? "Registering..." : "Register"}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

RegisterForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default RegisterForm;
