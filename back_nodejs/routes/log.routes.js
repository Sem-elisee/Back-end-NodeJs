const express = require('express');
const { loginUser } = require('../controllers/log');
const router = express.Router()


router.route('/')
    .post(loginUser)


module.exports = router;