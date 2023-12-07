const {
    insertData,
    getAllData,
    iniserPutData,
    deleteData
} = require("../config/controllerconfig");
const {
    db
} = require("../db/connect")


const getAllCategories = (req, res) => {
    const query = 'SELECT * FROM categories'
    getAllData(query, res)
}

const postCategory = (req, res) => {
    const {
        CategoriesNom
    } = req.body
    const query = 'INSERT INTO categories (CategoriesNom) VALUES (?)'
    insertData(query, [CategoriesNom], res)
}



const putCategory = (req, res) => {
    const {
        CategoriesNom
    } = req.body
    const IDCategorie = req.params.id
    const query = 'UPDATE categories SET CategoriesNom = ? WHERE IDCategorie = ?'
    iniserPutData(query, [CategoriesNom, IDCategorie], res)
}

const deleteCategory = (req, res) => {
    const IDCategorie = req.params.id
    const query = 'DELETE FROM categories WHERE IDCategorie = ?'
    deleteData(query, [IDCategorie], res)
}



module.exports = {
    getAllCategories,
    postCategory,
    putCategory,
    deleteCategory
}