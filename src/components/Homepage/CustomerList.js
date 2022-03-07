impo
import { Card, Toast } from 'react-bootstrap';
import customers from '../../util/UserSeeds';


export default function CustomerList() {
    
        // fetch("http://localhost:8080/customers")
        //     .then(response => response.json())
        //     .then(result => setRecords(result))
        //     .catch(console.log);
    
    function goToCustomer(customerId) {
          document.location.replace(`/customer/${customerId}`);
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