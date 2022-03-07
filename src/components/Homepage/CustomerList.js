import { Card, Toast } from 'react-bootstrap';
import customers from '../../util/UserSeeds';


export default function CustomerList() {
    return (
        <Card>
            <Card.Header>
                <h4>Customers</h4>
                </Card.Header>
            {customers.map((customer) => (
                // <Toast onClick={() => goToCustomer(customer._id)}>
                <Toast>
                <Toast.Header closeButton={false}>
                  <strong className="me-auto">{customer.firstName} {customer.lastName}</strong>
                </Toast.Header>
              </Toast>
            ))}
        </Card>
    )
}