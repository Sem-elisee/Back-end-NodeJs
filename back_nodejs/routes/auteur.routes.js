const express = require('express');
const { getAllAuteurs, postAuteur, putAuteur, deleteAuteur } = require('../controllers/auteur');
const router = express.Router()


router.route('/')
    .get(getAllAuteurs)
    .post(postAuteur)


// Ajoutez la route PUT pour mettre à jour un auteur avec un ID spécifié.
router.put('/:id', putAuteur);
// Ajoutez la route DELETE pour supprimer un auteur avec un ID spécifié.
router.delete('/:id', deleteAuteur);

module.exports = router