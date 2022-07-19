import React, { useState } from 'react';
import {Col, Container, Row, Form, Button, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from '../firebase'

const Signup = () => {
    const [validated, setValidated] = useState(false);
    // const [registered, setRegistered] = useState(false)
    const [error, setError] = useState('')

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let handleSubmit = (e)=>{
        e.preventDefault()
        
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            return;
        }

        if(!/[a-zA-Z0-9]{8,}/.test(password)){
            setError('password should contain at least 8 characters')
            return
        }
        setValidated(true);

        setError('')
        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user)
            setEmail('');
            setPassword('')
          })
          .catch((error) => {
            setError(error.message)
          });
    }

  return (
    <Container className='w-25 border mt-5'>
        <Row >
            <Col lg={12}>
                <Form noValidate validated={validated} className='singinform' onSubmit={handleSubmit}>
                <h3 className='headText'>Please Register</h3>
                    <Form.Group className="mb-3" controlId="validationCustom01">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter Full Name" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}} required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Email.
                        </Form.Control.Feedback>
                        <p className='text-danger'>{error}</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Password.
                        </Form.Control.Feedback>
                        <p className='text-danger'>{error}</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="validationCustom01">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Confirm Password.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Already Registered?" />
                    </Form.Group> */}

                    <div className="d-grid gap-2">
                        <Button onClick={handleSubmit} type='submit' variant="primary" size="md">Register</Button>
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