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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
    res.render('home');
})

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/pilihBuku', (req, res) => {
    res.render('pilihBuku');
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


//fungsi pilih nama
app.get('/pilihNama', (req, res) => {
    res.render('pilihNama', {
        data: null,
        rowCount: null,
        pageCount: null
    });
})

const getData = async (connection, book, character, page) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT Target, weight FROM ?? WHERE Source=? ORDER BY weight DESC LIMIT ?,10`;
        connection.query(sql, [book, character, page], (err, res) => {
            if(err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const getRowCount = async (connection, book, character, page) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT COUNT(*) as 'jumlahData' FROM book1 WHERE Source=?`;
        connection.query(sql, [character, page], (err, res) => {
            if(err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

app.get('/getData/', async (req, res) => {
    const connection = await dbConnect();
    const book = req.query.book;
    const character = req.query.character;
    const data = await getData(connection, book, character, 1);
    const rowCount = await getRowCount(connection, book, character);
    console.log(data);
    connection.release();

    res.render('pilihNama', {
        book: book,
        character: character,
        data: data,
        pageCount: getPageCount(rowCount['0'].jumlahData)
    });
});

app.get('/getData/:page', async (req, res) => {
    const connection = await dbConnect();
    const book = req.query.book;
    const character = req.query.character;
    console.log(character)
    const page = parseInt(req.params.page);
    const data = await getData(connection, book, character, page);
    const rowCount = await getRowCount(connection, book, character);
    console.log("ini rowcount:"+rowCount['0'].jumlahData);
    connection.release();

    res.render('pilihNama', {
        book: book,
        character: character,
        data: data,
        pageCount: getPageCount(rowCount['0'].jumlahData)
    });
});

const getPageCount = (page) => {
    return parseInt(page/10);
}