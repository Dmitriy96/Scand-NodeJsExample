import express from 'express';
import Sequelize from 'sequelize';
import Author from './model/author'
import Book from './model/book'

let sequelize = new Sequelize('mysql://root:superpuper@localhost:3306/authors');

sequelize
    .sync({force: true})
    .then(function (res) {
        console.log('It worked!', res);
        Book.create({name: 'Martin Iden', publishingDate: new Date()}).then(function(book) {
            Author.create({name: 'Jack', surname: 'London', books: [book]});
        });
        Book.create({name: 'Atlas Struggled', publishingDate: new Date()}).then(function(book) {
            Author.create({name: 'Ayn', surname: 'Rand', books: [book]});
        });
    }, function (err) {
        console.log('An error occurred while creating the table:', err);
    });

let app = express();

app.use(express.static('public/html'));
app.use(express.static('public/images'));
app.use(express.static('public/js'));
app.use(express.static('public/stylesheets'));

app.use(require('./controllers'));

app.listen(3000, function() {
    console.log("Listening port 3000.")
});
