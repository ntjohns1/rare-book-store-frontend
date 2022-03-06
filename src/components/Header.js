import { Navbar, Nav, Container, Col } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Col sm={1}></Col>
                <Navbar.Brand href="#home">Rare-Book-Depot</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};