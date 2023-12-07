const { db } = require("../db/connect")


const getAllLivres = (req, res) => {
    const query = 'SELECT * FROM livres'
    db.query(query, (err, result) => {
        if(err) {
            console.error(err, 'erreur lors de la recuperation des livres');
            res.status(500).json({error: 'erreur lors de la recuperation des auteurs'});
        }else{
            res.json(result)
        }
    })
}

module.exports = {
    getAllLivres
}