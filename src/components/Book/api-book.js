// const getAllBooks = async () => {
//     fetch("http://localhost:8080/books")
//     .then(response => response.json())
//     .then(result => setBooks(result))
//     .catch(console.log);
// };


// const booksFetch = fetch('http://localhost:8080/books/')
//   .then((response) => response.json())
//   .then((books) => {
//     return books;
//   });

// const getAllBooks = () => {
//   booksFetch.then((a) => {
//     console.log(a);
//   });
// };

const getOneBook = async (id) => {
    try {
        const url = `http://localhost:8080/books/${id}`;
        let response = await fetch((url))
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const createBook = async (book) => {
    const url = 'http://localhost:8080/books/';
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(book)
    };
    try {
        let response = await fetch((url, init))
        console.log(response);
        return response;
    } catch (err) {
        console.log(err)
    }

}

const updateBook = async (book) => {
    const url = `http://localhost:8080/books/${book.id}`;
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(book)
    };
    try {
        let response = await fetch((url, init))
        console.log(response);
        return book;
    } catch (err) {
        console.log(err)
    }

}
const deleteBook = async (id) => {
    const url = `http://localhost:8080/books/${id}`;
    // const init = {
    //     method: DELETE,
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     }
    // };
    try {
        let response = await fetch((url, { method: "DELETE" }))
        console.log(response);
        return response.json();
    } catch (err) {
        console.log(err)
    }

}



export { 
    // getAllBooks, 
    getOneBook, 
    createBook, 
    updateBook, 
    deleteBook };