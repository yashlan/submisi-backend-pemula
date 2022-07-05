const books = require('../model/books');
const { response } = require('../response');

const getAllBookHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  if (name) {
    const result = books.filter((b) => b.name.toLowerCase().includes(name.toLowerCase()));
    return response(h, {
      status: 'success',
      data: {
        books: result.map((b) => ({
          id: b.id,
          name: b.name,
          publisher: b.publisher,
        })),
      },
    }, 200);
  }

  if (reading) {
    if (reading === '1') {
      const result = books.filter((b) => b.reading === true);
      return response(h, {
        status: 'success',
        data: {
          books: result.map((b) => ({
            id: b.id,
            name: b.name,
            publisher: b.publisher,
          })),
        },
      }, 200);
    }

    if (reading === '0') {
      const result = books.filter((b) => b.reading === false);
      return response(h, {
        status: 'success',
        data: {
          books: result.map((b) => ({
            id: b.id,
            name: b.name,
            publisher: b.publisher,
          })),
        },
      }, 200);
    }
  }

  if (finished) {
    if (finished === '1') {
      const result = books.filter((b) => b.finished === true);
      return response(h, {
        status: 'success',
        data: {
          books: result.map((b) => ({
            id: b.id,
            name: b.name,
            publisher: b.publisher,
          })),
        },
      }, 200);
    }

    if (finished === '0') {
      const result = books.filter((b) => b.finished === false);
      return response(h, {
        status: 'success',
        data: {
          books: result.map((b) => ({
            id: b.id,
            name: b.name,
            publisher: b.publisher,
          })),
        },
      }, 200);
    }
  }

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
