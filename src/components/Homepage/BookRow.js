export default function BookRow({ book }) {
    function goToBook(id) {
        document.location.replace(`/book/${id}`);
    }
    return (
        <tr onClick={() => goToBook(book.id)} key={book.id}>
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
    )
}