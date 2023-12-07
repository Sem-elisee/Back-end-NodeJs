var mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basetecknode'
})

const connectDB = () => {
    db.connect(err => {
        if (err){
            console.error('Erreur de connexion à la base de données : ' + err.message);
        }else{
            console.log('Connexion à la base de données établie');
        }
    })
}

module.exports = {
    connectDB,
    db
}