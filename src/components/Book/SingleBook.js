import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar';

export default function SingleBook() {
    const id = useParams().id;

    const [book, setBook] = useState({});

    useEffect(() => {
        fetch(`http://localhost:7979/books/${id}`)
            .then(response => response.json())
            .then(result =>
                setBook(result))
            .catch(console.log)
    }, [id]);
    useEffect(() => {
        setFormState({ ...book })
    }, [book]);

    // form input to add Customer
    const [formState, setFormState] = useState({
        title: book ? book.title : '',
        author: book ? book.author : '',
        genre: book ? book.genre : '',
        yearWritten: book ? book.yearWritten : '',
        edition: book ? book.edition : '',
        binding: book ? book.binding : '',
        bookCondition: book ? book.bookCondition : '',
        price: book[id] ? `$${book[id].price}` : '',
    });

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    function handleSubmit(evt) {
        evt.preventDefault();

        const url = `http://localhost:7979/books/${id}`;
        const method = "PUT";

        const init = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formState)
        };

        fetch(url, init)
            .then(() => {
                return formState;
            })
            .then((data) => {
                console.log('/updateBook: ', data);
                alert(`${data.title} successfully updated`);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function handleDelete() {
        fetch(`http://localhost:7979/books/${id}`, { method: "DELETE" })
        .then(() => alert(`${book.title} Deleted`))
        .then(goBack())
        .catch(error => console.log(error));
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
                                        <Card.Title tag="h5">
                                            {book.title} <br />
                                            <small>{book.author}</small>
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form onSubmit={handleSubmit}>
                                            <Row>
                                                <Col className="px-1" md="6">
                                                    <Form.Group>
                                                        <label>Title</label>
                                                        <Form.Control
                                                            name="title"
                                                            value={formState.title ?? ""}
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
                                                            value={formState.author ?? ""}
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
                                                            value={formState.genre ?? ""}
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
                                                            value={formState.yearWritten ?? ""}
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
                                                            value={formState.edition ?? ""}
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
                                                            value={formState.binding ?? ""}
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
                                                            value={formState.bookCondition ?? ""}
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
                                                            value={formState.price ?? ""}
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
                                                        Update Book
                                                    </Button>
                                                    <Button
                                                        className="btn-round mx-3"
                                                        variant="danger"
                                                        onClick={() => handleDelete()}

                                                    >
                                                        Delete Book
                                                    </Button>
                                                    <Button
                                                        className="btn-round ml-3"
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