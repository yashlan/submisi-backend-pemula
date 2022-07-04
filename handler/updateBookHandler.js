const books = require('../model/books');
const { response } = require('../response');

const editBookHandler = (request, h) => {
  const { bookId } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const finished = readPage === pageCount;
  const updatedAt = new Date().toISOString();
  const index = books.findIndex((b) => b.id === bookId);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished,
      updatedAt,
    };

    if (!name) {
      return response(h, {
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      }, 400);
    }

    if (readPage > pageCount) {
      return response(h, {
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      }, 400);
    }

    return response(h, {
      status: 'success',
      message: 'Buku berhasil diperbarui',
    }, 200);
  }

  return response(h, {
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  }, 404);
};

module.exports = { editBookHandler };
