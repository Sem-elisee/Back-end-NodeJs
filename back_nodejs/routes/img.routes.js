const express = require('express');
const multer = require('multer')
const { getAllImages, postImages } = require('../controllers/ima');
const router = express.Router()
const path = require('path')



const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, path.join(__dirname, '../public/img'));
    },
    filename: (req, file, cd) =>{
        cd(null, file.originalname)
    }
}); // Stocker l'image en mémoire
const upload = multer({ storage });

router.route('/')
 .get(getAllImages)
 .post(upload.single('AuteurImage'), postImages)

module.exports = router;
