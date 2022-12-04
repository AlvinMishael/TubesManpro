import express from 'express';
import path from 'path';

const publicPath = path.resolve('public');
const imagesPath = path.resolve(publicPath + '/images');
const styleSheetsPath = path.resolve(publicPath + '/stylesheets');

const app = express();
app.set("view engine", "ejs");
app.use(express.static(publicPath));
app.use(express.static(imagesPath));
app.use(express.static(styleSheetsPath));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
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