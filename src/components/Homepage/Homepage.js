import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";

export default function Homepage() {
    // const loggedStatus = Auth.loggedIn();
    return (
        <Container fluid>
            <Row>
                <Col xs={2}>
                    <Sidebar />
                </Col>
                <Col xs={10}>
                    {/* {loggedStatus ? ( */}
                            <Row>
                                <Col xs={2}>
                                    <div className="p-3">
                                        {/* <ViewCustomers /> */}
                                        <p>Customer List</p>
                                    </div>
                                </Col>
                                <Col xs={10}>
                                    <div className="p-3">
                                        {/* <BookTable /> */}
                                        <p>Book Table</p>
                                    </div>
                                </Col>
                            </Row>
                    {/* ) : (
                        <>
                            <h2>
                                You must be logged in to access this page.
                            </h2>
                        </>
                    )} */}
                </Col>
            </Row>
        </Container >
    )
};