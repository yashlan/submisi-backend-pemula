const { addNewBookHandler } = require('./handler/postBookHandler');
const { getAllBookHandler, getDetailBookByIdHandler } = require('./handler/getBookHandler');
const { editBookHandler } = require('./handler/updateBookHandler');
const { deleteBookByIdHandler } = require('./handler/deleteBookHandler');
const { response } = require('./response');

const routes = [
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => response(h, {
      code: 404,
      message: 'Halaman tidak ditemukan',
    }, 404),
  },
  {
    method: 'POST',
    path: '/books',
    handler: addNewBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
