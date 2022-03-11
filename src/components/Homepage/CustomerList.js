import { useEffect, useState } from "react";
import { Card, Toast } from 'react-bootstrap';

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:7979/customers")
            .then(response => response.json())
            .then(result => setCustomers(result))
            .catch(console.log);
    }, []);

    function goToCustomer(customerId) {
        document.location.replace(`/customers/${customerId}`);
    }

    return (
        <Card>
            <Card.Header>
                <h4>Customers</h4>
            </Card.Header>
            {customers.map((customer) => (
                <Toast onClick={() => goToCustomer(customer.id)} key={customer.id}>
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">{customer.firstName} {customer.lastName}</strong>
                    </Toast.Header>
                </Toast>
            ))}
        </Card>
    )
}