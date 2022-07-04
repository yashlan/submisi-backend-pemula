const books = require('../model/books');
const { response } = require('../response');

const deleteBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const index = books.findIndex((b) => b.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);
    return response(h, {
      status: 'success',
      message: 'Buku berhasil dihapus',
    }, 200);
  }

  return response(h, {
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  }, 404);
};

module.exports = { deleteBookByIdHandler };
