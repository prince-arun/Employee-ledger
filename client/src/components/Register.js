import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const Register = () => {
  const navigate = useNavigate();
  //State variables for Reg Data
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // State variables for error messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  // Validation functions
  const validateName = () => {
    if ((isSubmitClicked || name) && (!name || name.length < 3)) {
      setNameError("Name must be at least 3 characters");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ((isSubmitClicked || email) && (!email || !emailRegex.test(email))) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (
      (isSubmitClicked || password) &&
      (!password || !passwordRegex.test(password))
    ) {
      setPasswordError(
        "Password must be at least 8 characters with one symbol, one number, and one capital letter"
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitClicked(true);
    if (!name || !email || !password) {
      setGeneralError("Please enter all details");
      return;
    }
    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
      axios
        .post("http://localhost:5000/api/users/register", {
          name,
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          alert("register successful");
          navigate("/login");
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <div className="register">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Register
                  </h2>
                  {generalError && (
                    <Alert variant="danger" className="mt-2">
                      {generalError}
                    </Alert>
                  )}
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          onBlur={validateName}
                          onChange={(e) => setName(e.target.value)}
                        />
                        {nameError && (
                          <Alert variant="danger" className="mt-2">
                            {nameError}
                          </Alert>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onBlur={validateEmail}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && (
                          <Alert variant="danger" className="mt-2">
                            {emailError}
                          </Alert>
                        )}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onBlur={validatePassword}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && (
                          <Alert variant="danger" className="mt-2">
                            {passwordError}
                          </Alert>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{" "}
                        <Link to={"/login"}>
                          <span className="text-primary fw-bold">Sign In</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
