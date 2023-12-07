const {
    query
} = require("express");
const {
    db
} = require("../db/connect")



const getAllData = (query, res) => {
    db.query(query, (err, result) => {
        if (err) {
            console.error(err, "erreur lors de la recuperation des données");
            res.status(500).json({
                error: "erreur lors de la recuperation des données"
            })
        } else {
            res.json(result)
        }
    })
}

const insertData = (query, arrayData, res) => {
    db.query(query, arrayData, (err, result) => {
        if (err) {
            console.error(err, "erreur lors de l'insertion des données");
            return res.status(500).json({
                error: "erreur lors de la l'insertion des données"
            })
        }
            res.json(result)
        
    })
}

const iniserPutData = (query, arrayData, res) => {
    db.query(query, arrayData, (err, result) => {
        if (err) {
            console.error(err, "erreur lors de la modifs des données");
            res.status(500).json({
                error: "erreur lors de la modifs des données"
            })
        } else {
            res.json(result)
        }
    })
}

const deleteData = (query, arrayData, res) => {
    db.query(query, arrayData, (err, result) => {
        if (err) {
            console.error(err, 'erreur lors de la suppression');
            res.status(500).json({
                error: 'erreur lors de la suppression'
            })
        } else {
            res.json(result)
        }
    })
}

module.exports = {
    insertData,
    getAllData,
    iniserPutData,
    deleteData
}