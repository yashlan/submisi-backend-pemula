const books = require('../model/books');

const getAllBookHandler = (request, h) => {
  if (books !== undefined) {
    return h.response({
      status: 'success',
      data: {
        books: books.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    }).code(200);
  }
  return h.response({
    status: 'error',
    message: 'Gagal mengambil data buku',
  }).code(500);
};

const getDetailBookByIdHandler = (request, h) => {
  const { bookId, name, finished } = request.params;
  const book = books.filter((b) => b.id === bookId)[0];
  if (book !== undefined) {
    return h.response({
      status: 'success',
      data: {
        book,
      },
    }).code(200);
  }
  return h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404);
};

module.exports = { getAllBookHandler, getDetailBookByIdHandler };
