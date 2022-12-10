import express from 'express';
import path from 'path';
import mySQL from 'mysql';

const publicPath = path.resolve('public');
const imagesPath = path.resolve(publicPath + '/images');
const styleSheetsPath = path.resolve(publicPath + '/stylesheets');
const javaScriptPath = path.resolve(publicPath + '/javaScript');
const app = express();
app.set("view engine", "ejs");
app.use(express.static(publicPath));
app.use(express.static(imagesPath));
app.use(express.static(styleSheetsPath));
app.use(express.static(javaScriptPath));
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
    res.render('home');
})

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/pilih-buku', (req, res) => {
    res.render('pilihBuku');
})

app.get('/pilih-nama', (req, res) => {
    res.render('pilihNama');
})

app.get('/graf', (req, res) => {
    res.render('HalamanGraf');
})

app.listen('8080', () => {
    console.log("Ready");
})

const pool = mySQL.createPool({
    user: 'root',
    password: '',
    database: 'tubes_manpro',
    host: 'localhost'
})

const dbConnect = () =>{
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                reject(err)
            } else {
                resolve(conn)
            }
        })
    })
}

const getBook1 = async (conn)=>{
    return new Promise((resolve, reject) => {
        const stringSql = "SELECT * FROM book1"
        conn.query(stringSql, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

const getBook2 = async (conn)=>{
    return new Promise((resolve, reject) => {
        const stringSql = "SELECT * FROM book2"
        conn.query(stringSql, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

const getBook3 = async (conn)=>{
    return new Promise((resolve, reject) => {
        const stringSql = "SELECT * FROM book3"
        conn.query(stringSql, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

const getBook4 = async (conn)=>{
    return new Promise((resolve, reject) => {
        const stringSql = "SELECT * FROM book4"
        conn.query(stringSql, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

const getBook5 = async (conn)=>{
    return new Promise((resolve, reject) => {
        const stringSql = "SELECT * FROM book5"
        conn.query(stringSql, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

