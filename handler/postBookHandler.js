const { nanoid } = require("nanoid");
const Book = require("../model/Book.js");

const addNewBookHandler = (request, h) => {
        try {
            const id = nanoid(16);
            const insertAt = new Date().toISOString();
            const updatedAt = insertAt;
            const reqPayload = request.payload;
            const isFinished = reqPayload.pageCount === reqPayload.readPage;
            const newBook = new Book(
                id,
                reqPayload.name,
                reqPayload.year,
                reqPayload.author,
                reqPayload.summary,
                reqPayload.publisher,
                reqPayload.pageCount,
                reqPayload.readPage,
                isFinished,
                reqPayload.reading,
                insertAt,
                updatedAt
            );
            if (newBook.name === null || newBook.name === undefined) {
                return h.response({
                    status: "fail",
                    message: "Gagal menambahkan buku. Mohon isi nama buku"
                }).code(400);
            }
            if (newBook.readPage > newBook.pageCount) {
                return h.response({
                    status: "fail",
                    message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
                }).code(400);
            }
            return h.response({
                status: "success",
                message: "Buku berhasil ditambahkan",
                data: {
                    bookId: newBook.id
                }
            }).code(201);
        } catch (error) {
            return h.response({
                status: "error",
                message: "Buku gagal ditambahkan"
            }).code(500);
        }
    }

module.exports = { addNewBookHandler };