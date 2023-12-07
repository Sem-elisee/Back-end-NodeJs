const {
    getAllData, insertData
} = require("../config/controllerconfig")
const bcrypt = require("bcrypt")
const { db } = require("../db/connect")
const jwt = require('jsonwebtoken');
const { createSecretKey } = require("crypto");


const getAlluser = (req, res) => {
    const query = `SELECT * FROM users`
    getAllData(query, res)
}

const postUser = async (req, res) => {
    const {
        nomuser,
        prenomsuser,
        emailuser,
        passworduser
    } = req.body
    // Vérifier si l'email existe déjà dans la base de données
    const checkEmailQuery = `SELECT * FROM users WHERE emailuser =?`
    db.query(checkEmailQuery, [emailuser], async (err, resultma) => {
        if (err) {
            return res.status(200).json({ message: 'Erreur lors de la vérification de l\'email' });
        }
        if (resultma.length > 0) {
            return res.status(409).send("User Already Exist. Please Login");
        }else{
            bcrypt.hash(passworduser, 10, async (err, hashedPassword) => {
                if (err) {
                    return res.status(500).json({ message: 'Erreur lors du hachage du mot de passe' });
                }
                const query = `INSERT INTO users (nomuser, prenomsuser, emailuser, passworduser) VALUES (?, ?, ?, ?)`
                insertData(query, [nomuser, prenomsuser, emailuser, hashedPassword], res)
                // const token = jwt.sign( {emailuser}, createSecretKey, { expiresIn: '1h' } )

            })
        }
    })
}






module.exports = {
    getAlluser,
    postUser
}