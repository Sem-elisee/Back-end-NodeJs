const express = require('express')
const { getAllCategories, postCategory, putCategory, deleteCategory } = require('../controllers/categories')
const router = express.Router()

router.route('/')
    .get(getAllCategories)
    .post(postCategory)


// Ajoutez la route PUT pour mettre à jour un auteur avec un ID spécifié.
router.put('/:id', putCategory);
router.delete('/:id', deleteCategory);
module.exports = router