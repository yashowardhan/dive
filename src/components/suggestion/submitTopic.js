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

const SuggestionForm = ({ onSave, onChange, saving = false, errors = {} }) => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Article Link"
                aria-label="Artile Link"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Article Topic"
                aria-label="Article Topic"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Article Category"
                aria-label="Article Category"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <button type="submit" disabled={saving} className="btn btn-primary">
              {saving ? "Submitting..." : "Submit"}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

SuggestionForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default SuggestionForm;
