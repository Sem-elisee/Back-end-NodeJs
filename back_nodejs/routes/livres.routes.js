const express = require('express');
const { getAllLivres } = require('../controllers/livres');
const router = express.Router()


router.route('/')
    .get(getAllLivres)
    

module.exports = router