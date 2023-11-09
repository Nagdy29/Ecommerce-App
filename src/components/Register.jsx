import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  let nav = useNavigate();
  return (
    <>
      <div className="container mt-5">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="my-3"
            onClick={() => nav("/login")}
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </>
  );
};
