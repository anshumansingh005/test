import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Create = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="forBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;
