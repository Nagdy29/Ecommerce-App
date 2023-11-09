import React from "react";
import { Container, Form, Button } from "react-bootstrap";
export const Contect = () => {
  return (
    <>
      <Container className="mt-5">
        <h2>Contact Us</h2>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Your email" />
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message" />
          </Form.Group>

          <Button
            type="submit"
            className=" my-3 btn btn-outline-success text-white"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
