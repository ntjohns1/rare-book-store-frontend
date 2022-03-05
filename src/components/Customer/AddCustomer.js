import React, { useState } from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';

export default function AddCustomer() {
    // form input to add student
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: 'password1234',
    });

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const {
            username,
            email,
            password
        } = formState;
        try {
            //  await addUser({
            //     variables: { 
            //         username: username,
            //         email: email,
            //         password: password
            //      },
            // });
            alert("You Did It!");
        } catch (e) {
            console.error(e);
        }
        setFormState({
            username: '',
            email: '',
            password: '',
        });

    };
    return (
        <Container className='p-4 my-4'>
            <StudentTable />
            <Card>
                <Card.Header>
                    <h4>Add New Bookt</h4>
                </Card.Header>
                <Card.Body className="p-3">
                    <Form onSubmit={handleFormSubmit} className="mb-3 px-3">
                        <Form.Group className="mb-3 px-3" controlId="username">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={formState.title}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 px-3" controlId="email">
                            <Form.Label>Student Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3 px-3" controlId="studentFirstName">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                name="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button
                            className="mx-3"
                            variant="success"
                            type="submit"
                            style={{ cursor: 'pointer' }}
                        >
                            Add Student
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
};