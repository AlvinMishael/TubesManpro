import express from 'express';
import path, { parse, resolve } from 'path';

const app = express();
const publicPath = path.resolve('public');

app.set("view engine","ejs");

app.use(express.static(publicPath));
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/home',(req,res)=>{
    res.render('home');
})

app.get('/pilihbuku',(req,res)=>{
    res.render('pilihBuku');
})

app.get('/halamangraf',(req,res)=>{
    res.render('HalamanGraf');
})

app.get('/frekuensikarakter',(req,res)=>{
    res.render('frekuensiKarakter');
})

app.listen('8080',()=>{
    console.log("Ready");
})