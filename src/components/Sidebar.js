import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Sidebar() {
    return (
        <Nav 
        className="py-4 flex-column bg-dark position-absolute start-0"
        variant="dark"
        style={{ minHeight: "100vh" }}
        >
            <Nav.Link href="/" eventKey='homepage' style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link  href='/addCustomer' eventKey='newCustomer' style={{color:"white"}}>Add Customer</Nav.Link>
            <Nav.Link href='/addBook' eventKey='newBook' style={{color:"white"}}>Add Book</Nav.Link>
        </Nav>
    )
};