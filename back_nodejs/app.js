const express = require('express');
const cors = require('cors')
const { connectDB } = require('./db/connect');
const app = express();
const port = 4000;
const path = require('path')

const categories = require('./routes/categories.routes')
const auteurs = require('./routes/auteur.routes')
const livres = require('./routes/livres.routes')
const img = require('./routes/img.routes')
const book = require('./routes/book.routes')
const cover = require('./routes/covers.routes')
const user = require('./routes/user.routes')
const log = require('./routes/log.routes')

app.use(express.json());
app.use(cors());
app.use('/api/v.01/img', express.static(path.join(__dirname, 'public/img')))
app.use('/api/v.01/categories', categories)
app.use('/api/v.01/auteurs', auteurs)
app.use('/api/v.01/livres', livres)
app.use('/api/v.01/imgauteurs', img)
app.use('/api/v.01/books', book)
app.use('/api/v.01/covers', cover)
app.use('/api/v.01/cover', express.static(path.join(__dirname, 'public/cover')))
app.use('/api/v.01/users', user)
app.use('/api/v.01/logins', log)


const start = async () => {
    try{
       await connectDB()
       app.listen(port, console.log(`le server fonctionne au port: ${port}`))
    }catch(e){
        console.log(e);
    }
}

start()