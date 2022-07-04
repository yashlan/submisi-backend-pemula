const { nanoid } = require('nanoid');
const books = require('../model/books');
const { response } = require('../response');

const addNewBookHandler = (request, h) => {
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
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  if (newBook.name === null || newBook.name === undefined) {
    return response(h, {
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }, 400);
  }

  if (newBook.readPage > newBook.pageCount) {
    return response(h, {
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }, 400);
  }

  books.push(newBook);

  const isSuccess = books.filter((b) => b.id === id).length > 0;

  if (isSuccess) {
    return response(h, {
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: newBook.id,
      },
    }, 201);
  }

  return response(h, {
    status: 'error',
    message: 'Buku gagal ditambahkan',
  }, 500);
};

module.exports = { addNewBookHandler };
