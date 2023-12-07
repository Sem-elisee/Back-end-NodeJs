const {
    getAllData,
    insertData,
    iniserPutData
} = require("../config/controllerconfig")


const getAllBooks = (req, res) => {
    const query = `SELECT livres.*, auteur.AuteurNom, categories.CategoriesNom
    FROM livres
    LEFT JOIN auteur ON livres.IDAuteur = auteur.IDAuteur
    LEFT JOIN categories ON livres.IDCategorie = categories.IDCategorie`
    getAllData(query, res)
}

const postBooks = (req, res) => {
    const {
        LivresTitre,
        LivresDatePublication,
        LivresDescription,
        LivresCategorie2,
        LivresCategorie3,
        LivresImage,
        LivresStatut,
        LivreQuantite,
        LivresPrix,
        IDAuteur,
        IDCategorie
    } = req.body
    query = 'INSERT INTO livres (LivresTitre, LivresDatePublication, LivresDescription, LivresCategorie2, LivresCategorie3, LivresImage, LivresStatut, LivreQuantite, LivresPrix, IDAuteur, IDCategorie) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    insertData(query, [LivresTitre, LivresDatePublication, LivresDescription, LivresCategorie2, LivresCategorie3, LivresImage, LivresStatut, LivreQuantite, LivresPrix, IDAuteur, IDCategorie], res)
}

const putBooks = (req, res) => {
    const {
        LivresTitre,
        LivresDatePublication,
        LivresDescription,
        LivresCategorie2,
        LivresCategorie3,
        LivresStatut,
        LivreQuantite,
        LivresPrix,
        IDAuteur,
        IDCategorie,
    } = req.body
    const IDLivre = req.params.id
    const query = `UPDATE livres SET LivresTitre=?, LivresDatePublication=?, LivresDescription=?, LivresCategorie2=?, LivresCategorie3=?, LivresStatut=?, LivreQuantite=?, LivresPrix=?, IDAuteur=?, IDCategorie=? WHERE IDLivre=?`
    iniserPutData(query,[LivresTitre, LivresDatePublication, LivresDescription, LivresCategorie2, LivresCategorie3, LivresStatut, LivreQuantite, LivresPrix, IDAuteur, IDCategorie, IDLivre], res)

}

module.exports = {
    getAllBooks,
    postBooks,
    putBooks
}