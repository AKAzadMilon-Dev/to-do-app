import React from 'react'
import {Col, Container, Row, Form, Button, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <Container className='w-25 border mt-5'>
        <Row >
            <Col lg={12}>
                <h3 className='headText'>Signin</h3>
                <Form className='singinform'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" size="md">Signin</Button>
                    </div>
                    <Alert className='alertStyle'>
                        Dont have an account? <Link to="/signup">Create Account</Link>
                    </Alert>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Signin