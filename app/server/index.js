import Author from "./model/author"
import Book from "./model/book"
var express = require('express');
var app = express();

app.use(express.static('public/html'));
app.use(express.static('public/images'));
app.use(express.static('public/js'));
app.use(express.static('public/stylesheets'));

app.get('/authors', function(req, res) {
    new Promise(function(resolve, reject) {
        let books = [
            [new Book('Martin Iden', new Date()), new Book('The Iron Heel', new Date())],
            [new Book('Atlas Shrugged', new Date()), new Book('The Fountainhead', new Date())]
        ];
        resolve(books)
    }).then(function(books) {
        return [
            new Author('Jack','London', books[0]),
            new Author('Ayn', 'Rand', books[1])
        ];
    }).then(function(authors) {
        res.json(authors);
    });
});

app.listen(3000, function() {
    console.log("Listening port 3000.")
});
