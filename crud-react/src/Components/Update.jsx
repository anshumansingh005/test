import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Update = () => {
  const handleUpdate = () => {
    return <></>;
  };
  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3" controlId="forBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" onChange={(e) => {}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" onChange={(e) => {}} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Update;
