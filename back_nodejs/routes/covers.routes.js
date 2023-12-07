const express = require('express');
const { getAllCover, postCover } = require('../controllers/cover');
const multer = require('multer');
const path = require('path');
const router = express.Router()



const storage = multer.diskStorage({
    destination: (req, file, cd) =>{
        cd(null, path.join(__dirname, '../public/cover'))
    },
    filename: (req, file, cd) =>{
        cd(null, file.originalname)
    }
})
const upload = multer({ storage });



router.route('/')
    .get(getAllCover)
    .post(upload.single('cover'), postCover)
module.exports = router