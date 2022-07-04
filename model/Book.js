class Book {
    constructor(id, name, year, author, summary, publisher, pageCount, readPage, isFinished, insertAt, updatedAt) {
        this.id = id;      
        this.name = name;
        this.year = year;
        this.author = author;
        this.summary = summary;
        this.publisher = publisher;
        this.pageCount = pageCount;
        this.readPage = readPage;
        this.isFinished = isFinished;
        this.insertAt = insertAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = Book;