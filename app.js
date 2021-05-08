const express = require('express');
const mysql = require('mysql');

const app = express();

//create connection

const timer = ms => new Promise( res => setTimeout(res, ms));


const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'MyPassword',
    database : 'dashboarddb'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connected...');
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});

//Insert 2 microservices test

app.get('/addpost1', (req, res) => {
    let post = {serviceID:'10', serviceName: 'Micro 1', status:'300'};
    let sql = 'INSERT INTO Reports SET ?';
    let query = db.query(sql, post, () => {
        //if(err) throw err;
        //console.log(result);
        res.send("Post 1 added");
    })
    console.log("wait 5 seconds")
    timer(5000).then(_=>console.log("done"));
});

app.get('/addpost2', (req, res) => {
    let post = {serviceID:'12', serviceName: 'Microservice 2', status:'400'};
    let sql = 'INSERT INTO reports SET ?';
    let query = db.query(sql, post, () => {
        //if(err) throw err;
        //console.log(result);
        res.send("Post 2 added");
    })
});
 
//get
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM reports';
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Posts fetched');
    });
});

