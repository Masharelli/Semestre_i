const path = require('path');
const express = require('express');
const mysql = require('mysql');
const app = express();
const wss = express();
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
    /*if(err){
        throw err;
    }*/
    console.log('MySQL connected...');
});

app.set('port',3000);
app.listen(app.get('port'), () => {
    console.log('Database Server started on port', app.get('port'));
});

wss.set('port', 3001);
wss.use(express.static(path.join(__dirname, 'public2')));


const server = wss.listen(wss.get('port'),() =>{
    console.log('WebSocket Server on port', wss.get('port'));
});

//socket io
const SocketIO = require('socket.io');
const { cpuUsage } = require('node:process');
const io = SocketIO(server);

//websockets

io.on('connection', (socket)=>{
    //console.log('new connection');

    socket.on('updateControl', (data)=> {
          //console.log(data);
          //console.log(data.microserviceID);
          //let post = {"componentID": data.componentID, "serviceName": 'Prueba API', "status": data.status};
          //let post = {serviceID:'12', serviceName: 'Microservice 2', status:'400'};
          /*let sql = 'INSERT INTO ' + data.microserviceID + '(componentID,componentName,status, summary) ';
          let sql2 = 'VALUES(' + data.componentID + "," + '"test API"' + "," + '"' + data.status + '"' +"," + '"no problems found");'; */

          let sql = 'UPDATE ' + data.microserviceID +" ";
          let sql2 = 'SET status = "' + data.status + '",';
          let sql3 = 'date = CURRENT_TIMESTAMP '; 
          let sql4 = 'WHERE componentID = ' + data.componentID + ';';

          let sqlf = sql + sql2 + sql3 + sql4;
          console.log(sqlf);
          //console.log(post);
          db.query(sqlf, () => {
            //console.log("success");
        })

    })
}); 

 
//get
app.get('/getcalendar/:month/:microservice', (req, res) => {

   var mID = req.params.microservice;
    let sql = 'SELECT * FROM ' + mID;
    let sqlDate = ' ';

    //console.log(req.params.month);
    if(req.params.month == 'June'){
        sqlDate = ' WHERE DATE(date) BETWEEN DATE(\'2021-06-01\') AND DATE(\'2021-06-30\');';
    }
    if(req.params.month == 'May'){
        sqlDate = ' WHERE DATE(date) BETWEEN DATE(\'2021-05-01\') AND DATE(\'2021-05-31\');';
    }
    if(req.params.month == 'April'){
        sqlDate = ' WHERE DATE(date) BETWEEN DATE(\'2021-04-01\') AND DATE(\'2021-04-31\');';
    }
    
    sql2 = sql + sqlDate;
    
    
    let query = db.query(sql2, (err, result)=>{
        r2 = result.map(v => Object.assign({}, v));
        //console.log(r2);
        res.send(r2);
    });
});


app.get('/getstatus/:mID', (req, res) => {
    
    var mdd = req.params.mID;
    //var mID = "M1";

    let sql = 'SELECT * FROM '+ mdd + '';
    let query = db.query(sql, (err, result)=>{
        //if(err) throw err;
        //console.log(result);
        r2 = result.map(v => Object.assign({}, v));
        //var normalResults = result.map((mysqlObj, index) => {
        //    return Object.assign({}, mysqlObj);
        //});
        //var jsonString = qs.parse(r2);
        //var jsonString = qs.parse(normalResults);
        //console.log(r2);
        //console.log(jsonString);
        //console.log(jsonString);
        //res.send(normalResults);
        res.send(r2);
    });
});