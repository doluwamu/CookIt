import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { registerUser } from "../redux/actions/userActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { ServerError } from "../errors/ServerErrors";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";

const RegisterScreen = ({ history, location }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedPrivacyTerms, setAcceptedPrivacyTerms] = useState(false);
  const [message, setMessage] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(
        registerUser({
          name,
          email,
          password,
          acceptedPrivacyTerms,
        })
      );
    } else setMessage("Passwords don't match");
  };

  return (
    <FormContainer>
      <Meta title={"Register"} />

      <h1>Sign Up</h1>
      {error && <ServerError error={error} />}
      {message && <Message variant="danger">{message}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="acceptPrivacyTerms">
          <Form.Check
            type="checkbox"
            label="Accept privacy terms and conditions"
            checked={acceptedPrivacyTerms}
            onChange={(e) => setAcceptedPrivacyTerms(e.target.checked)}
          ></Form.Check>
        </Form.Group>

        <Button type="submit" className="btn btn-primary">
          {loading ? <Loader width={"15px"} height={"15px"} /> : "Sign Up"}
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
