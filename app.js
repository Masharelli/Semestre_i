const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const { isJSDocUnknownTag } = require('typescript');

app.use(cors());
app.options('*', cors());


//create connection


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
    let post = {"serviceID":'10', "serviceName": 'Micro 1', "status":'300'};
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
app.get('/getposts/:month/:microservice', (req, res) => {
    
    /*if var2 ==junee 

    date < 1 de julio && >31 mayo

    if var2 == mayo 
    >31 de abril < 1 de junio
    */
   var mID = req.params.microservice;
    let sql = 'SELECT * FROM ' + mID;
    console.log(sql);
    let query = db.query(sql, (err, result)=>{
        //if(err) throw err;
        //console.log(result);
        r2 = result.map(v => Object.assign({}, v));
        //var normalResults = result.map((mysqlObj, index) => {
        //    return Object.assign({}, mysqlObj);
        //});
        //var jsonString = qs.parse(r2);
        //var jsonString = qs.parse(normalResults);
        console.log(r2);
        //console.log(jsonString);
        //console.log(jsonString);
        //res.send(normalResults);
        res.send(r2);
    });
});


app.get('/getposts2', (req, res) => {
    
    /*if var2 ==junee 

    date < 1 de julio && >31 mayo

    if var2 == mayo 
    >31 de abril < 1 de junio
    */
   //var mID = req.params.microservice;
    let sql = 'SELECT * FROM M1';
    let query = db.query(sql, (err, result)=>{
        //if(err) throw err;
        //console.log(result);
        r2 = result.map(v => Object.assign({}, v));
        //var normalResults = result.map((mysqlObj, index) => {
        //    return Object.assign({}, mysqlObj);
        //});
        //var jsonString = qs.parse(r2);
        //var jsonString = qs.parse(normalResults);
        console.log(r2);
        //console.log(jsonString);
        //console.log(jsonString);
        //res.send(normalResults);
        res.send(r2);
    });
});
