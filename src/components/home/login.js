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

const LoginForm = ({ onSave, onChange, saving = false, errors = {} }) => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <button type="submit" disabled={saving} className="btn btn-primary">
              {saving ? "Loggin..." : "Login"}
            </button>
            <button
              type="submit"
              disabled={saving}
              className="btn btn-primary ml-3"
            >
              {saving ? "Loggin..." : "Forgot Password"}
            </button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <button
              type="submit"
              disabled={saving}
              className="btn btn-secondary mt-5"
            >
              {saving ? "Loggin..." : "Sign Up"}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

LoginForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default LoginForm;
