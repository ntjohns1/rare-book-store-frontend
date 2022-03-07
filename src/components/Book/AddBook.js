import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar';

export default function AddCustomer() {
    // form input to add Customer
    const [formState, setFormState] = useState({
        title: '',
        author: '',
        genre: '',
        yearPublished: '',
        edition: '',
        binding: '',
        condition: '',
        price: ''
    });


    // let address = { ...customer.address }
    // console.log(address);

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
            title,
            author,
            genre,
            yearPublished,
            edition,
            binding,
            condition,
            price
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
            title,
            author,
            genre,
            yearPublished,
            edition,
            binding,
            condition,
            price
        });
    };

    function goBack() {
        document.location.replace(`/`);
    }

    return (
        <Container fluid>
            <Row>
                <Col md="2">
                    <Sidebar />
                </Col>
                <Col md="10">
                    <div className="content">
                        <Row>
                            <Col md="4">
                                <Card className="card-user">
                                    <Card.Body>
                                        <div className="author">
                                            <img
                                                alt="..."
                                                className="avatar border-gray"
                                                src={"http://placecorgi.com/260/180"}
                                            />
                                        </div>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col md="8">
                                <Card className="card-user">
                                    <Card.Header>
                                        <Card.Title tag="h5">Add Book</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form onSubmit={handleFormSubmit}>
                                            <Row>
                                                <Col className="px-1" md="6">
                                                    <Form.Group>
                                                        <label>Title</label>
                                                        <Form.Control
                                                            name="title"
                                                            value={formState.title}
                                                            onChange={handleChange}
                                                            type="text"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col className="pl-1" md="6">
                                                    <Form.Group>
                                                        <label>
                                                            Author
                                                        </label>
                                                        <Form.Control
                                                            name="author"
                                                            value={formState.author}
                                                            onChange={handleChange}
                                                            type="text" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="pr-1" md="6">
                                                    <Form.Group>
                                                        <label>Year Written</label>
                                                        <Form.Control
                                                            name="yearPublished"
                                                            value={formState.yearPublished}
                                                            onChange={handleChange}
                                                            type="text"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col className="pl-1" md="6">
                                                    <Form.Group>
                                                        <label>Edition</label>
                                                        <Form.Control
                                                            name="edition"
                                                            value={formState.edition}
                                                            onChange={handleChange}
                                                            type="text"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="4">
                                                    <Form.Group>
                                                        <label>Binding</label>
                                                        <Form.Control
                                                            name="binding"
                                                            value={formState.binding}
                                                            onChange={handleChange}
                                                            type="text"
                                                        />
                                                    </Form.Group>
                                                </Col>

                                                <Col md="4">
                                                    <Form.Group>
                                                        <label>Condition</label>
                                                        <Form.Control
                                                            name="condition"
                                                            value={formState.condition}
                                                            onChange={handleChange}
                                                            type="text"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col className="pr-1" md="4">
                                                    <Form.Group>
                                                        <label>Price</label>
                                                        <Form.Control
                                                            name="price"
                                                            value={formState.price}
                                                            onChange={handleChange}
                                                            type="text"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className='my-3'>
                                                <div className="update ml-auto mr-auto py-4`">
                                                    <Button
                                                        className="btn-round mr-3"
                                                        color="primary"
                                                        type="submit"
                                                    >
                                                        Add Book
                                                    </Button>
                                                    <Button
                                                        className="btn-round mx-3"
                                                        color="primary"
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
                    </div>
                </Col>
            </Row>
        </Container>
    )
};