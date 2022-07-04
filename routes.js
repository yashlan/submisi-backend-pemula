const { addNewBookHandler } = require("./handler/postBookHandler.js");
const { getAllBookHandler, getDetailBookByIdHandler } = require("./handler/getBookHandler.js");

const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },
    {
        method: 'POST',
        path: '/books',
        handler: addNewBookHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getDetailBookByIdHandler,
    },
];

module.exports = routes;