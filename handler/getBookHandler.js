
const getAllBookHandler = (request, h) => {
    const books = [];
    const id = request.params;
    const book = books.filter((book) => book.id === id);

    if (book !== undefined) {
        return h.response({
            status: "success",
            data: {
                books: []
            }
        }).code(200);
    }

    if (books.length === 0) {
        return h.response({
            status: "success",
            data: {
                books: []
            }
        }).code(200);
    }
}

const getDetailBookByIdHandler = (request, h) => {
    const id = request.params.bookId;
    const books = [];
    const book = books.filter((book) => book.id === id);
    return h.response({
        status: "success",
        data: {
            books: book.id
        }
    }).code(200);
}

module.exports = { getAllBookHandler, getDetailBookByIdHandler };
