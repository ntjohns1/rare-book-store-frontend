import { Card, Table } from "react-bootstrap"
import books from "../../util/bookSeeds"
export default function BookTable() {
    function goToBook(bookId) {
        document.location.replace(`/book/${bookId}`);
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
                    {books.map((book) => (
                        // <tr onClick={() => goToSingleBook(book._id)}
                        <tr onClick={() => goToBook(book.id)} key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                            <td>{book.yearWritten}</td>
                            <td>{book.edition}</td>
                            <td>{book.binding}</td>
                            <td>{book.condition}</td>
                            <td>${book.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Card>
    )
}