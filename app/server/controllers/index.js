import express from 'express'

let router = express.Router();

router.use('/authors', require('./authors'), require('./books'));

module.exports = router;