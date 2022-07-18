import React, { useState } from 'react';
import {Col, Container, Row, Form, Button, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from '../firebase'

const Signup = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let handleSubmit = (e)=>{
        e.preventDefault()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error achay")
            console.log(errorCode)
            console.log(errorMessage)
          });
    }

  return (
    <Container className='w-25 border mt-5'>
        <Row >
            <Col lg={12}>
                <Form className='singinform' onSubmit={handleSubmit}>
                <h3 className='headText'>Signup</h3>
                    <Form.Group className="mb-3" >
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button onClick={handleSubmit} type='submit' variant="primary" size="md">Signup</Button>
                    </div>
                    <Alert className='alertStyle'>
                        Allready have an account? <Link to="/signin">Signin</Link>
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