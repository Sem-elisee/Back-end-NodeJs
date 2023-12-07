const express = require('express')
const { getAllBooks, postBooks, putBooks } = require('../controllers/book')
const router = express.Router()

router.route('/')
    .get(getAllBooks)
    .post(postBooks)



router.put('/:id', putBooks)
module.exports = router