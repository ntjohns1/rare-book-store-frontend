import { Table } from "react-bootstrap"
import bookSeeds from "../../util/bookSeeds"
export default function BookTable() {

    return (
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
                {bookSeeds.map((book) => (
                    // <tr onClick={() => goToSingleBook(book._id)}
                    <tr>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>   
                        <td>{book.genre}</td>   
                        <td>{book.yearPublished}</td>   
                        <td>{book.edition}</td>   
                        <td>{book.binding}</td>   
                        <td>{book.condition}</td>   
                        <td>${book.price}</td>   
                    </tr>
                    ))}
            </tbody>
        </Table>

    )
}