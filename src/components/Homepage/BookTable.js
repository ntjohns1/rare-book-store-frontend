import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap"
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

      console.log({...books});


    function goToBook(id) {
        document.location.replace(`/book/${id}`);
    }
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
                        <tr onClick={() => goToBook(index)} key={index}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                            <td>{book.yearWritten}</td>
                            <td>{book.edition}</td>
                            <td>{book.binding}</td>
                            <td>{book.bookCondition}</td>
                            <td>${book.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Card>
    )
}