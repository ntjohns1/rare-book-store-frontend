import React, { useState } from 'react';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar';
import { useIdContext } from "../../context/IdContext";


export default function AddBook() {

    let { bookId } = useIdContext();
    const [formState, setFormState] = useState({
        title: '',
        author: '',
        genre: '',
        yearWritten: '',
        edition: '',
        binding: '',
        bookCondition: '',
        price: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    function handleSubmit(evt) {
        evt.preventDefault();

        const url = "http://localhost:7979/books";
        const method = "POST";
        const expectedStatus = 201;

        const init = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formState)
        };

        fetch(url, init)
            .then(response => {
                if (response.status === expectedStatus) {
                    return response.json();
                }
                return Promise.reject(`Didn't receive expected status: ${expectedStatus}`);
            })
            .then((data) => {
                console.log('/addBook: ', data);
                alert(`${data.title} added to Books`);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        setFormState({
            title: '',
            author: '',
            genre: '',
            yearWritten: '',
            edition: '',
            binding: '',
            bookCondition: '',
            price: ''
        })
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
                    <div className="content">
                        <Row className='m-3'>
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
                                        <Form onSubmit={handleSubmit}>
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
                                                <Col className="pr-1" md="4">
                                                    <Form.Group>
                                                        <label>Genre</label>
                                                        <Form.Control
                                                            name="genre"
                                                            value={formState.genre}
                                                            onChange={handleChange}
                                                            type="text"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col className="pr-1" md="4">
                                                    <Form.Group>
                                                        <label>Year Written</label>
                                                        <Form.Control
                                                            name="yearWritten"
                                                            value={formState.yearWritten}
                                                            onChange={handleChange}
                                                            type="text"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col className="pl-1" md="4">
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
                                                            name="bookCondition"
                                                            value={formState.bookCondition}
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
                    </div>
                </Col>
            </Row>
        </Container>
    )
};