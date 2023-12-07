const { db } = require("../db/connect")


const getAllImages = (req, res, next) =>{
    const query = 'SELECT * FROM imgtest'
    db.query(query, (err, result) =>{
        if(err){
            console.error(err); 
        }else{
            res.json(result)
        }
    })
}


const postImages = (req, res) =>{
    const query = 'INSERT INTO imgtest (image) VALUES (?)'
    const image = req.file.filename
    db.query(query, [image], (err, result) =>{
        if(err){
            console.error(err); 
        }else{
            res.json(result)
        }
    })

}

module.exports = {
    getAllImages,
    postImages
}


