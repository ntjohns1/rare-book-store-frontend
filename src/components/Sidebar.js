import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Sidebar() {
    return (
        <Nav className="flex-column">
            <Nav.Link as={Link} to='/' eventKey='homepage'>Home</Nav.Link>
            <Nav.Link as={Link} to='/addUser' eventKey='newCustomer'>Add Customer</Nav.Link>
            <Nav.Link as={Link} to='/addBook' eventKey='newBook'>Add Book</Nav.Link>
        </Nav>
    )
};