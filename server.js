const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var index = require('./app/routes/index');
var cors = require('cors');
var auth = require('./authorization.middleware');

const dbconfig = require('./app/config/configuration');

const app = express();
const ngrok = require('ngrok');
const port = 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(auth.Authenticate);

// parse requests of content-type - application/json
app.use(bodyParser.json());

mongoose.connect(dbconfig.url,{useUnifiedTopology: true, useNewUrlParser: true}).then(()=>{
    console.log('connected to mongodb');
    app.listen( port,'13.59.181.119', () => {
        index(app);
        app.get('/test', (req, res)=>{
            res.json("server is working now");
        });
        console.log("Server is listening on http://localhost:3000");
        ngrok.connect(port, function (err, url) {
            if(err){
                console.log(`issue of ngrok`, err);
            } else{
                console.log(`Node.js local server is publicly-accessible at ${url}`);
            }
        });
    });
}).catch(err => {
    console.log('err while connecting ',err)
})