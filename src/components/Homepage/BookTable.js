import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap"
import BookRow from "./BookRow";
// import books from "../../util/bookSeeds"
// import { booksFetch, getAllBooks } from "../Book/api-book"
export default function BookTable() {
    const [books, setBooks] = useState([]);

    // let books = getAllBooks();
    useEffect(() => {
      fetch("http://localhost:8080/books")
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
                    {books.map((book, index) => (
                        // <tr onClick={() => goToSingleBook(book._id)}
                        <BookRow key={book.id} book={book} />
                    ))}
                </tbody>
            </Table>
            </Card>
    )
}