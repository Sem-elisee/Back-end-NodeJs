const express = require('express');
const { getAlluser, postUser } = require('../controllers/user');
const router = express.Router()


router.route('/')
    .get(getAlluser)
    .post(postUser)


module.exports = router;