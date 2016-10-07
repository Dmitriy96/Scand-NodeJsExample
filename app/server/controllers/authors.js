//import Sequelize from 'sequelize';
//
//let sequelize = new Sequelize('jdbc:mysql://root:superpuper@localhost:3306/authors');
//var User = sequelize.define('user', {
//    name: {type: Sequelize.STRING, nullable: false},
//    surname: {type: Sequelize.STRING, nullable: false}
//});
import express from 'express';
import Author from '../model/author'

let router = express.Router();

router.get('/', function(req, res) {
    Author.findAll({ limit: 10 }).then(function(authors) {
        console.log('authors controller', authors);
        res.json(authors);
    });
});

router.post('/', function(req, res) {
    let author = Author.save(author);
    res.json(author);
});

router.put('/:id', function(req, res) {
    let author = Author.get(id);
    if (!author) {
        // res NOT_FOUND
    }
    author = Author.update(author);
    res.json(author);
});

router.post('/:id', function(req, res) {
    let author = Author.get(id);
    if (!author) {
        // res NOT_FOUND
    }
    author.delete();
    res.json(author);
});

module.exports = router;