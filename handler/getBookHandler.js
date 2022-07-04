const books = require('../model/books');
const { response } = require('../response');

const getAllBookHandler = (request, h) => {
  if (books !== undefined) {
    return response(h, {
      status: 'success',
      data: {
        books: books.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    }, 200);
  }

  return response(h, {
    status: 'error',
    message: 'Gagal mengambil data buku',
  }, 500);
};

const getDetailBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const book = books.filter((b) => b.id === bookId)[0];

  if (book !== undefined) {
    return response(h, {
      status: 'success',
      data: {
        book,
      },
    }, 200);
  }

  return response(h, {
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }, 404);
};

module.exports = { getAllBookHandler, getDetailBookByIdHandler };
