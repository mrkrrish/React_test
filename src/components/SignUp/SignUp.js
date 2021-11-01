import React, { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';

import InputGroup from 'react-bootstrap/InputGroup';
import  Button from 'react-bootstrap/Button';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar'


function SignUp() {


    const [validated, setValidated] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);

      const FormInput = new FormData(event.currentTarget);
      console.log({
        first_name: FormInput.get('firstname'),
        Last_name:FormInput.get('lastname'),
        username: FormInput.get('username'),
        UserEmail: FormInput.get('userEmail'),
        userPassword:FormInput.get('password'),


    });


      
    };
    return(
       
   <Container fluid >
       <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">
            <LoginIcon />&nbsp;
          Kapil Test Signup
          </Navbar.Brand>
        </Container>
      </Navbar>
<Container className="mt-5">

<Row>
<Col>
<Card xs={12}>
<Card.Body>

    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="firstname"

           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="lastname"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              name="userName"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" placeholder="City" required name="userEmail" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email Id.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>City &amp; State</Form.Label>
          <Form.Control type="text" placeholder="State" required name="Address" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="Passwrod" required name="Password" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>  
    </Card.Body>
</Card>
</Col>
</Row>   
</Container>

</Container>
);
}

export default SignUp;