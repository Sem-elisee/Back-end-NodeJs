const {
    getAllData
} = require("../config/controllerconfig")
const {
    db
} = require("../db/connect")


const getAllCover = (req, res) => {
    const query = 'SELECT * FROM covers'
    getAllData(query, res)
}

const postCover = (req, res) => {
    const image = req.file.filename
    const query = 'INSERT INTO covers (imagecover) VALUES (?)'
    db.query(query, [image], (err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.json(result)
        }
    })

}



module.exports = {
    getAllCover,
    postCover
}