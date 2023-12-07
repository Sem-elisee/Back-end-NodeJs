const {
    insertData,
    getAllData,
    iniserPutData,
    deleteData
} = require("../config/controllerconfig")
const {
    db
} = require("../db/connect")


const getAllAuteurs = (req, res) => {
    const query = 'SELECT * FROM auteur'
    getAllData(query, res)
}

const postAuteur = (req, res) => {
    const {
        AuteurNom,
        AuteurPrenoms,
        AuteurNationalite,
        AuteurDateNaissance,
        AuteurBiographie,
        AuteurImage
    } = req.body
    const query = 'INSERT INTO auteur (AuteurNom, AuteurPrenoms, AuteurNationalite, AuteurDateNaissance, AuteurBiographie, AuteurImage) VALUES(?, ?, ?, ?, ?, ?)'
    insertData(query, [AuteurNom, AuteurPrenoms, AuteurNationalite, AuteurDateNaissance, AuteurBiographie, AuteurImage], res)
}

const putAuteur = (req, res) => {
    const {
        AuteurNom,
        AuteurPrenoms,
        AuteurNationalite,
        AuteurDateNaissance,
        AuteurBiographie,
        AuteurImage
    } = req.body
    const IDAuteur = req.params.id
    const query = 'UPDATE auteur SET AuteurNom=?, AuteurPrenoms=?, AuteurNationalite=?, AuteurDateNaissance=?, AuteurBiographie=?, AuteurImage=? WHERE IDAuteur=?'
    iniserPutData(query, [AuteurNom, AuteurPrenoms, AuteurNationalite, AuteurDateNaissance, AuteurBiographie, AuteurImage, IDAuteur], res)
}

const deleteAuteur = (req, res) => {
    const IDAuteur = req.params.id
    const query = 'DELETE FROM auteur WHERE IDAuteur=?'
    deleteData(query, [IDAuteur], res)
}


module.exports = {
    getAllAuteurs,
    postAuteur,
    putAuteur,
    deleteAuteur
}