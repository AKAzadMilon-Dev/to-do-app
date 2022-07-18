import React from 'react';
import {Col, Container, Row, Form, Button, Alert} from 'react-bootstrap';

const Signup = () => {
  return (
    <Container className='w-25 border mt-5'>
        <Row >
            <Col lg={12}>
                <Form className='singinform'>
                <h3 className='headText'>Signup</h3>
                    <Form.Group className="mb-3" >
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" size="md">Signin</Button>
                    </div>
                    <Alert className='alertStyle'>
                        Dont have an account
                    </Alert>
                </Form>
            </Col>
            <Col lg={6}>
            
            </Col>
        </Row>
    </Container>
  )
}

export default Signup