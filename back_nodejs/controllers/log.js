const { db } = require("../db/connect");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const secretKey = uuidv4();


const loginUser = async (req, res) => {
    const { emailuser, passworduser } = req.body;

    const checkUserQuery = 'SELECT * FROM users WHERE emailuser = ?';
    db.query(checkUserQuery, [emailuser], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la recherche de l\'utilisateur' });
          }
        if (results.length === 0) {
            return res.status(401).json({ message: 'L\'utilisateur n\'existe pas. Veuillez vous inscrire.' });
        }
        // console.log(results[0]);
        const user = results[0]
        bcrypt.compare(passworduser, user.passworduser, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ message: 'Erreur lors de la vérification du mot de passe' });
            }

            if (!isMatch) {
                return res.status(401).json({ message: 'Mot de passe incorrect' });
            }

            const token = jwt.sign({ emailuser }, secretKey, { expiresIn: '1h' });
            return res.status(200).json({ message: 'Connexion réussie', token });
        })
    })
}

module.exports = {
    loginUser   
}