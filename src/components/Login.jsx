import { Form, Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let nav = useNavigate();
  return (
    <>
      <div className="container mt-5 my-5">
        <Form className="my-3">
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
            className="py-2 my-4"
            onClick={() => nav("/")}
          >
            Sign In
          </Button>
        </Form>
      </div>
    </>
  );
};
