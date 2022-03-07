import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";
import BookTable from "./BookTable";
import CustomerList from "./CustomerList";

export default function Homepage() {
    // const loggedStatus = Auth.loggedIn();
    return (
        <Container fluid>
            <Row>
                <Col xs={1}>
                    <Sidebar />
                </Col>
                <Col xs={11}>
                    {/* {loggedStatus ? ( */}
                    <Row className="m-3">
                        <Col xs={3}>
                            <div className="p-3"
                                style={{
                                    maxHeight: '90vh',
                                    overflowY: 'auto'
                                }}
                            >
                                {/* <ViewCustomers /> */}
                                <CustomerList />
                            </div>
                        </Col>
                        <Col xs={9}>
                            <div className="p-3 my- 3"
                                style={{
                                    maxHeight: '90vh',
                                    overflowY: 'auto'
                                }}
                            >
                                <BookTable />
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