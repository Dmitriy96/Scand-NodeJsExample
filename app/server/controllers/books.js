import express from 'express';
import Book from '../model/book'

let router = express.Router();

router.get('/:authorId/books', function(req, res) {
    Book.findAll({ limit: 10 }).then(function(books) {
        console.log('books controller', books);
        res.json(books);
    });
});

router.post('/:authorId/books', function(req, res) {
    Book.create(req.params).then(function(book) {   // req.params is pseudocode
        res.json(book);
    });
});

module.exports = router;