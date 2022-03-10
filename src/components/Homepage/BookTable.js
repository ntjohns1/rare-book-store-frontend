import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap"
import BookRow from "./BookRow";
export default function BookTable() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2121/books")
            .then(response => response.json())
            .then(result => setBooks(result))
            .catch(console.log);
    }, []);

    return (
        <Card bg="dark">
            <Card.Title className="text-center pt-2 text-white"><h3>Book Inventory</h3></Card.Title>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Year Published</th>
                        <th>Edition</th>
                        <th>Biding</th>
                        <th>Condition</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <BookRow key={book.id} book={book} />
                    ))}
                </tbody>
            </Table>
        </Card>
    )
}