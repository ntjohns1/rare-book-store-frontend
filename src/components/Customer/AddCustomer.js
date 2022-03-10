import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar';

export default function AddCustomer() {
    // form input to add Customer
    const [formState, setFormState] = useState({
        email: '',
        firstName: '',
        lastName: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zipcode: '',
        phone: '',
        vip: '',
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
    function handleSubmit(evt) {
        evt.preventDefault();

        const url = "http://localhost:2122/customers";
        const method = "POST";

        const init = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {
                    "firstName": formState.firstName,
                    "lastName": formState.lastName,
                    "email": formState.email,
                    "phone": formState.phone,
                    "address": {
                        "street1": formState.street1,
                        "street2": formState.street2,
                        "city": formState.city,
                        "state": formState.state,
                        "zipcode": formState.zipcode
                    },
                    "vip": formState.vip
                }
            )
        };

        fetch(url, init)
            .then(response => {
                return response.json();
            })
            .then((data) => {
                console.log('/addCustomer: ', data);
                alert(`${data.firstName} ${data.lastName} added to Customers`);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        setFormState({
            email: '',
            firstName: '',
            lastName: '',
            street1: '',
            street2: '',
            city: '',
            state: '',
            zipcode: '',
            phone: '',
            vip: '',
        });

    }

    function goBack() {
        document.location.replace(`/`);
    }

    return (
        <Container fluid>
            <Row>
                <Col md="1">
                    <Sidebar />
                </Col>
                <Col md="11">
                    <Row className='m-3'>
                        <Col md="4">
                            <Card className="card-user">
                                <Card.Body>
                                    <div>
                                        <img
                                            alt="..."
                                            className="avatar border-gray"
                                            src={"http://placecorgi.com/260/180"}
                                        />
                                        <h5 className="title">{formState.firstName} {formState.lastName}</h5>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="8">
                            <Card className="card-user">
                                <Card.Header>
                                    <Card.Title tag="h5">Add Customer</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col className="pl-1" md="6">
                                                <Form.Group>
                                                    <label htmlFor="exampleInputEmail1">
                                                        Email address
                                                    </label>
                                                    <Form.Control
                                                        name="email"
                                                        value={formState.email ?? ""}
                                                        onChange={handleChange}
                                                        type="email" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <Form.Group>
                                                    <label>First Name</label>
                                                    <Form.Control
                                                        name="firstName"
                                                        value={formState.firstName ?? ""}
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="6">
                                                <Form.Group>
                                                    <label>Last Name</label>
                                                    <Form.Control
                                                        name="lastName"
                                                        value={formState.lastName ?? ""}
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label>Address</label>
                                                    <Form.Control
                                                        name="street1"
                                                        value={formState.street1 ?? ""}
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label>Address 2</label>
                                                    <Form.Control
                                                        name="street2"
                                                        value={formState.street2 ?? ""}
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="4">
                                                <Form.Group>
                                                    <label>City</label>
                                                    <Form.Control
                                                        name="city"
                                                        value={formState.city ?? ""}
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="px-1" md="4">
                                                <Form.Group>
                                                    <label>State</label>
                                                    <Form.Control
                                                        name="state"
                                                        value={formState.state ?? ""}
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col className="pl-1" md="4">
                                                <Form.Group>
                                                    <label>Zip Code</label>
                                                    <Form.Control
                                                        name="zipcode"
                                                        value={formState.zipcode ?? ""}
                                                        onChange={handleChange}
                                                        type="text" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <Form.Group>
                                                    <label>Phone</label>
                                                    <Form.Control
                                                        name="phone"
                                                        value={formState.phone ?? ""}
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md="6">
                                                <Form.Group>
                                                    <label>VIP</label>
                                                    <Form.Control
                                                        name="vip"
                                                        value={formState.vip ?? ""}
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className='my-3'>
                                            <div>
                                                <Button
                                                    className="btn-round mr-3"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Add Customer
                                                </Button>
                                                <Button
                                                    className="btn-round mx-3"
                                                    variant="secondary"
                                                    onClick={() => goBack()}
                                                >
                                                    Go Back
                                                </Button>
                                            </div>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};