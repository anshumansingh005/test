import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("create");
  const [email, setEmail] = useState("");
  const header = { "Access-Control-Allow-Origin": "*" };
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    axios
      .post("https://66c741f8732bf1b79fa5eff3.mockapi.io/crud-youtube", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/allBooking");
      });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="forBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Create;
