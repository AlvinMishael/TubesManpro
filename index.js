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

app.get('/pilih-buku', async (req, res) => {
    /*const conn = await dbConnect();
    const getTop10NamaCharacterBook1Async = async (conn)=>{
        return new Promise((resolve, reject) => {
            const stringSql = "SELECT TOP 10 Source AS ‘Name’ FROM book1 GROUP BY Source ORDER BY SUM(Weight) DESC"
            conn.query(stringSql, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }

    const getTop10NamaCharacterBook1 = await getTop10NamaCharacterBook1Async(conn)

    console.log(getTop10NamaCharacterBook1)
    
    const getTop10JumlahCharacterBook1 = async (conn)=>{
        return new Promise((resolve, reject) => {
            const stringSql = "SUM(Weight) AS ‘Jumlah’ FROM book1 GROUP BY Source ORDER BY SUM(Weight) DESC"
            conn.query(stringSql, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }
    
    
    
    const getTop10NamaCharacterBook2 = async (conn)=>{
        return new Promise((resolve, reject) => {
            const stringSql = "SELECT TOP 10 Source AS ‘Name’ FROM book2 GROUP BY Source ORDER BY SUM(Weight) DESC"
            conn.query(stringSql, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }
    
    const getTop10JumlahCharacterBook2 = async (conn)=>{
        return new Promise((resolve, reject) => {
            const stringSql = "SELECT TOP 10 SUM(Weight) AS ‘Jumlah’ FROM book2 GROUP BY Source ORDER BY SUM(Weight) DESC"
            conn.query(stringSql, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }
    
    const getTop10NamaCharacterBook3 = async (conn)=>{
        return new Promise((resolve, reject) => {
            const stringSql = "SELECT TOP 10 Source AS ‘Name’ FROM book3 GROUP BY Source ORDER BY SUM(Weight) DESC"
            conn.query(stringSql, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }
    
    const getTop10JumlahCharacterBook3 = async (conn)=>{
        return new Promise((resolve, reject) => {
            const stringSql = "SELECT TOP 10 SUM(Weight) AS ‘Jumlah’ FROM book3 GROUP BY Source ORDER BY SUM(Weight) DESC"
            conn.query(stringSql, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }
    
    const getTop10NamaCharacterBook4 = async (conn)=>{
        return new Promise((resolve, reject) => {
            const stringSql = "SELECT TOP 10 Source AS ‘Name’ FROM book4 GROUP BY Source ORDER BY SUM(Weight) DESC"
            conn.query(stringSql, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }
    
    const getTop10JumlahCharacterBook4 = async (conn)=>{
        return new Promise((resolve, reject) => {
            const stringSql = "SELECT TOP 10 SUM(Weight) AS ‘Jumlah’ FROM book4 GROUP BY Source ORDER BY SUM(Weight) DESC"
            conn.query(stringSql, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }
    
    const getTop10NamaCharacterBook5 = async (conn)=>{
        return new Promise((resolve, reject) => {
            const stringSql = "SELECT TOP 10 Source AS ‘Name’ FROM book5 GROUP BY Source ORDER BY SUM(Weight) DESC"
            conn.query(stringSql, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                    console.log(stringSql)
                }
            })
        })
    }
    
    const getTop10JumlahCharacterBook5 = async (conn)=>{
        return new Promise((resolve, reject) => {
            const stringSql = "SELECT TOP 10 SUM(Weight) AS ‘Jumlah’ FROM book5 GROUP BY Source ORDER BY SUM(Weight) DESC"
            conn.query(stringSql, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                    console.log(stringSql)
                }
            })
        })
    }

    res.render('pilihBuku', {
        namaBuku1 : getTop10NamaCharacterBook1,
        jumlahBuku1: getTop10JumlahCharacterBook1,
        namaBuku2 :  getTop10NamaCharacterBook2,
        jumlahBuku2: getTop10JumlahCharacterBook2,
        namaBuku3 :  getTop10NamaCharacterBook3,
        jumlahBuku3: getTop10JumlahCharacterBook3,
        namaBuku4 :  getTop10NamaCharacterBook4,
        jumlahBuku4: getTop10JumlahCharacterBook4,
        namaBuku5 :  getTop10NamaCharacterBook5,
        jumlahBuku5: getTop10JumlahCharacterBook5


    });*/
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

